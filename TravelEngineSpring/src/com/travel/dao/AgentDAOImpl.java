package com.travel.dao;


import java.util.List;

import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.travel.model.Agent;

@Repository("agentDAO")
public class AgentDAOImpl extends HibernateDaoSupport implements AgentDAO{
	
	private static final Logger logger = LoggerFactory.getLogger(AgentDAOImpl.class);
	
	@Autowired
	public void anyMethodName(SessionFactory sessionFactory) {
		setSessionFactory(sessionFactory);
	}
	
	public void save(Agent agent) {
		getHibernateTemplate().save(agent);
		
	}

	
	public void update(Agent agent) {
		getHibernateTemplate().update(agent);
		
	}

	
	public void delete(Agent agent) {
		getHibernateTemplate().delete(agent);
		
	}

	public Agent findByAgentCode(String agentCode) {
	 List<?> list = getHibernateTemplate().find("from Agent where agentCode="+agentCode);
	 if(list.isEmpty())
	 return null;
	 logger.info("Retrieving Agent>>>>>"+list);
	 return (Agent)list.get(0);
		
	}


}
