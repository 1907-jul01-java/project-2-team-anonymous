package com.revature.project2.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.revature.project2.Entities.Products;
import com.revature.project2.Entities.Transactions;

public interface TransactionsRepository extends JpaRepository<Transactions, Integer> {

}
