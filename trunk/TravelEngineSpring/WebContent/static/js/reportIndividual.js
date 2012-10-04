$(function() {

	// var URLArray=document.URL.split("?sprintName=");
	// var URLArray1=document.URL.split("?fromDt=");
	var query = window.location.search.substring(1).split('&');
	var query1 = query[0];
	var query2 = query1.split('=');
	var query3 = query2[1];
	// alert(query3.length);
	// alert(URLArray);
	if (query3.length > 1) {
		document.getElementById("toggler").checked = true;
		document.getElementById("adSearch").style.display = '';
	}

	$("#reportStartDate").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast',
		maxDate : '+0d',
		onSelect : function(dateStr) {
			var min = $(this).datepicker('getDate'); // Selected date or
														// today if none
			$('#reportEndDate').datepicker('option', {
				minDate : min,
				maxDate : '+0d'
			});
		}
	});
	$("#reportEndDate").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast',
		maxDate : '+0d',
		onSelect : function(dateStr) {
			if ($('#reportStartDate').value == "") {
				alert('please provide FromDate');
			}
		}
	});
});

function showSprintTasksindividual(sprintName, memberCode) {

	window.location = contextPath + '/admin/report/userReports?sprintName='
			+ sprintName + '&empId=' + memberCode;
}

function submitform1(fromDate, toDate, memberId) {

	/*
	 * var fromDate = $("#datepickerOnfromDt").val(); var toDate =
	 * $("#datepickerOntoDt").val(); var memberId =$("#memid").val();
	 */

	if (fromDate == "") {
		alert('please provide FromDate');
		return false;
	}
	if (toDate == "") {
		alert('please provide ToDate');
		return false;

	}
	window.location = contextPath + '/admin/report/filtereduserReports?fromDt='
			+ fromDate + '&toDt=' + toDate + '&empId=' + memberId;

};

function showTable(id, linkid) {
	var divid = document.getElementById(id);
	var toggleLink = document.getElementById(linkid);
	if (toggleLink.checked)
		divid.style.display = 'block';
	else
		divid.style.display = 'none';

}

function showMemberReport(memberCode) {
	window.location = contextPath
			+ '/admin/report/userReports?sprintName=&empId=' + memberCode;
}