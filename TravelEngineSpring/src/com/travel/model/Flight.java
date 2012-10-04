package com.travel.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight")
public class Flight implements java.io.Serializable {

	private static final long serialVersionUID = 1L;

	private int flightNum;
	private String depLoc;
	private String arrLoc;
	private String validTill;
	private String flightTime;
	private int flightDurn;
	private int fare;

	public Flight() {
	}

	public Flight(int flightNum) {
		this.flightNum = flightNum;
	}

	public Flight(int flightNum, String depLoc, String arrLoc,
			String validTill, String flightTime, int flightDurn, int fare) {
		super();
		this.flightNum = flightNum;
		this.depLoc = depLoc;
		this.arrLoc = arrLoc;
		this.validTill = validTill;
		this.flightTime = flightTime;
		this.flightDurn = flightDurn;
		this.fare = fare;
	}
	@Id
	@Column(name = "FLIGHT_NUM", unique = true, nullable = false)
	public int getFlightNum() {
		return flightNum;
	}

	public void setFlightNum(int flightNum) {
		this.flightNum = flightNum;
	}
	@Column(name = "DEP_LOC")
	public String getDepLoc() {
		return depLoc;
	}

	public void setDepLoc(String depLoc) {
		this.depLoc = depLoc;
	}
	@Column(name = "ARR_LOC")
	public String getArrLoc() {
		return arrLoc;
	}

	public void setArrLoc(String arrLoc) {
		this.arrLoc = arrLoc;
	}
	@Column(name = "VALID_TILL")
	public String getValidTill() {
		return validTill;
	}

	public void setValidTill(String validTill) {
		this.validTill = validTill;
	}
	@Column(name = "FLIGHT_TIME")
	public String getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(String flightTime) {
		this.flightTime = flightTime;
	}
	@Column(name = "FLIGHT_DURN")
	public int getFlightDurn() {
		return flightDurn;
	}

	public void setFlightDurn(int flightDurn) {
		this.flightDurn = flightDurn;
	}
	@Column(name = "FARE")
	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

}
