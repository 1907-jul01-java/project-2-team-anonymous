package com.revature.project2.Controllers;

import javax.servlet.http.HttpSession;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.revature.project2.Repositories.UsersRepository;
import com.revature.project2.Entities.Users;


@RestController  // This means that this class is a Controller
@RequestMapping(path="/project2") // This means URL's start with /demo (after Application path)
public class UsersController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private UsersRepository userRepository;

	@PostMapping(path="/create") // Map ONLY POST Requests
	public @ResponseBody void addNewUser (@RequestBody Users user) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		System.out.print(user);
		userRepository.save(user);
	}

	@PostMapping(path="/login")
	public @ResponseBody Users login (@RequestBody Users user, HttpSession session) {
		Users loggedUser = userRepository.login(user.getUsername(), user.getPassword());
		session.setAttribute("xuser", loggedUser);
		return loggedUser;
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Users> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
	
	@GetMapping(path="/checklogin/{id}")
	@ResponseBody
	public String checkLogin(@PathVariable @NotNull int id, HttpSession session) {
		Users loggedUser = (Users)session.getAttribute("xuser");
		if(loggedUser != null) {
			if (id == loggedUser.getId()) {
				System.out.println("success");
				return "{\"result\":\"success\"}";
			}else {
				System.out.println("failure");
				return "{\"result\":\"failure\"}";
			}
		}else {
			System.out.println("failure");
			return "{\"result\":\"failure\"}";
		}
	}
	
	@GetMapping(path="/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
}