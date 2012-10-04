<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Travel search home</title>


 <script type="text/javascript" src="<c:url value='/static/js/jquery-1.3.2.min.js'/>" > </script>
 <script type="text/javascript" src="<c:url value='/static/js/jquery.validate.js'/>" ></script>
 <script type="text/javascript" src="<c:url value='/static/js/json.min.js'/>" ></script>
 <script type="text/javascript" src="<c:url value='/static/js/jquery-ui-1.7.3.custom.min.js'/>" > </script>

 <script type="text/javascript">
  
 var contextPath = "<%=request.getContextPath() %>";
 var browser = navigator.appName;

 
 function openCreateTaskOverlay(storyId){
	 $("#subtaskstoryId").text(storyId);
	 dialog.dialog('open');
	 }

 function SearchNow()
 {
	 $.ajax({
	        type: "POST",
	        url: contextPath+'/search',
	        data:{ dep_loc:$("#dep_loc").val(), arr_Loc : $("#arr_Loc").val() , flight_date : $("#flight_date").val(),pref : $("#pref").val() },
	        success: function(response){
		        alert("Matching flight found");
	        }
	          ,
         error: function(e){
             alert("Error in ajax fire");
         }
    });
 }

 $(document).ready(function() { });
</script>

</head>
<body>
Enter Search Criteria:
<form method="POST" action="search">

<table>
<tr>
<td align="right">Please Enter Departure Location:</td>
<td><input type="text" id="dep_loc"  name="dep_loc" /></td>
</tr>
<tr>
<td align="right">Please Enter Arrival Location:</td>
<td><input type="text" id="arr_Loc" name="arr_Loc" /></td>
</tr>
<tr>
<td align="right">Please Enter Flight Date:</td>
<td><input type="text" id="flight_date" name="flight_date" /></td>
</tr>
<tr>
<td align="right">Please Enter Output Preference</td>
<td><input type="text" id="pref" name="pref" /></td>
</tr>

<tr>
<td colspan="2" align="right"><input type="submit" value="Login" />
<input type="reset" value="Reset" /></td>
</tr>
</table>
</form>
Ajax Call:

<td><input type="button" onclick="SearchNow();"/></td>


</body>
</html>