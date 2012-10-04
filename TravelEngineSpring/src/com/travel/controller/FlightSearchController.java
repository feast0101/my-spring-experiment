package com.travel.controller;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.travel.dao.FlightDAO;
import com.travel.model.Flight;
import com.travel.pojo.DurationComparator;
import com.travel.pojo.FareComparator;

@Controller
public class FlightSearchController {

	private static final Logger logger = LoggerFactory
			.getLogger(FlightSearchController.class);

	@Autowired
	FlightDAO flightDAO;

	public final static String SPACE = " ";

	@SuppressWarnings("unchecked")
	public List<Flight> SortResult(List<Flight> result, String pref) {

		if (!result.isEmpty()) {
			logger.info("Sorting result on " + pref);
			
			switch(pref){
			case "fare":Collections.sort(result, new FareComparator());
				break;
			case "duration":Collections.sort(result, new DurationComparator());
				break;
			}
			
			return result;
		}

		return null;

	}

	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public String fetchFlightDetails(@RequestParam String dep_loc,
			@RequestParam String arr_Loc, @RequestParam String flight_date,
			@RequestParam String pref, ModelMap model) {
		List<Flight> list = flightDAO.FlightSearch(dep_loc, arr_Loc, flight_date);
		list = SortResult(list, pref);
		model.addAttribute("sortedFlightSearchResult", list);
		return "FlightSearchResultPage";
	}
}
