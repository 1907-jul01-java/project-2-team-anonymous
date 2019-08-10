package com.revature.project2.Entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "carts")
public class Carts {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int cart_id;
    @Column()
    @NotBlank
    private double cost;
    // @OneToMany(mappedBy = "carts")
    // private Set<Products> products;

   
    public int getCart_id() {
        return cart_id;
    }

    public void setCart_id(int cart_id) {
        this.cart_id = cart_id;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Carts(){

    }

    public Carts(int cart_id, double cost){
        this.cart_id = cart_id;
        this.cost = cost;
    }

    

    
}