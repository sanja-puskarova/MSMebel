package com.example.msmebel2.repository;

import com.example.msmebel2.model.Forum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ForumRepository extends JpaRepository<Forum,String> {
    Optional<Forum> findByName(String name);
    void deleteByName(String name);
}
