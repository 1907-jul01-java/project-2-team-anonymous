package com.revature.project2.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;

import com.revature.project2.Entities.Admins;
import com.revature.project2.Repositories.AdminsRepository;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/project2") // This means URL's start with /demo (after Application path)
public class AdminsController {
	@Autowired 
	
	AdminsRepository adminRepository;
	
	@PostMapping(path="adminlogin")
	public @ResponseBody Admins adminlogin (@RequestBody Admins admin) {
		return adminRepository.adminlogin(admin.getAdminname(), admin.getPassword());
	}
	
	
}