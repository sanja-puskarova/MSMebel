package com.example.msmebel2.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@Entity
@Table(name="rooms")
@NoArgsConstructor
@Data
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    public int id;

    @Column(unique = true)
    public String name;
    @Column(name = "total")
    public Float total;
    @Column(name = "discount")
    public Float  discount;

    public String description;

    @ManyToMany(fetch = FetchType.EAGER)
    List<Product> products;

    public Room(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        products = new ArrayList<>();
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setTotal(Float total) {
        this.total = total;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public float getTotal() {
        return total;
    }

    public float getDiscount() {
        return discount;
    }

    public void addProducts(Product product) {
        this.products.add(product);
        product.getRooms().add(this);
    }

    public void removeProducts(Product product) {
        this.products.remove(product);
        product.getRooms().remove(this);
    }



}
