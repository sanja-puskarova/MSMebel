package com.example.msmebel2.model.requests;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ProductRequest {
    @NotNull
    public String name;
    public int width;
    public String description;
    public String type;
    public String picUrl;
    public int price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getWidth() {
        return width;
    }

    public String getDescription() {
        return description;
    }

    public String getType() {
        return type;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public int getPrice(){return price;}
}
