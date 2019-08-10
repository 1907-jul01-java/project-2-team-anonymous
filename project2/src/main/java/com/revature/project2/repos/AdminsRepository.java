package com.revature.project2.repos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.project2.models.Admins;
	
public interface AdminsRepository extends JpaRepository<Admins, Integer>{
    @Query("SELECT a FROM Admins a where a.adminname = ?1 and a.password = ?2")
    public Admins adminlogin(String adminname, String password);
}