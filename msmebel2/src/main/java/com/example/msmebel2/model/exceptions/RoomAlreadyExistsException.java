package com.example.msmebel2.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RoomAlreadyExistsException extends RuntimeException{
    public RoomAlreadyExistsException(String name) {
        super(String.format("Room with name %s already exists", name));
    }
}