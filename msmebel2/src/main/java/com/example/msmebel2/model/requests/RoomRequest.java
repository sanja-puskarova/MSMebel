package com.example.msmebel2.model.requests;
import lombok.Data;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
public class RoomRequest {
    @NotNull
    public String name;
    public String description;
    public List<String> products;
    public float total;
    public float discount;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getProducts() {
        return products;
    }
}
