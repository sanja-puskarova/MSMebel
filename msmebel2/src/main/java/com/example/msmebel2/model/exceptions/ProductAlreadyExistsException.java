package com.example.msmebel2.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProductAlreadyExistsException extends RuntimeException{
    public ProductAlreadyExistsException(String name) {
        super(String.format("Product with name %s already exists", name));
    }
}
