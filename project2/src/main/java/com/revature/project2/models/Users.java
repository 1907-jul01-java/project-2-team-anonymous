package com.revature.project2.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String username;
    private String firstname;
    private String password;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true)
    private Carts cart;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Carts getCart() {
		return cart;
	}
	public void setCart(Carts cart) {
		this.cart = cart;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", firstname=" + firstname + ", password=" + password
				+ ", cart=" + cart + "]";
	}
	public Users(String username, String firstname, String password, Carts cart) {
		super();
		this.username = username;
		this.firstname = firstname;
		this.password = password;
		this.cart = cart;
	}
    
    
}