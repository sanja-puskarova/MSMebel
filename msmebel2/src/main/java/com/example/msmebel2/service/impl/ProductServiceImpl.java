package com.example.msmebel2.service.impl;

import com.example.msmebel2.model.Product;
import com.example.msmebel2.model.Room;
import com.example.msmebel2.model.exceptions.ProductAlreadyExistsException;
import com.example.msmebel2.model.exceptions.ProductNotFoundException;
import com.example.msmebel2.model.requests.ProductRequest;
import com.example.msmebel2.repository.ProductsRepository;
import com.example.msmebel2.service.ProductService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private final ProductsRepository repository;

    public ProductServiceImpl(ProductsRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Product> getProducts() {
        return this.repository.findAll();
    }


    @Override
    public Product createProduct(ProductRequest request) {
        if(this.repository.findByName(request.getName()).isPresent()){
            throw new ProductAlreadyExistsException(request.getName());
        }

        Product product= new Product(10000,request.getName(),request.getWidth(),request.getDescription(),request.getType(),request.getPicUrl(),request.getPrice());
        return repository.save(product);
    }
    @Transactional
    @Override
    public void deleteByName(String name) {
        this.repository.deleteByName(name);
    }

    @Override
    public Product findProductByName(String name) {
        return this.repository.findByName(name).orElseThrow(()->new ProductNotFoundException(name));
    }

    @Override
    public List<Room> getRooms(String name) {
        return null;
    }


    @Override
    public Product updateProduct(String name, ProductRequest request) {
        Product product=this.findProductByName(name);
        product.setDescription(request.getDescription());
        product.setName(request.getName());
        product.setPicUrl(request.getPicUrl());
        product.setType(request.getType());
        product.setWidth(request.getWidth());
        product.setPrice(request.getPrice());
        return this.repository.save(product);
    }
}
