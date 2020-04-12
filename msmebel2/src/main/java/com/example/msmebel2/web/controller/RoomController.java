package com.example.msmebel2.web.controller;

import com.example.msmebel2.model.Room;
import com.example.msmebel2.model.requests.RoomRequest;
import com.example.msmebel2.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/rooms")
public class RoomController {
    private final RoomService service;


    public RoomController(RoomService service) {
        this.service = service;
    }

    @GetMapping
    public List<Room> getRooms(){
        return this.service.getRooms();
    }

    @GetMapping("/{id}")
    public Room getRoom(@PathVariable String id) {
        return this.service.findRoomByName(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Room createRoom(@RequestBody @Valid RoomRequest request)
    {
        return this.service.createRoom(request);
    }

    @PatchMapping("/{id}")
    public Room updatePizza(@RequestBody @Valid RoomRequest request, @PathVariable String id) {
        return this.service.updateRoom(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteRoom(@PathVariable String id) {
        this.service.deleteByName(id);
    }

}
