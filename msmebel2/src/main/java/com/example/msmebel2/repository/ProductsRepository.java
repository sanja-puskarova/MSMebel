package com.example.msmebel2.repository;

import com.example.msmebel2.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface ProductsRepository extends JpaRepository<Product,String> {
    Optional<Product> findByName(String name);
    void deleteByName(String name);
}
