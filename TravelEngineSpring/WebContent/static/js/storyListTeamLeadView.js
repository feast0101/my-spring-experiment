jQuery.validator.addMethod("selectNone", function(value, element) {
	if (element.value == "none" || element.value == "0") {
		return false;
	} else
		return true;
}, "Please select an option.");

$(function() {
	$("#datepickerOnReceivedDt").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast',
			maxDate: '+0d'
	});
	$("#datepickerOnStatusDt").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast'
	});

});

$(document).ready(function() {

	$("#menu a").removeClass("active");
	$("#storyEntryByLead").addClass("active");
	
	$("tr:even").css("background-color", "#F3E2A9");
	  $("tr:odd").css("background-color", "#F5F6CE");

	$("#storyForm").validate({
		rules : {

			'storyId' : "required",

			'groupName' : {
				selectNone : true
			},

			'trackMaster.trackId' : {
				selectNone : true
			},

			receivedDt : "required",

			//      statusDt : "required" ,
			initialEstimate : "required",

		},

		messages : {
			'storyId' : "Story ID can not be empty",
			initialEstimate : "Intial estimate can not be empty",
		},

		errorPlacement : function(error, element) {
			if (element.attr('name') == 'storyId') {
				error.appendTo(".storyErr");
			}

			if (element.attr('name') == 'groupName') {
				error.appendTo(".groupErr");
			}

			if (element.attr('name') == 'trackMaster.trackId') {
				error.appendTo(".trackErr");
			}

			if (element.attr('name') == 'receivedDt') {
				error.appendTo(".rcvDateErr");
			}

			//			 if (element.attr('name') == 'statusDt'){
			//			 error.appendTo(".statusDateErr" );
			//		}

			if (element.attr('name') == 'initialEstimate') {
				error.appendTo(".estimateErr");
			}

		}

	});

	$("#initialEstimate").keypress(function(e) {
		//if the letter is not digit then display error and don't type anything
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

});

$(function() {
	$("#editFormReceivedDt").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast',
			maxDate: '+0d'
	});
	$("#editFormStatusDt").datepicker({
		changeMonth : true,
		changeYear : true,
		duration : 'fast'
	});

});

$("#storyForm").submit(
		function() {
			if($("#datepickerOnReceivedDt").val()=="")
				return false;
			var submittedStory = $(this).serialize();

			$.ajax({
				type : "POST",
				url : contexPath + '/lead/storyEntryByLead',
				data : submittedStory,
				success : function(response) {
					if (response == "Duplicate")
						alert("Duplicate Story ID");
					else if (confirm(response
							+ "\nWant to Reload Page to see updates?")) {
						location.reload();
					}
					$("#storyForm").reset();
				},
				error : function(e) {
					alert("Errors in submitting the entry...");
				}
			});
			return false;
		});

$('#dialog-modal').dialog({
	bgiframe : true,
	position : 'center',
	width : 400,
	height : 320,
	title : "Edit the Story",
	modal : true,
	autoResize : true,
	autoOpen : false
});

var oldStory;
var dialog = $('#dialog-modal');
var StoryIdElement;
var GroupElement;
var TrackElement;
var DescElement;
var RcvDateElement;
var statusElement;
var statusDateElement;
var intialEstElement;
var revEstElement;
var remarksElement;

function initializeCurrentRowElements(rowNum) {
	//getting the current editable row elements
	StoryIdElement = $('.' + rowNum).next();
	GroupElement = StoryIdElement.next();
	TrackElement = GroupElement.next();
	DescElement = TrackElement.next();
	RcvDateElement = DescElement.next();
	statusElement = RcvDateElement.next();
	statusDateElement = statusElement.next();
	intialEstElement = statusDateElement.next();
	revEstElement = intialEstElement.next();
	remarksElement = revEstElement.next();

}

function callEdit(editRowNum) {

	initializeCurrentRowElements(editRowNum);
	var browser = navigator.appName;
	
	if(browser=="Microsoft Internet Explorer") {
	 	var rcvDt = new Date(RcvDateElement.text().replace('-','/'));
	 	var statusDt = new Date(statusDateElement.text().replace('-','/'));	
	}
	else
		{
		var rcvDt = new Date(RcvDateElement.text());
		var statusDt = new Date(statusDateElement.text());
		}
	rcvDt = rcvDt.getMonth() + 1 + "/" + rcvDt.getDate() + "/"
			+ rcvDt.getFullYear();


	
	statusDt = statusDt.getMonth() + 1 + "/" + statusDt.getDate() + "/"
			+ statusDt.getFullYear();

	dialog.dialog('open');

	//setting current values in editable form
	$('#editFormStoryId').val(StoryIdElement.text());
	$('#editFormStoryIdSpan').text(StoryIdElement.text());
	$('#editFormGroup').val(GroupElement.text());
	$('#editFormTrackId').val(TrackElement.text());
	$('#editFormDescription').val(DescElement.text());
	$('#editFormReceivedDt').val(rcvDt);
	$('#editFormCurrentStatus').val(statusElement.text());
	$('#editFormStatusDt').val(statusDt);
	$('#editFormIntialEst').val(intialEstElement.text());
	$('#editFormRevEst').val(revEstElement.text());
	$('#editFormRemarks').val(remarksElement.text());

}

$("#hiddenForm").submit(function() {
	var editStory = $(this).serialize();

	$.ajax({
		type : "POST",
		url : contexPath + '/lead/storyEditByLead',
		data : editStory,
		success : function(response) {
			// we have the response
			if (response == "SUCCESS") {
				StoryIdElement.text($('#editFormStoryIdSpan').text());
				GroupElement.text($('#editFormGroup').val());
				TrackElement.text($('#editFormTrackId').val());
				DescElement.text($('#editFormDescription').val());
				RcvDateElement.text($('#editFormReceivedDt').val());
				statusElement.text($('#editFormCurrentStatus').val());
				//intially status date is equal to recieved date 
				statusDateElement.text($('#editFormReceivedDt').val());
				intialEstElement.text($('#editFormIntialEst').val());
				revEstElement.text($('#editFormRevEst').val());
				remarksElement.text($('#editFormRemarks').val());
				StoryIdElement.parent().css('background-color', '#40FF00');
				alert("Record Successfully Updated.....");
			} else {
				alert("Error in updating the entry...");
			}
		},
		error : function(e) {
			alert('Error: ' + e + " Error in updating the entry...");
		}
	});
	dialog.dialog('close');
	return false;
});

function callDelete(editRowNum) {
	if (!confirm("Are you sure want to delete?")) {
		return false;
	}
	initializeCurrentRowElements(editRowNum);
	$
			.ajax({
				type : "GET",
				url : contexPath + '/lead/storyDeleteByLead',
				data : {
					deleteId : StoryIdElement.text()
				},
				success : function(response) {
					// we have the response
					if (response == "SUCCESS") {
						if (confirm("Record Successfully deleted.....\nWant to Reload Page to see updates?")) {
							location.reload();
						}
					} else {
						alert("Error in deleting the entry...");
					}
				},
				error : function(e) {
					alert('Error: ' + e + " Error in deleting the entry...");
				}
			});

}
