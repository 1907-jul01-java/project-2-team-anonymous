package com.revature.project2.controllers;

import java.util.Optional;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.project2.models.Products;
import com.revature.project2.repos.ProductsRepository;

@Controller
@RequestMapping(path="/project2")
public class ProductController {
	
	@Autowired
	private ProductsRepository productRepository;
	
	@PostMapping(path="/addproduct")
	public @ResponseBody void addNewProduct (@RequestBody Products product) {
		System.out.print(product);
		productRepository.save(product);
	}
	
	@GetMapping(path="/getallproduct")
	public @ResponseBody Iterable<Products> getAllProducts(){
		return productRepository.findAll();
	}
	
	@GetMapping(path="/getproductbyid/{id}")
	public @ResponseBody Optional<Products> findByIds(@PathVariable @NotNull int id) {
		return productRepository.findById(id);
	}

}
