
jQuery.validator.addMethod("selectNone", function(value, element) {
	if (element.value == "none" || element.value == "0") {
		return false;
	} else
		return true;
}, "Please select an option.");

$(document).ready(function()
		{
	$("#menu a").removeClass("active");
	$("#storyAllocateEntry").addClass("active");
	
	
	$("tr:even").css("background-color", "#F3E2A9");
	  $("tr:odd").css("background-color", "#F5F6CE");
		});

$(function() {
	$("#assignedDate").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast',
			maxDate: '+0d'
	});
});

function assignStory(storyId,trackId)
{
	if($("#teamMem_"+storyId).val() == 0)
		{
		alert("Please Select Team member");
		return false;
		}
	var date;
	
	if($("#assignedDate").val()=="")
		{
		if(!confirm("Assigned Date is empty. It will take today's date by default.....\nAre you OK ? If no then press CANCEL"))
			return false;
		date = new Date();
		date = date.getMonth() + 1 + "/" + date.getDate() + "/"	+ date.getFullYear();
		}
	else
		date = $("#assignedDate").val();
	
var work = "storyMaster.storyId="+storyId+"&trackMaster.trackId="+trackId+"&employee.empCode="+$("#teamMem_"+storyId).val()+"&transDate="+date;	
    $.ajax({
        type: "POST",
        url: contextPath+'/lead/storyAllocate',
        data: work,
        success: function(response){
        	  alert(response);
        	  location.reload();
        }
  	         ,
         error: function(e){
             alert("Errors in submitting the entry...");
         }
    });
	
}
