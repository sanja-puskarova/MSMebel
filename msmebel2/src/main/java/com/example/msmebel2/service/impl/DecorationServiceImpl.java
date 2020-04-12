package com.example.msmebel2.service.impl;
import com.example.msmebel2.model.Decoration;
import com.example.msmebel2.model.exceptions.ProductAlreadyExistsException;
import com.example.msmebel2.model.exceptions.ProductNotFoundException;
import com.example.msmebel2.model.requests.DecorationRequest;
import com.example.msmebel2.repository.DecorationRepository;
import com.example.msmebel2.service.DecorationService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DecorationServiceImpl implements DecorationService {

    private final DecorationRepository repository;

    public DecorationServiceImpl(DecorationRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Decoration> getDecorations() {
        return this.repository.findAll();
    }

    @Override
    public Decoration createDecoration(DecorationRequest request) {
        if(this.repository.findByName(request.getName()).isPresent()){
            throw new ProductAlreadyExistsException(request.getName());
        }
        Decoration decoration=new Decoration(10000,request.getName(),request.getColor(),request.getType(),request.getDescription(),request.getPicUrl(),request.getPrice());
        return repository.save(decoration);
    }

    @Transactional
    @Override
    public void deleteByName(String name) {
        this.repository.deleteByName(name);
    }

    @Override
    public Decoration updateDecoration(String name, DecorationRequest request) {
        Decoration decoration=this.findDecorationByName(name);
        decoration.setColor(request.getColor());
        decoration.setDescription(request.getDescription());
        decoration.setName(request.getName());
        decoration.setPicUrl(request.getPicUrl());
        decoration.setPrice(request.getPrice());
        decoration.setType(request.getType());
        return this.repository.save(decoration);
    }

    @Override
    public Decoration findDecorationByName(String name) {
        return this.repository.findByName(name).orElseThrow(()->new ProductNotFoundException(name));
    }
}
