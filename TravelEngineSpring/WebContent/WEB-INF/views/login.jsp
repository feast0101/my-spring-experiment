<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<!-- end of menu_wrapper -->

<center>
<div id="content"><c:if test="${not empty param.error}">
<font color="red"> Login error. <br />
Reason : ${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message} </font>
</c:if>

<script type="text/javascript">
function onlyNumbers(evt) {
	var e = evt; // for trans-browser compatibility
	var charCode = e.which || e.keyCode;
		
	if((charCode > 31 && (charCode < 48 || charCode > 57))&& !(e.ctrlKey && (charCode==97 || charCode==65 || charCode == 99|| charCode ==67 || charCode ==88 || charCode == 120 || charCode ==118 || charCode ==86 )) && charCode!=45 && charCode!=46 && charCode!=35 && charCode!=36 && charCode!=37  && charCode!=38  && charCode!=39  && charCode!=40 && charCode!=116)
	{
		alert('Please Enter Numeric Value Only.');
		return false;
	}
	return true;
}
</script>





<center>
<table width="100%">
	<tr>
		<td>WELCOME TO TRAVEL SEARCH</td>
	</tr>
	<tr>
		<td>
		<center>
		<table cellpadding='2' cellspacing='0' border='0' id='ap_table'>
			<tr>
				<td bgcolor="#008FCC">
				<table cellpadding='0' cellspacing='0' border='0' width='100%'>
					<tr>
						<td bgcolor="#008FCC" align=center
							style="padding: 2; padding-bottom: 4"><b><font size=-1
							color="white" face="verdana,arial"><b>Sign In</b></font>
						</th>
					</tr>
					<tr>
						<td bgcolor="white" style="padding: 5"><br>
						
<form method="GET" action="login">

<table>
<tr>
<td align="right">USER ID:</td>
<td><input type="text" name="username" onkeypress="return onlyNumbers(event);" /></td>
</tr>

<tr>
<td align="right">PASSWORD</td>
<td><input type="password" name="password" /></td>
</tr>

<tr>
<td align="right">Remember me</td>
<td><input type="checkbox" name="_spring_security_remember_me" /></td>
</tr>

<tr>
<td colspan="2" align="right"><input type="submit" value="Login" />
<input type="reset" value="Reset" /></td>
</tr>
</table>
</form>

</td>
					</tr>
				</table>
				</td>
			</tr>
		</table>
		</td>
	</tr>
	<br>
	<br>
	<br>
	<br>
	<br>
	<tr>
		<td>
		
		</td>
	</tr>
</table>

</div>
</center>
