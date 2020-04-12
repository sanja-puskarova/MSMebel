create table rooms_products
(
    rooms_id    integer not null
        constraint fksocpois3x8ppw2e25ysatap3
            references rooms
            on delete cascade,
    products_id integer not null
        constraint fk7ipf4kdv45d36qr3tybhnnten
            references products
            on delete cascade
);

alter table rooms_products
    owner to postgres;

INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (147, 93);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (147, 96);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (149, 96);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (149, 95);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (149, 122);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (150, 92);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (150, 94);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (151, 21);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (151, 69);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (152, 21);
INSERT INTO public.rooms_products (rooms_id, products_id) VALUES (152, 98);