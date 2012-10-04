package com.travel.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agent")
public class Agent implements java.io.Serializable {
	
	private static final long serialVersionUID = 5969961721286473616L;

	private int agentCode;
	private String agentFn;
	private String agentLn;
	private String password;
	
	
	public Agent() {
	    }
	
	public Agent(int agentCode) {
        this.agentCode = agentCode;
    }
	
	public Agent(int agentCode, String agentFn, String agentLn, String password) {
		super();
		this.agentCode = agentCode;
		this.agentFn = agentFn;
		this.agentLn = agentLn;
		this.password = password;
	}


	@Id
	@Column(name = "Agent_Code", unique = true, nullable = false)
	public int getAgentCode() {
		return this.agentCode;
	}

	public void setAgentCode(int agentCode) {
		this.agentCode = agentCode;
	}

	@Column(name = "Agent_FN")
	public String getAgentFn() {
		return this.agentFn;
	}

	public void setAgentFn(String agentFn) {
		this.agentFn = agentFn;
	}

	@Column(name = "Agent_LN")
	public String getAgentLn() {
		return this.agentLn;
	}

	public void setAgentLn(String agentLn) {
		this.agentLn = agentLn;
	}

	@Column(name = "Password")
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
