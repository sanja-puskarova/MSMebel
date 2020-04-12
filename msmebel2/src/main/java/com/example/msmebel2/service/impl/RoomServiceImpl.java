package com.example.msmebel2.service.impl;

import com.example.msmebel2.model.Product;
import com.example.msmebel2.model.Room;
import com.example.msmebel2.model.exceptions.ProductNotFoundException;
import com.example.msmebel2.model.exceptions.RoomAlreadyExistsException;
import com.example.msmebel2.model.exceptions.RoomNotFoundException;
import com.example.msmebel2.model.requests.RoomRequest;
import com.example.msmebel2.repository.ProductsRepository;
import com.example.msmebel2.repository.RoomRepository;
import com.example.msmebel2.service.RoomService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository repository;
    private final ProductsRepository productsRepository;


    public RoomServiceImpl(RoomRepository repository, ProductsRepository productsRepository) {
        this.repository = repository;
        this.productsRepository = productsRepository;
    }

    @Override
    public List<Room> getRooms() {
        return this.repository.findAll();
    }

    @Override
    public Room createRoom(RoomRequest request) {
        if (this.repository.findByName(request.getName()).isPresent()) {
            throw new RoomAlreadyExistsException(request.getName());
        }

        Room room=repository.save(new Room(1000,request.getName(),request.getDescription()));
        this.addProducts(room,request.getProducts());

        AtomicReference<Float> sum= new AtomicReference<>((float) 0);

        request.getProducts().forEach(it->{
            Product product = productsRepository.findByName(it)
                    .orElseThrow(() -> new ProductNotFoundException(it));
            sum.updateAndGet(v -> new Float((float) (v + product.price)));
            }
        );

        float dis=request.getProducts().size()*5;
        float middle=sum.get()*(dis/100);
        float tot =sum.get()-middle;

        room.setTotal(tot);
        room.setDiscount(dis);
        return repository.save(room);
    }

    private void addProducts(Room room, List<String> products) {
        products.forEach(it -> {
            Product product = productsRepository.findByName(it)
                    .orElseThrow(() -> new ProductNotFoundException(it));
            room.addProducts(product);
        });
    }



    @Override
    public Room updateRoom(String name, RoomRequest request)
    {
        Room room=this.findRoomByName(name);
        List<Product> products=new ArrayList<>(room.getProducts());
        products.forEach(room::removeProducts);
        room.setName(request.getName());
        room.setDescription(request.getDescription());
        this.addProducts(room,request.getProducts());
        return repository.save(room);
    }

    @Transactional
    @Override
    public void deleteByName(String name) {
        this.repository.deleteByName(name);
    }

    @Override
    public Room findRoomByName(String name)
    {
       return this.repository.findByName(name).orElseThrow(()-> new RoomNotFoundException(name));
    }


}
