create table products
(
    id          integer not null
        constraint products_pkey
            primary key,
    name        varchar(255),
    type        varchar(255),
    width       integer not null,
    description varchar(255),
    pic_url     varchar(255),
    price       integer
);

alter table products
    owner to postgres;

INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (135, 'Woody', 'Table', 150, 'Deep brown and round wooden table', 'table1.jpg', 500);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (136, 'Willow', 'Table', 170, 'Soft brown and round wooden table.', 'table2.jpg', 659);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (137, 'Ant', 'Table', 150, 'Antique brown table.', 'table3.jpg', 1000);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (139, 'Anti', 'Table', 180, 'Antique brown table with black spots on it.', 'table4.jpg', 1199);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (92, 'Tijana-N1', 'Sofa', 300, 'leather sectional', 'sofa4.jpg', 1199);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (93, 'Lemonade', 'Sofa', 200, 'yellow sofa', 'sofa6.png', 799);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (94, 'Antoniette', 'Sideboard', 150, 'modern sideboard', 'sideboard3.jpg', 380);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (95, 'Blueberry', 'Sideboard', 155, 'blue sideboard', 'sideboard2.jpg', 550);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (96, 'Ina', 'Bed', 220, 'queen-size bed', 'bed5.jpg', 800);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (97, 'Timmoty', 'Sofa', 250, 'fake-leather sofa', 'sofa5.jpg', 990);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (100, 'John', 'Sideboard', 150, 'old-style sideboard', 'sideboard4.jpg', 799);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (98, 'Antonia', 'Sofa', 250, 'modern-style sofa', 'sofa7.jpg', 750);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (21, 'Kiara-k23', 'Sofa', 200, 'sofa-bed', 'sofa-bed.png', 489);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (69, 'Irijana', 'Bed', 190, 'twin bed', 'twin-bed2.jpg', 599);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (78, 'Leona-33', 'Bed', 200, 'queen-size bed', 'queen-bed2.jpg', 899);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (20, 'Mimoza', 'Bed', 300, 'king-size bed', 'king-bed2.jpg', 999);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (90, 'Milena', 'Bed', 250, 'king-size bed', 'bed3.jpg', 690);
INSERT INTO public.products (id, name, type, width, description, pic_url, price) VALUES (122, 'Cloud', 'Sofa', 300, 'Really confy sofa,it is almost like sitting on  a cloud!', 'sofa5.jpg', 1300);