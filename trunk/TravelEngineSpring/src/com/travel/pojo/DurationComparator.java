package com.travel.pojo;

import java.util.Comparator;
import com.travel.model.Flight;

public class DurationComparator implements Comparator  {

	
	public int compare(Object o1, Object o2) {
		int flight1duration=((Flight)o1).getFlightDurn();
		int flight2duration=((Flight)o2).getFlightDurn();
		if(flight1duration>flight2duration)
			return 1;
		else if(flight1duration<flight2duration)
			return -1;
		else
		     return 0;
	}


}
