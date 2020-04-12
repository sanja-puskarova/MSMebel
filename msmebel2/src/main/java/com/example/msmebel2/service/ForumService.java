package com.example.msmebel2.service;
import com.example.msmebel2.model.Forum;
import com.example.msmebel2.model.requests.ForumRequest;

import java.util.List;

public interface ForumService {

    List<Forum> getForums();

    Forum createForum(ForumRequest request);

    void deleteByName(String name);

}
