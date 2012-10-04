var changePasswordDialog = $('#Password-modal');

$('#Password-modal').dialog({
	bgiframe : true,
	position : 'center',
	width : 400,
	height : 200,
	title : "Change the Password",
	modal : true,
	autoResize : true,
	autoOpen : false
});

function openChangePasswordDialog(empId) {
	changePasswordDialog.dialog('open');
}

function clearfields() {
	$("#currentPassword").val('');
	$("#newPassword").val('');
	$("#confirmNewPassword").val('');
	$("#lable1").hide();
	$("#lable3").hide();
	$("#lable5").hide();
	$("#lable6").hide();
}

function hideLabel(){
	var currentPassword = $("#currentPassword").val();
	if(currentPassword=="")
	{
		$("#lable1").hide();
	}
}

function changePassword() {
	var currentPassword = $("#currentPassword").val();
	var newPassword = $("#newPassword").val();
	var confirmNewPassword = $("#confirmNewPassword").val();
	var empCode = $("#logged_In_empcode").val();

	if (currentPassword != "" && currentPassword == newPassword) {
		$("#lable3").show();
		return false;
	} else {
		$("#lable3").hide();
	}

	if (!(newPassword == confirmNewPassword)) {
		$("#lable5").show();
		return false;
	} else {
		$("#lable5").hide();
	}

	if (confirmNewPassword.length == 0 || newPassword.length == 0
			|| currentPassword.length == 0) {
		$("#lable6").show();
	} else {
		$("#lable6").hide();
		$.ajax({
			type : "GET",
			url : contextPath + '/changepassword',
			data : {
				empcode : empCode,
				newpassword : confirmNewPassword,
				currentpassword : currentPassword
			},
			success : function(response) {
				if (response == "incorrectpassword") {
					$("#lable1").show();
				} else {
					changePasswordDialog.dialog('close');
					alert("Password successfully updated.");
				}
			},
			error : function(e) {
				alert("Error in saving the state...");
			}
		});
	}
}
