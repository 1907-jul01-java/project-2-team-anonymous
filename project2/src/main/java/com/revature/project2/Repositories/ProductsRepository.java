package com.revature.project2.Repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.project2.Entities.Products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ProductsRepository extends JpaRepository<Products, Integer> {
    // @Query("DELETE Products p WHERE p.name =?1")
    // public Products deleteProduct(String name);
    // p.image = ?2, p.name = ?3, p.price = ?4, p.quanity = ?5, p.size = ?6 where id = ?7")
   
    @Modifying
    @Transactional
    @Query("update Products set description = ?1 where id = ?2")
    public void updateDescriptionById(String d, int i);

    @Modifying
    @Transactional
    @Query("update Products set image = ?1 where id = ?2")
    public void updateImageById(String im, int i);

    @Modifying
    @Transactional
    @Query("update Products set name = ?1 where id = ?2")
    public void updateNameById(String n, int i);

    @Modifying
    @Transactional
    @Query("update Products set price = ?1 where id = ?2")
    public void updatePriceById(int p, int i);

    @Modifying
    @Transactional
    @Query("update Products set quantity = ?1 where id = ?2")
    public void updatequantityById(int q, int i);

}