package com.travel.pojo;

import java.util.Comparator;
import com.travel.model.Flight;

public class FareComparator implements Comparator {

	@Override
	public int compare(Object o1, Object o2) {
		 //parameter are of type Object, so we have to downcast it to Employee objects
       /* int flightfare01 = (int) ((Map)o1).get("khghkg");
        int flightfare02 = (int) ((Map)o1).get("khghkg");*/
        int flight1fare = ((Flight)o1).getFare();        
        int flight2fare = ((Flight)o2).getFare();
        if(flight1fare > flight2fare)
            return 1;
        else if(flight1fare < flight2fare)
            return -1;
        else
            return 0; 
	}
	

}
