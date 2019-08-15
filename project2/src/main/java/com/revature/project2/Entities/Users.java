package com.revature.project2.Entities;

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

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(name="first")
    private String first;
    private String last;
    private String username;
    private String password;
    private String address;
    private String city;
    private String state;
    private String zipcode;
    private int age;
    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "cart_id")
    // private Carts cart;
    // @OneToMany(cascade = CascadeType.ALL)
    // @JoinColumn(name = "transaction")

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // public Carts getCart() {
    //     return cart;
    // }

    // public void setCart(Carts cart) {
    //     this.cart = cart;
    // }

    // @Override
    // public String toString() {
    //     return "Users [address=" + address + ", age=" + age + ", cart=" + cart + ", city=" + city + ", first=" + first
    //             + ", id=" + id + ", last=" + last + ", password=" + password + ", state=" + state + ", username="
    //             + username + ", zipcode=" + zipcode + "]";
    // }

}