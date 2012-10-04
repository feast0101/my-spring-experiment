package com.travel.pojo;

public class Flight1{
	
		private String flightNum;
		private String depLoc;
		private String arrLoc;
		private String validTill;
		private String flightTime;
		private Integer flightDurn;
		private Integer fare;
		
		public Flight1(String flightNum, String depLoc, String arrLoc,
				String validTill, String flightTime, Integer flightDurn,
				Integer fare) {
			super();
			this.flightNum = flightNum;
			this.depLoc = depLoc;
			this.arrLoc = arrLoc;
			this.validTill = validTill;
			this.flightTime = flightTime;
			this.flightDurn = flightDurn;
			this.fare = fare;
		}

		public String getFlightNum() {
			return flightNum;
		}

		public void setFlightNum(String flightNum) {
			this.flightNum = flightNum;
		}

		public String getDepLoc() {
			return depLoc;
		}

		public void setDepLoc(String depLoc) {
			this.depLoc = depLoc;
		}

		public String getArrLoc() {
			return arrLoc;
		}

		public void setArrLoc(String arrLoc) {
			this.arrLoc = arrLoc;
		}

		public String getValidTill() {
			return validTill;
		}

		public void setValidTill(String validTill) {
			this.validTill = validTill;
		}

		public String getFlightTime() {
			return flightTime;
		}

		public void setFlightTime(String flightTime) {
			this.flightTime = flightTime;
		}

		public Integer getFlightDurn() {
			return flightDurn;
		}

		public void setFlightDurn(Integer flightDurn) {
			this.flightDurn = flightDurn;
		}

		public Integer getFare() {
			return fare;
		}

		public void setFare(Integer fare) {
			this.fare = fare;
		}

	
}
