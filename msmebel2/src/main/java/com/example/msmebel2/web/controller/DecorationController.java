package com.example.msmebel2.web.controller;
import com.example.msmebel2.model.Decoration;
import com.example.msmebel2.model.requests.DecorationRequest;
import com.example.msmebel2.service.DecorationService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/decorations")
public class DecorationController {

    private final DecorationService service;

    public DecorationController(DecorationService service) {
        this.service = service;
    }

    @GetMapping()
    public List<Decoration> getDecorations(){
        return this.service.getDecorations();
    }

    @GetMapping("/{id}")
    public Decoration  getDecoration(@PathVariable String id){
        return this.service.findDecorationByName(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Decoration createDecoration(@RequestBody @Valid DecorationRequest request){
        return this.service.createDecoration(request);
    }

    @PatchMapping("/{id}")
    public Decoration updateDecoration(@RequestBody @Valid DecorationRequest request, @PathVariable String id){
        return this.service.updateDecoration(id,request);
    }

    @DeleteMapping("/{id}")
    public void deleteDecoration(@PathVariable String id){
        this.service.deleteByName(id);
    }
}

