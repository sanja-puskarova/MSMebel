package com.example.msmebel2.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name="products")
@NoArgsConstructor
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    public int id;
    @Column(unique = true)
    public String name;
    public int width;
    public String description;
    public String type;
    public String picUrl;
    @Column(name="price")
    public int price;
    @JsonIgnore
    @ManyToMany(mappedBy = "products", fetch = FetchType.EAGER)
    public List<Room> rooms;

    public List<Room> getRooms() { return rooms; }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setWidth(int width) {
        this.width = width;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public String getName() {
        return name;
    }



    public int getWidth() { return width; }

    public int getPrice(){return price;}

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public Product(int id, String name, int width, String description, String type, String picUrl,int price){
        this.id=id;
        this.name=name;
        this.width=width;
        this.description=description;
        this.type=type;
        this.picUrl=picUrl;
        this.price=price;
        this.rooms=new ArrayList<>();
    }


}
