package com.revature.project2.controllers;

import com.revature.project2.repos.TransactionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("path = /project2")
public class TransactionController {

@Autowired
TransactionRepository transactionRepository;

/*
@PostMapping(path= "/addProductToCart/{id}")
public 
*/  
}