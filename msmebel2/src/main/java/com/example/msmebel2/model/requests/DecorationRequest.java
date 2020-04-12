package com.example.msmebel2.model.requests;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class DecorationRequest {
    @NotNull
    public String name;
    public String color;
    public String type;
    public String description;
    public String picUrl;
    public int price;

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public int getPrice() {
        return price;
    }
}
