package com.example.msmebel2.model.requests;
import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
public class ForumRequest {
    @NotNull
    public String name;
    public String comment;
    public int rating;

    public String getName() {
        return name;
    }

    public String getComment() {
        return comment;
    }

    public int getRating() {
        return rating;
    }
}
