package com.example.msmebel2.repository;
import com.example.msmebel2.model.Decoration;
import com.example.msmebel2.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

public interface DecorationRepository extends JpaRepository<Decoration,String> {

    Optional<Decoration> findByName(String name);
    void deleteByName(String name);
}
