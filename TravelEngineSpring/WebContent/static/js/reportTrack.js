$(function() {
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

function showTable(id, linkid) {
	var divid = document.getElementById(id);
	var toggleLink = document.getElementById(linkid);
	if (toggleLink.checked)
		divid.style.display = 'block';
	else
		divid.style.display = 'none';

}

function showSprintWiseTrackReport(sprintName, trackCode) {
	var trackName = document.getElementById("tname").value;
	window.location = contextPath + '/admin/report/trackwise?sprintName='
			+ sprintName + '&trackid=' + trackCode + '&tname=' + trackName
			+ '&stDate=&endDate=';
}

function showTrackReport(trackCode, trackName) {
	window.location = contextPath
			+ '/admin/report/trackwise?sprintName=&trackid=' + trackCode
			+ '&tname=' + trackName + '&stDate=&endDate=';
}

function validate(FromDt, ToDt) {
	if (FromDt == "") {
		alert('please provide FromDate');
		return false;
	}
	if (ToDt == "") {
		alert('please provide ToDate');
		return false;

	}
	return true;
}