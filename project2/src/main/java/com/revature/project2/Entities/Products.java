package com.revature.project2.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    // @ManyToOne(optional = false)
    // @JoinColumn(name="cart_id", insertable=false, updatable=false)
    // private Carts cart;
    @Column(name="name")
    private String name;
    private String image;
    private String description;
    private int price;
    private int quantity;
    private String size;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "Products [description=" + description + ", id=" + id + ", image=" + image + ", name=" + name
                + ", price=" + price + ", quantity=" + quantity + ", size=" + size + "]";
    }

    // public Carts getCart() {
    //     return cart;
    // }

    // public void setCart(Carts cart) {
    //     this.cart = cart;
    // }

    

    


    

    

    
}