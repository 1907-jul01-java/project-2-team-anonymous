package com.revature.project2.Repositories;
import org.springframework.data.repository.CrudRepository;
import com.revature.project2.Entities.Carts;

public interface CartsRepository extends CrudRepository<Carts, Integer> {
}