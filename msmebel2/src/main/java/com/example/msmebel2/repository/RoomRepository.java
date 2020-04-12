package com.example.msmebel2.repository;

import com.example.msmebel2.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface RoomRepository extends JpaRepository<Room, String> {

    Optional<Room> findByName(String name);

    void deleteByName(String name);

}
