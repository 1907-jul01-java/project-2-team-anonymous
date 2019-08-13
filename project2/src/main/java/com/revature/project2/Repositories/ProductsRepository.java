package com.revature.project2.Repositories;
import org.springframework.data.repository.CrudRepository;
import com.revature.project2.Entities.Products;
import org.springframework.data.jpa.repository.Query;

public interface ProductsRepository extends CrudRepository<Products, Integer> {

}