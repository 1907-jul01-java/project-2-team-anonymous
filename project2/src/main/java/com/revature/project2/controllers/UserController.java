package com.revature.project2.controllers;

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

import com.revature.project2.models.Carts;
import com.revature.project2.models.Users;
import com.revature.project2.repos.CartsRepository;
import com.revature.project2.repos.UsersRepository;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/project2") // This means URL's start with /demo (after Application path)
public class UserController {

	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private UsersRepository userRepository;
	private CartsRepository cartRepository;
	
	@PostMapping(path="/create") // Map ONLY POST Requests
	public @ResponseBody void addNewUser (@RequestBody Users user) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		Carts cart = new Carts();
		user.setCart(cart);
		userRepository.save(user);
	}
	
	@PostMapping(path="/login")
	public @ResponseBody Users login (@RequestBody Users user) {
		System.out.println(user);
		return userRepository.login(user.getUsername(), user.getPassword());
	}
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Users> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
}