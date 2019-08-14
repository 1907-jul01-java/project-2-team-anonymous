package com.revature.project2.repos;

import com.revature.project2.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{

    
}