package com.travel.dao;

import java.util.List;

import com.travel.model.Flight;

public interface FlightDAO {

	 List<Flight> FlightSearch(String deploc, String arrloc, String traveldate);
}
