package com.revature.project2.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.project2.models.Products;

public interface ProductsRepository extends JpaRepository<Products, Integer> {

}
