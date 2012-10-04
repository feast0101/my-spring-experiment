package com.travel.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.travel.dao.AgentDAO;



@Controller
public class LoginController  {

	@Autowired
	AgentDAO agentDAO;
	
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	

	/**
	 * Simply authenticates user credentials
	 * 
	 * 	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String Login(@RequestParam String username,@RequestParam String password,Model model) {
		logger.info("Inside Login controller..."+username+"-----"+password);
		if( !username.isEmpty() && (agentDAO.findByAgentCode(username))!=null && ((agentDAO.findByAgentCode(username)).getPassword()).equalsIgnoreCase(password))
		//model.addAttribute("allTracks",agentDAO.findByAgentCode(username));
		//if(username.equalsIgnoreCase("1234") && password.equalsIgnoreCase("welcome"))
		return "TravelSearchHome";
		else
			return "404";
	}
	
}
