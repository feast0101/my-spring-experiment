<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Flight Search Result</title>

</head>
<body>

<c:choose>
<c:when test="${sortedFlightSearchResult}==null"> No results found</c:when>
<c:otherwise>
	<center>
	   <b>Flight Search Result</b>
		<table width="80%">
			<tr>
				<th>Flight Number</th>
				<th>Departure Location</th>
				<th>Arrival Location</th>
				<th>Travel Date</th>
				<th>Travel Time</th>
				<th>Flight Duration</th>
				<th>Fare</th>
				<th></th>
			</tr>


			<c:forEach var="sr" items="${sortedFlightSearchResult}">
				<tr>

					<td>${sr.flightNum }</td>
					<td>${sr.depLoc}</td>
					<td>${sr.arrLoc }</td>
					<td>${sr.validTill }</td>
					<td>${sr.flightTime }</td>
					<td>${sr.flightDurn}</td>
					<td>${sr.fare}</td>
					
				</tr>
			</c:forEach>
		</table>
	</center>
	</c:otherwise>
	</c:choose>
</body>
</html>