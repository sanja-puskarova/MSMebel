create table forum
(
    id      integer not null
        constraint forum_pkey
            primary key,
    comment varchar(255),
    name    varchar(255)
        constraint uk_6cqltrgelv7kitnj7ouh9wfsw
            unique,
    rating  integer not null
);

alter table forum
    owner to postgres;

INSERT INTO public.forum (id, comment, name, rating) VALUES (75, 'This is really nice', 'Sanja Puskarova', 4);
INSERT INTO public.forum (id, comment, name, rating) VALUES (94, 'Would have liked faster delivery!', 'Irina Irinova', 4);
INSERT INTO public.forum (id, comment, name, rating) VALUES (95, 'Quick delivery and excellent quality.', 'Stojka Stojanova', 5);
INSERT INTO public.forum (id, comment, name, rating) VALUES (96, 'Would recommend!', 'Ana Gligorova', 5);
INSERT INTO public.forum (id, comment, name, rating) VALUES (97, 'I need faster delivery next time!', 'Sani Enimiteva', 3);
INSERT INTO public.forum (id, comment, name, rating) VALUES (98, 'Really cool store,and the personnel is really nice', 'Violeta Dimova', 4);
INSERT INTO public.forum (id, comment, name, rating) VALUES (99, 'Store is ok.', 'Gonca Diniseva', 3);
INSERT INTO public.forum (id, comment, name, rating) VALUES (100, 'Personnel is really nice and cool!', 'Elena Dzorleva', 5);
INSERT INTO public.forum (id, comment, name, rating) VALUES (101, 'The store has products for every taste!', 'Keti Ketova', 5);
INSERT INTO public.forum (id, comment, name, rating) VALUES (102, 'Would have liked bigger selection of sideboards', 'Nada Nadova', 3);
INSERT INTO public.forum (id, comment, name, rating) VALUES (103, 'Amazing service!', 'Vasil Vasilev', 5);
INSERT INTO public.forum (id, comment, name, rating) VALUES (104, 'Amazing experience!', 'Tome Arapov', 5);