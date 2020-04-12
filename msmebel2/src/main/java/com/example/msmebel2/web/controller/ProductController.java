package com.example.msmebel2.web.controller;

import com.example.msmebel2.model.Product;
import com.example.msmebel2.model.requests.ProductRequest;
import com.example.msmebel2.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping()
    public List<Product> getProducts(){
        return this.service.getProducts();
    }

    @GetMapping("/{id}")
    public Product  getProduct(@PathVariable String id){
        return this.service.findProductByName(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product createProduct(@RequestBody @Valid ProductRequest request){
        return this.service.createProduct(request);
    }

    @PatchMapping("/{id}")
    public Product updateProduct(@RequestBody @Valid ProductRequest request, @PathVariable String id){
            return this.service.updateProduct(id,request);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id){
        this.service.deleteByName(id);
    }

}
