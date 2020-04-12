package com.example.msmebel2.service;
import com.example.msmebel2.model.Room;
import com.example.msmebel2.model.requests.RoomRequest;

import java.util.*;

public interface RoomService {

    List<Room> getRooms();

    Room createRoom(RoomRequest request);

    Room updateRoom(String name,RoomRequest request);

    void deleteByName(String name);

    Room findRoomByName(String name);


}
