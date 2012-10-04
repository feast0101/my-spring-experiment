$(function() {
	
	// for persisting sprint checkbox value 
	var URLArray=document.URL.split("?sprintName=");
	if(URLArray.length>1)
		{
		document.getElementById("sprintDD").checked=true;
		document.getElementById("sprint_row").style.display = '';
		}
		
	$('#datepickerOnfromDt').datepicker({
		changeMonth : true,
		changeYear : true,   
		duration : 'fast',
		maxDate: '+0d',
		onSelect: function(dateStr) {
			var min = $(this).datepicker('getDate'); // Selected date or today if none
			$('#datepickerOntoDt').datepicker('option', {minDate: min, maxDate: '+0d'});
		}
	});
	$('#datepickerOntoDt').datepicker({
		changeMonth : true,
		changeYear : true, 
		duration : 'fast',
		maxDate: '+0d',
		onSelect: function(dateStr) {
			if( $('#datepickerOnfromDt').value==""){				
				alert('please provide FromDate');
			}
		}
	});

});

function toggle_Sprint_DD()
{
	 var checkbox = document.getElementById("sprintDD");
	 if(checkbox.checked)
	 document.getElementById("sprint_row").style.display = '';
	 else
		 document.getElementById("sprint_row").style.display = 'none';
}

function showSprintTasks(sprintName) {
	 window.location = contextPath+'/userReports/sprintWiseUserReports?sprintName=' + sprintName;
}


function submitform(FromDt,ToDt){

	if(FromDt==""){				
		alert('please provide FromDate');
		return false;
	}
	if(ToDt==""){
		alert('please provide ToDate');
		return false;

	}
	window.location=contextPath + '/filtereduserReports?fromDt='+FromDt+'&toDt='+ToDt;
};



