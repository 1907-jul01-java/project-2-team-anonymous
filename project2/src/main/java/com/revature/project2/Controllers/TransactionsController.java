package com.revature.project2.Controllers;

import java.util.Collection;
import java.util.Optional;

import javax.persistence.EntityManager;
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

import com.revature.project2.Entities.*;
import com.revature.project2.Repositories.*;


@RestController
@RequestMapping(path="/project2")
public class TransactionsController {
	@Autowired
	private UsersRepository userRepository;
	private ProductsRepository productRepository;
	private TransactionsRepository transactionRepository;
	
	@GetMapping(path="/addtocart/{id}")
	public @ResponseBody void addtocart (@PathVariable @NotNull int id, HttpSession session) {
		Users user = (Users)session.getAttribute("xuser");
		if(user.getTransactions().isEmpty()) {
			Transactions newtransaction = new Transactions();
			newtransaction.setStatus("current");
			newtransaction.setTotalcost(0);
			Transactions returntransaction = transactionRepository.save(newtransaction);
			user.getTransactions().add(returntransaction);
			userRepository.save(user);
			Products product = productRepository.findOneById(id);
			returntransaction.getProducts().add(product);
			transactionRepository.save(returntransaction);
			System.out.print(returntransaction);
			
		}
	}
}
