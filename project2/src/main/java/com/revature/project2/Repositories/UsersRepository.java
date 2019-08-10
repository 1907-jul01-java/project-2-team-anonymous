package com.revature.project2.Repositories;
import org.springframework.data.repository.CrudRepository;
import com.revature.project2.Entities.Users;


public interface UsersRepository extends CrudRepository<Users, Integer> {
}