package com.example.msmebel2.service;

import com.example.msmebel2.model.Product;
import com.example.msmebel2.model.Room;
import com.example.msmebel2.model.requests.ProductRequest;

import java.util.*;

public interface ProductService {
    List<Product> getProducts();

    Product createProduct(ProductRequest request);

    void deleteByName(String name);

    Product updateProduct(String name,ProductRequest request);

    Product findProductByName(String name);

    List<Room> getRooms(String name);



}
