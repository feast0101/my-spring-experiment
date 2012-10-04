package com.travel.dao;

import com.travel.model.Agent;


public interface AgentDAO {
	
	void save(Agent agent);
	void update(Agent agent);
	void delete(Agent agent);
	Agent findByAgentCode(String agentCode);
}
