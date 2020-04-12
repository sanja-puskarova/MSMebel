create table rooms
(
    id          serial not null
        constraint rooms_pkey
            primary key,
    description varchar(255),
    name        varchar(255)
        constraint uk_1kuqhbfxed2e8t571uo82n545
            unique,
    discount    real,
    total       real
);

alter table rooms
    owner to postgres;

INSERT INTO public.rooms (id, description, name, discount, total) VALUES (147, 'Sofa and bed', 'First Room', 10, 1439.1);
INSERT INTO public.rooms (id, description, name, discount, total) VALUES (149, 'Bedroom elements', 'MyBedroom', 15, 2252.5);
INSERT INTO public.rooms (id, description, name, discount, total) VALUES (150, 'Brown style', 'LivingRoom', 10, 1421.1);
INSERT INTO public.rooms (id, description, name, discount, total) VALUES (151, 'Girly room', 'KidsRoom', 10, 979.2);
INSERT INTO public.rooms (id, description, name, discount, total) VALUES (152, 'Boyish room', 'KidsRoom-2', 10, 1115.1);