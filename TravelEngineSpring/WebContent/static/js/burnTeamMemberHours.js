 var dialog = $('#dialog-modal');
 var burnhistorydialog = $('#hiddenburnhistory');

 $('#dialog-modal').dialog( {
 	 bgiframe: true,
     position: 'center',
     width: 300,
     height: 200,
 	 title: "Change the task status",                
     modal: true,
     autoResize: true,
     autoOpen: false } );
 
 
 $('#hiddenburnhistory').dialog( {
 	 bgiframe: true,
     position: 'center',
     width: 200,
     height: 100,
 	 title: "Burn History",                
     modal: true,
     autoResize: true,
     autoOpen: false } );

$(document).ready(function(){  

		$("#menu a").removeClass("active");
	 $("#burnTeamHours").addClass("active");
	 
 $("tr:even").css("background-color", "#F3E2A9");
	  $("tr:odd").css("background-color", "#F5F6CE");

	  
	  $("#hours").keypress(function(e) {
			//if the letter is not digit then display error and don't type anything
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				return false;
			}
		});
 } ) ;

 
 

 function showburndownhistory(story)
 {
	 $.ajax({
	        type: "GET",
	        url: contextPath+'/storyburnhistory',
	        data:{ storyId:story},
	        dataType: 'json',
	        success: function(response){
	        	var historytable = $("<table/>");
	        	var headingrow = $("<tr/>").attr('id','headingrow');
 	        	var headingth = $("<th/>").text("Story ID"); 
 	        	headingrow.append(headingth);
 	        	headingth = $("<th/>").text("Date");
 	        	headingrow.append(headingth);
 	        	headingth = $("<th/>").text("Hours");
 	        	headingrow.append(headingth);
 	        	historytable.append(headingrow);
	        	$.each(response, function() {
	        		var normalrow = $("<tr/>"); 
	        		normalrow.append($("<td/>").text(this.storyId));
	        		normalrow.append($("<td/>").text(this.date));
	        		normalrow.append($("<td/>").text(this.hours));
	        		historytable.append(normalrow);
	            });
	        	burnhistorydialog.empty();
 	        	burnhistorydialog.append(historytable);
	        	burnhistorydialog.dialog('open');
	        	$("tr:even").css("background-color", "#F3E2A9");
	      	  $("tr:odd").css("background-color", "#F5F6CE");
	        }
	         ,
   error: function(e){
       alert("Error in saving the state...");
   }
});
 }
 

 function showMemberTasks(memberCode) {
	 window.location = contextPath+'/lead/burnTeamMemberHours?empId=' + memberCode;
}
 
 
 var dateHoursMap = {};
 
 function openSaveStateOverlay(story,todayhours,state){
	 
	 $.ajax({
	        type: "GET",
	        url: contextPath+'/findDateRange',
	        data:{ storyId:story},
	        dataType: 'json',
	        success: function(workdaterange){
	        	
	        	$("#burndate").empty();
	        	$.each(workdaterange, function() {
	        		var date = new Date(this);
	        		date = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
	        		 option = $("<option/>").attr('value',date).text(date);
	        		$("#burndate").append(option);
	            });
	        	
	        	var date = new Date();
        		date = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
        		
        	  	$("#taskstoryId").text(story);
	        	$("#burndate").val(date);
	        	$("#hoursondate").removeAttr("disabled");
	        	$("#hoursondate").val(todayhours);
	        	$("#statusondate").val(state);
	        	dialog.dialog('open');
	        	
	        	if(state!="In Progress")
	        		{
	        		$("#hoursondate").val(null);
	    			$("#hoursondate").attr("disabled", "disabled");
	        		}
	        	
	        	//putting values in map for future use.
	        	
	        	dateHoursMap[date] = todayhours;

	        }
	         ,
   error: function(e){
       alert("Error in fetching the assigned date...");
   }
});
	 }
 
 function findhistoryonthisdate(date)
 {
	 $.ajax({
	        type: "GET",
	        url: contextPath+'/findhistoryonthisdate',
	        data:{ story: $("#taskstoryId").text(), date:date},
	        dataType: 'json',
	        success: function(res){
	        	$("#hoursondate").removeAttr("disabled");
	        	$("#hoursondate").val(res.hours);
	        	$("#statusondate").val(res.status);
	        	if(res.status!="In Progress")
        		{
        		$("#hoursondate").val(null);
    			$("#hoursondate").attr("disabled", "disabled");
        		}
	        	
	        	
	        	//putting values in map for future use.
	        	
	        	dateHoursMap[date] = res.hours;

	        	
	        }
	         ,
   error: function(e){
       alert("Error in fetching hours on this date...");
   }
});
 }
 
 function enableDisableHoursTextBox(){
//		if($("#state").val() == "In Progress" || $("#state").val() == "For GD")
		
		if($("#statusondate").val() != "In Progress")
			{
				$("#hoursondate").val(null);
				$("#hoursondate").attr("disabled", "disabled");
			}	
		if($("#statusondate").val() == "In Progress")
			{
				$("#hoursondate").removeAttr("disabled");
				var dated = $("#burndate").val();
				$("#hoursondate").val(dateHoursMap[dated]);
			}
		 }

 function burnhoursondate()
 {
	 var newhours = $("#hoursondate").val();
	 
	 if($("#hoursondate").val().length ==  0)
	 newhours = 0;
		
	 $.ajax({
	        type: "GET",
	        url: contextPath+'/burnhoursondate',
	        data:{ story:$("#taskstoryId").text(), date : $("#burndate").val() , hours : newhours , state : $("#statusondate").val() },
	        success: function(response){
		        alert(response);
		        dialog.dialog('close');
	        }
	         ,
      error: function(e){
          alert("Error in saving the state...");
      }
 });
	 }

 

