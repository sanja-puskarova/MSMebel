package com.example.msmebel2.service.impl;

import com.example.msmebel2.model.Forum;
import com.example.msmebel2.model.exceptions.ForumAlreadyExistsException;
import com.example.msmebel2.model.exceptions.ProductAlreadyExistsException;
import com.example.msmebel2.model.requests.ForumRequest;
import com.example.msmebel2.repository.ForumRepository;
import com.example.msmebel2.service.ForumService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ForumServiceImpl implements ForumService {
    private final ForumRepository repository;

    public ForumServiceImpl(ForumRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Forum> getForums() {
        return this.repository.findAll();
    }

    @Override
    public Forum createForum(ForumRequest request) {

        Forum forum=new Forum(1000,request.getName(),request.getComment(),request.getRating());
        return repository.save(forum);
    }

    @Transactional
    @Override
    public void deleteByName(String name) {
        this.repository.deleteByName(name);
    }
}
