package com.revature.project2.models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Transaction{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int transactionsId;
    private int product_id;
    private double total;
    private int userid;
    private String status;
    private Date date;

    public int getTransactionsId() {
        return transactionsId;
    }

    public void setTransactionsId(int transactionsId) {
        this.transactionsId = transactionsId;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Transaction() {
    }

    
    

    
    


}


