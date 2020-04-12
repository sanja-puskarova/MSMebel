create table decorations
(
    id          integer not null
        constraint decorations_pkey
            primary key,
    color       varchar(255),
    description varchar(255),
    name        varchar(255)
        constraint uk_linoxj6lb45k1hjbxlptqrwql
            unique,
    pic_url     varchar(255),
    price       integer not null,
    type        varchar(255)
);

alter table decorations
    owner to postgres;

INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (122, 'purple', 'Purple cozy blanket made out of fake fur', 'Lilliana', 'blanket3.jpg', 100, 'Blanket');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (123, 'white', 'White elegant pillow for an elegant sofa.', 'Ely', 'pillow7.jpg', 40, 'Pillow');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (124, 'green', 'Floor plant', 'Planiana', 'plant5.jpg', 80, 'Plant');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (125, 'beige', 'Beige elegant pillow.The pillowcase is washable.', 'Antonieta', 'pillow2.jpg', 35, 'Pillow');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (126, 'brown', 'Brown fluffy blanket. Made for a queen size bed.', 'Bruno', 'blanket4.jpg', 99, 'Blanket');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (127, 'beige', 'Beige throw. Looks good with neutral color sofas.', 'Gorge', 'throw4.jpg', 49, 'Throw');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (128, 'green', 'Floor plant with white plant case.', 'Elija', 'plant6.jpg', 85, 'Plant');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (129, 'blue', 'Bright blue pillow.Especially looks good on neutral or white sofas.', 'Sky', 'pillow2.png', 50, 'Pillow');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (131, 'grey', 'Grey soft and fluffy throw.', 'Greko', 'throw3.jpg', 44, 'Throw');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (130, 'green', 'Small table plant with white plant case.', 'BabyW', 'plant7.jpeg', 30, 'Plant');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (132, 'green', 'Small table plant with black case.', 'BabyB', 'plant4.jpeg', 30, 'Plant');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (133, 'green', 'Small floor plant with brown plant case.', 'Snake', 'plant2.jpg', 40, 'Plant');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (134, 'beige', 'Beige pillow with design of the map of the world.', 'Earth', 'pillow6.jpg', 49, 'Pillow');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (135, 'navy', 'Deep navy pillow. Meant for bed because of the materials that it is made of.', 'Softi', 'pillow4.jpg', 55, 'Pillow');
INSERT INTO public.decorations (id, color, description, name, pic_url, price, type) VALUES (120, 'grey', 'Blue blanket made of 100% cotton.', 'Primrose', 'blanket2.jpg', 59, 'Blanket');