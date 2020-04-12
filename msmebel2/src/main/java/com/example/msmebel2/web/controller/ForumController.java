package com.example.msmebel2.web.controller;
import com.example.msmebel2.model.Forum;
import com.example.msmebel2.model.requests.ForumRequest;
import com.example.msmebel2.service.ForumService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/forum")
public class ForumController {
    private final ForumService service;

    public ForumController(ForumService service) {
        this.service = service;
    }

    @GetMapping()
    public List<Forum> getForums(){
        return this.service.getForums();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Forum createForum(@RequestBody @Valid ForumRequest request){
        return this.service.createForum(request);
    }

    @DeleteMapping("/{id}")
    public void deleteForum(@PathVariable String id){
        this.service.deleteByName(id);
    }
}
