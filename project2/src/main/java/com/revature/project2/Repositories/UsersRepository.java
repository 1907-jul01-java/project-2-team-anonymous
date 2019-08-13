package com.revature.project2.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.revature.project2.Entities.Users;


public interface UsersRepository extends JpaRepository<Users, Integer> {
    public Users findById(int id);
    
    @Query("SELECT u FROM Users u where u.username = ?1 and u.password = ?2")
    public Users login(String username, String password);
}