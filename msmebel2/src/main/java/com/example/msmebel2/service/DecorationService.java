package com.example.msmebel2.service;
import com.example.msmebel2.model.Decoration;
import com.example.msmebel2.model.requests.DecorationRequest;

import java.util.*;

public interface DecorationService {

    List<Decoration> getDecorations();

    Decoration createDecoration(DecorationRequest request);

    void deleteByName(String name);

    Decoration updateDecoration(String name,DecorationRequest request);

    Decoration findDecorationByName(String name);
}
