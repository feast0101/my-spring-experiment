package com.travel.dao;


import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.travel.model.Flight;


@Repository("flightDAO")
public class FlightDAOImpl extends HibernateDaoSupport implements FlightDAO{
	
	private static final Logger logger = LoggerFactory.getLogger(FlightDAOImpl.class);
	
	@Autowired
	public void anyMethodName(SessionFactory sessionFactory) {
		setSessionFactory(sessionFactory);
	}
	

	@Override
	public List<Flight> FlightSearch(String deploc, String arrloc,
			String traveldate) {

		DetachedCriteria criteria = DetachedCriteria.forClass(Flight.class)
				.add(Restrictions.eq("depLoc", deploc))
				.add(Restrictions.eq("arrLoc", arrloc))
				.add(Restrictions.eq("validTill", traveldate));
		List<Flight> result=getHibernateTemplate().findByCriteria(criteria);
		 
		logger.info("Searching Flights"+result);
		return result;
	}


}
