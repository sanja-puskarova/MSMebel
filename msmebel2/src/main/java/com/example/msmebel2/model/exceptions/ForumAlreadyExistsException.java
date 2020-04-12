package com.example.msmebel2.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ForumAlreadyExistsException extends RuntimeException{
    public ForumAlreadyExistsException(String name) {
        super(String.format("Forum with name %s already exists", name));
    }
}


