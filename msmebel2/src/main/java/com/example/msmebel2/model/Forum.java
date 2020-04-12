package com.example.msmebel2.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;


    @Entity
    @Table(name="forum")
    @NoArgsConstructor
    @Data
    public class Forum {
        @Id
        @GeneratedValue(strategy = GenerationType.TABLE)
        public int id;
        @Column(unique = true)
        public String name;
        public String comment;
        @Min(value = 0, message = "Rating should not be less than 0")
        @Max(value = 5, message = "Rating should not be greater than 5")
        public int rating;


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

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }

        public int getRating() {
            return rating;
        }

        public void setRating(int rating) {
            this.rating = rating;
        }

        public Forum(int id,String name,String comment,int rating){
            this.id=id;
            this.name=name;
            this.comment=comment;
            this.rating=rating;
        }
    }
