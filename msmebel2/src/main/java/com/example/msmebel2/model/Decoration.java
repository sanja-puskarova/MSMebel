package com.example.msmebel2.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Entity
@Table(name="decorations")
@NoArgsConstructor
@Data
public class Decoration {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    public int id;
    @Column(unique = true)
    public String name;
    public String color;
    public String type;
    public String description;
    public String picUrl;
    public int price;

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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Decoration(int id,String name,String color,String type,String description,String picUrl,int price){
        this.id=id;
        this.name=name;
        this.color=color;
        this.type=type;
        this.description=description;
        this.picUrl=picUrl;
        this.price=price;
    }
}
