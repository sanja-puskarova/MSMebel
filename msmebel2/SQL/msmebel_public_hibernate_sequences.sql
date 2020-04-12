create table hibernate_sequences
(
    sequence_name varchar(255) not null
        constraint hibernate_sequences_pkey
            primary key,
    next_val      bigint
);

alter table hibernate_sequences
    owner to postgres;

INSERT INTO public.hibernate_sequences (sequence_name, next_val) VALUES ('default', 154);