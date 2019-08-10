package com.revature.project2.repos;
import javax.persistence.EntityManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.hibernate.Session;
import com.revature.project2.models.Carts;
import com.revature.project2.models.Users;

public interface CartsRepository  extends JpaRepository<Carts, Integer>{
	

}
