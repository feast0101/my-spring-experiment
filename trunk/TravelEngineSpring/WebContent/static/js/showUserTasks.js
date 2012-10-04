$(document).ready(function(){  

		$("#menu a").removeClass("active");
	 $("#showMytasks").addClass("active");
	 
 $("tr:even").css("background-color", "#F3E2A9");
	  $("tr:odd").css("background-color", "#F5F6CE");

	  $("#hours").keypress(function(e) {
			//if the letter is not digit then display error and don't type anything
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				return false;
			}
		});
 } ) ;


var currentState;
var todayCurrentHours;

var dialog = $('#dialog-modal');

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
 
 function openSaveStateOverlay(storyId,state,todayhours){
	 currentState = state;
	 todayCurrentHours = todayhours;
	 $("#hours").removeAttr("disabled");
	 $("#taskstoryId").text(storyId);
	 $("#state").val(state);
	 $("#hours").val(todayCurrentHours);
	 $("#todayhours").text(todayCurrentHours);
	 dialog.dialog('open');
	 if(state!="In Progress")
		 $("#hours").attr("disabled", "disabled");
	 }

 function saveNewState()
 {
		var newState = $("#state").val();
		var todayNewHours = $("#hours").val();

		if(todayCurrentHours>0 && todayNewHours>0 && newState=="In Progress" && currentState==newState)
			return updateTodayInProgressTransaction(currentState,newState,todayNewHours);
			
	//	if(currentState=="In Progress" && !(newState=="In Progress") && todayNewHours > 0)
		//	return saveNewStateAndHours(currentState,newState,hours);

		
	 $.ajax({
	        type: "POST",
	        url: contextPath+'/saveNewState',
	        data:{ storyId:$("#taskstoryId").text(), currentState : currentState , newState : newState , todayHours : todayNewHours , date:new Date()},
	        success: function(response){
		        alert(response);
		        dialog.dialog('close');
		        location.reload();
	        }
	         ,
      error: function(e){
          alert("Error in saving the state...");
      }
 });
	 }

function updateTodayInProgressTransaction(currentState,newState,todayNewHours)
{
	 $.ajax({
	        type: "POST",
	        url: contextPath+'/updateTodayInProgressTransaction',
	        data:{ storyId:$("#taskstoryId").text(), currentState : currentState , newState : newState , todayHours : todayNewHours },
	        success: function(response){
		        alert(response);
		        dialog.dialog('close');
		        location.reload();
	        }
	         ,
error: function(e){
    alert("Error in saving the state...");
}
	 });

	}
 
/* function saveNewStateAndHours(currentState,newState,hours)
 {
	 $.ajax({
	        type: "POST",
	        url: contextPath+'/saveNewStateAndHours',
	        data:{ storyId:$("#taskstoryId").text(), currentState : currentState , newState : newState , todayHours : hours },
	        success: function(response){
		        alert(response);
		        dialog.dialog('close');
		        location.reload();
	        }
	         ,
   error: function(e){
       alert("Error in saving the state...");
   }
});
	 }*/
 
 function enableDisableHoursTextBox(){
//	if($("#state").val() == "In Progress" || $("#state").val() == "For GD")
	
	if($("#state").val() == "In Progress")
		{
		$("#hours").removeAttr("disabled");
		$("#hours").val(todayCurrentHours);
		}
	else
		{
		$("#hours").val(null);
		$("#hours").attr("disabled", "disabled");
		}
		
	 }

	 var burnhistorydialog = $('#hiddenburnhistory');

	 
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
	 