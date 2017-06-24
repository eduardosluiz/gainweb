toc.dat                                                                                             0000600 0004000 0002000 00000041721 13123344112 0014436 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP       /                    u            Gainweb    9.6.3    9.6.3 A    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false         �           1262    24579    Gainweb    DATABASE     �   CREATE DATABASE "Gainweb" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE "Gainweb";
             postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false         �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                     3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false         �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1         �            1259    24895    aluno    TABLE     �   CREATE TABLE aluno (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    criado_em timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.aluno;
       public         postgres    false    3         �            1259    24893    aluno_id_seq    SEQUENCE     n   CREATE SEQUENCE aluno_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.aluno_id_seq;
       public       postgres    false    189    3         �           0    0    aluno_id_seq    SEQUENCE OWNED BY     /   ALTER SEQUENCE aluno_id_seq OWNED BY aluno.id;
            public       postgres    false    188         �            1259    24932    aluno_treino    TABLE     d   CREATE TABLE aluno_treino (
    id integer NOT NULL,
    id_aluno integer,
    id_treino integer
);
     DROP TABLE public.aluno_treino;
       public         postgres    false    3         �            1259    24930    aluno_treino_id_seq    SEQUENCE     u   CREATE SEQUENCE aluno_treino_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.aluno_treino_id_seq;
       public       postgres    false    3    195         �           0    0    aluno_treino_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE aluno_treino_id_seq OWNED BY aluno_treino.id;
            public       postgres    false    194         �            1259    24950 	   exercicio    TABLE     �   CREATE TABLE exercicio (
    id integer NOT NULL,
    id_treino integer,
    nome_exercicio character varying(255) NOT NULL,
    repeticoes integer DEFAULT 10 NOT NULL
);
    DROP TABLE public.exercicio;
       public         postgres    false    3         �            1259    24948    exercicio_id_seq    SEQUENCE     r   CREATE SEQUENCE exercicio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.exercicio_id_seq;
       public       postgres    false    3    197         �           0    0    exercicio_id_seq    SEQUENCE OWNED BY     7   ALTER SEQUENCE exercicio_id_seq OWNED BY exercicio.id;
            public       postgres    false    196         �            1259    24582    knex_migrations    TABLE     �   CREATE TABLE knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);
 #   DROP TABLE public.knex_migrations;
       public         postgres    false    3         �            1259    24580    knex_migrations_id_seq    SEQUENCE     x   CREATE SEQUENCE knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.knex_migrations_id_seq;
       public       postgres    false    186    3         �           0    0    knex_migrations_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE knex_migrations_id_seq OWNED BY knex_migrations.id;
            public       postgres    false    185         �            1259    24588    knex_migrations_lock    TABLE     =   CREATE TABLE knex_migrations_lock (
    is_locked integer
);
 (   DROP TABLE public.knex_migrations_lock;
       public         postgres    false    3         �            1259    24909 	   professor    TABLE     �   CREATE TABLE professor (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    criado_em timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.professor;
       public         postgres    false    3         �            1259    24907    professor_id_seq    SEQUENCE     r   CREATE SEQUENCE professor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.professor_id_seq;
       public       postgres    false    3    191         �           0    0    professor_id_seq    SEQUENCE OWNED BY     7   ALTER SEQUENCE professor_id_seq OWNED BY professor.id;
            public       postgres    false    190         �            1259    24923    treino    TABLE     b   CREATE TABLE treino (
    id integer NOT NULL,
    nome_treino character varying(255) NOT NULL
);
    DROP TABLE public.treino;
       public         postgres    false    3         �            1259    24963    treino_exercicio    TABLE     l   CREATE TABLE treino_exercicio (
    id integer NOT NULL,
    id_treino integer,
    id_exercicio integer
);
 $   DROP TABLE public.treino_exercicio;
       public         postgres    false    3         �            1259    24961    treino_exercicio_id_seq    SEQUENCE     y   CREATE SEQUENCE treino_exercicio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.treino_exercicio_id_seq;
       public       postgres    false    199    3         �           0    0    treino_exercicio_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE treino_exercicio_id_seq OWNED BY treino_exercicio.id;
            public       postgres    false    198         �            1259    24921    treino_id_seq    SEQUENCE     o   CREATE SEQUENCE treino_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.treino_id_seq;
       public       postgres    false    3    193         �           0    0    treino_id_seq    SEQUENCE OWNED BY     1   ALTER SEQUENCE treino_id_seq OWNED BY treino.id;
            public       postgres    false    192         �           2604    24898    aluno id    DEFAULT     V   ALTER TABLE ONLY aluno ALTER COLUMN id SET DEFAULT nextval('aluno_id_seq'::regclass);
 7   ALTER TABLE public.aluno ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    188    189    189                    2604    24935    aluno_treino id    DEFAULT     d   ALTER TABLE ONLY aluno_treino ALTER COLUMN id SET DEFAULT nextval('aluno_treino_id_seq'::regclass);
 >   ALTER TABLE public.aluno_treino ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    195    194    195                    2604    24953    exercicio id    DEFAULT     ^   ALTER TABLE ONLY exercicio ALTER COLUMN id SET DEFAULT nextval('exercicio_id_seq'::regclass);
 ;   ALTER TABLE public.exercicio ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197         �           2604    24585    knex_migrations id    DEFAULT     j   ALTER TABLE ONLY knex_migrations ALTER COLUMN id SET DEFAULT nextval('knex_migrations_id_seq'::regclass);
 A   ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    185    186    186         �           2604    24912    professor id    DEFAULT     ^   ALTER TABLE ONLY professor ALTER COLUMN id SET DEFAULT nextval('professor_id_seq'::regclass);
 ;   ALTER TABLE public.professor ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    191    190    191                     2604    24926 	   treino id    DEFAULT     X   ALTER TABLE ONLY treino ALTER COLUMN id SET DEFAULT nextval('treino_id_seq'::regclass);
 8   ALTER TABLE public.treino ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    192    193    193                    2604    24966    treino_exercicio id    DEFAULT     l   ALTER TABLE ONLY treino_exercicio ALTER COLUMN id SET DEFAULT nextval('treino_exercicio_id_seq'::regclass);
 B   ALTER TABLE public.treino_exercicio ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199         �          0    24895    aluno 
   TABLE DATA               >   COPY aluno (id, nome, email, telefone, criado_em) FROM stdin;
    public       postgres    false    189       2197.dat �           0    0    aluno_id_seq    SEQUENCE SET     3   SELECT pg_catalog.setval('aluno_id_seq', 3, true);
            public       postgres    false    188         �          0    24932    aluno_treino 
   TABLE DATA               8   COPY aluno_treino (id, id_aluno, id_treino) FROM stdin;
    public       postgres    false    195       2203.dat �           0    0    aluno_treino_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('aluno_treino_id_seq', 1, false);
            public       postgres    false    194         �          0    24950 	   exercicio 
   TABLE DATA               G   COPY exercicio (id, id_treino, nome_exercicio, repeticoes) FROM stdin;
    public       postgres    false    197       2205.dat �           0    0    exercicio_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('exercicio_id_seq', 1, false);
            public       postgres    false    196         �          0    24582    knex_migrations 
   TABLE DATA               C   COPY knex_migrations (id, name, batch, migration_time) FROM stdin;
    public       postgres    false    186       2194.dat �           0    0    knex_migrations_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('knex_migrations_id_seq', 49, true);
            public       postgres    false    185         �          0    24588    knex_migrations_lock 
   TABLE DATA               2   COPY knex_migrations_lock (is_locked) FROM stdin;
    public       postgres    false    187       2195.dat �          0    24909 	   professor 
   TABLE DATA               B   COPY professor (id, nome, email, telefone, criado_em) FROM stdin;
    public       postgres    false    191       2199.dat �           0    0    professor_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('professor_id_seq', 1, false);
            public       postgres    false    190         �          0    24923    treino 
   TABLE DATA               *   COPY treino (id, nome_treino) FROM stdin;
    public       postgres    false    193       2201.dat �          0    24963    treino_exercicio 
   TABLE DATA               @   COPY treino_exercicio (id, id_treino, id_exercicio) FROM stdin;
    public       postgres    false    199       2207.dat �           0    0    treino_exercicio_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('treino_exercicio_id_seq', 4, true);
            public       postgres    false    198         �           0    0    treino_id_seq    SEQUENCE SET     5   SELECT pg_catalog.setval('treino_id_seq', 1, false);
            public       postgres    false    192                    2606    24906    aluno aluno_email_unique 
   CONSTRAINT     M   ALTER TABLE ONLY aluno
    ADD CONSTRAINT aluno_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_email_unique;
       public         postgres    false    189    189         
           2606    24904    aluno aluno_pkey 
   CONSTRAINT     G   ALTER TABLE ONLY aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_pkey;
       public         postgres    false    189    189                    2606    24937    aluno_treino aluno_treino_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_pkey;
       public         postgres    false    195    195                    2606    24955    exercicio exercicio_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY exercicio
    ADD CONSTRAINT exercicio_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.exercicio DROP CONSTRAINT exercicio_pkey;
       public         postgres    false    197    197                    2606    24587 $   knex_migrations knex_migrations_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
       public         postgres    false    186    186                    2606    24920     professor professor_email_unique 
   CONSTRAINT     U   ALTER TABLE ONLY professor
    ADD CONSTRAINT professor_email_unique UNIQUE (email);
 J   ALTER TABLE ONLY public.professor DROP CONSTRAINT professor_email_unique;
       public         postgres    false    191    191                    2606    24918    professor professor_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY professor
    ADD CONSTRAINT professor_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.professor DROP CONSTRAINT professor_pkey;
       public         postgres    false    191    191                    2606    24968 &   treino_exercicio treino_exercicio_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_pkey;
       public         postgres    false    199    199                    2606    24929    treino treino_pkey 
   CONSTRAINT     I   ALTER TABLE ONLY treino
    ADD CONSTRAINT treino_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.treino DROP CONSTRAINT treino_pkey;
       public         postgres    false    193    193                    2606    24938 *   aluno_treino aluno_treino_id_aluno_foreign    FK CONSTRAINT     |   ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_id_aluno_foreign FOREIGN KEY (id_aluno) REFERENCES aluno(id);
 T   ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_id_aluno_foreign;
       public       postgres    false    2058    195    189                    2606    24943 +   aluno_treino aluno_treino_id_treino_foreign    FK CONSTRAINT        ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);
 U   ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_id_treino_foreign;
       public       postgres    false    193    2064    195                    2606    24956 %   exercicio exercicio_id_treino_foreign    FK CONSTRAINT     y   ALTER TABLE ONLY exercicio
    ADD CONSTRAINT exercicio_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);
 O   ALTER TABLE ONLY public.exercicio DROP CONSTRAINT exercicio_id_treino_foreign;
       public       postgres    false    193    197    2064                    2606    24974 6   treino_exercicio treino_exercicio_id_exercicio_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_id_exercicio_foreign FOREIGN KEY (id_exercicio) REFERENCES exercicio(id);
 `   ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_id_exercicio_foreign;
       public       postgres    false    199    2068    197                    2606    24969 3   treino_exercicio treino_exercicio_id_treino_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);
 ]   ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_id_treino_foreign;
       public       postgres    false    193    2064    199                                                       2197.dat                                                                                            0000600 0004000 0002000 00000000326 13123344112 0014247 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Luis	Luis@produce.net.br	1111	2017-06-21 22:26:01.385519-03
2	Eduardo	Luis@produce.asdasd.br	1111	2017-06-21 22:26:12.146558-03
3	aluno grande	Luis@produ123123ce.asdasd.br	1111	2017-06-21 22:26:15.697604-03
\.


                                                                                                                                                                                                                                                                                                          2203.dat                                                                                            0000600 0004000 0002000 00000000021 13123344112 0014223 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	2	1
2	1	2
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               2205.dat                                                                                            0000600 0004000 0002000 00000000141 13123344112 0014230 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	Supino reto	10
2	1	Supino inclinado	10
3	2	Elevação lateral	10
4	2	Desenvolvimento	10
\.


                                                                                                                                                                                                                                                                                                                                                                                                                               2194.dat                                                                                            0000600 0004000 0002000 00000000560 13123344112 0014244 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        44	20170611223520_aluno.js	1	2017-06-11 22:44:52.583-03
45	20170611223524_professor.js	1	2017-06-11 22:44:52.633-03
46	20170611223528_treino.js	1	2017-06-11 22:44:52.653-03
47	20170611223536_aluno_treino.js	1	2017-06-11 22:44:52.681-03
48	20170611223541_exercicio.js	1	2017-06-11 22:44:52.708-03
49	20170611223549_treino_exercicio.js	1	2017-06-11 22:44:52.734-03
\.


                                                                                                                                                2195.dat                                                                                            0000600 0004000 0002000 00000000007 13123344112 0014241 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        0
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         2199.dat                                                                                            0000600 0004000 0002000 00000000005 13123344112 0014243 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           2201.dat                                                                                            0000600 0004000 0002000 00000000046 13123344112 0014230 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	Treino a
2	Treino b
3	Treino c
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          2207.dat                                                                                            0000600 0004000 0002000 00000000035 13123344112 0014234 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	1	1
2	1	2
3	2	3
4	2	4
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   restore.sql                                                                                         0000600 0004000 0002000 00000035504 13123344112 0015365 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_id_treino_foreign;
ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_id_exercicio_foreign;
ALTER TABLE ONLY public.exercicio DROP CONSTRAINT exercicio_id_treino_foreign;
ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_id_treino_foreign;
ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_id_aluno_foreign;
ALTER TABLE ONLY public.treino DROP CONSTRAINT treino_pkey;
ALTER TABLE ONLY public.treino_exercicio DROP CONSTRAINT treino_exercicio_pkey;
ALTER TABLE ONLY public.professor DROP CONSTRAINT professor_pkey;
ALTER TABLE ONLY public.professor DROP CONSTRAINT professor_email_unique;
ALTER TABLE ONLY public.knex_migrations DROP CONSTRAINT knex_migrations_pkey;
ALTER TABLE ONLY public.exercicio DROP CONSTRAINT exercicio_pkey;
ALTER TABLE ONLY public.aluno_treino DROP CONSTRAINT aluno_treino_pkey;
ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_pkey;
ALTER TABLE ONLY public.aluno DROP CONSTRAINT aluno_email_unique;
ALTER TABLE public.treino_exercicio ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.treino ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.professor ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.knex_migrations ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.exercicio ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.aluno_treino ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.aluno ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.treino_id_seq;
DROP SEQUENCE public.treino_exercicio_id_seq;
DROP TABLE public.treino_exercicio;
DROP TABLE public.treino;
DROP SEQUENCE public.professor_id_seq;
DROP TABLE public.professor;
DROP TABLE public.knex_migrations_lock;
DROP SEQUENCE public.knex_migrations_id_seq;
DROP TABLE public.knex_migrations;
DROP SEQUENCE public.exercicio_id_seq;
DROP TABLE public.exercicio;
DROP SEQUENCE public.aluno_treino_id_seq;
DROP TABLE public.aluno_treino;
DROP SEQUENCE public.aluno_id_seq;
DROP TABLE public.aluno;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: aluno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE aluno (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    criado_em timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE aluno OWNER TO postgres;

--
-- Name: aluno_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE aluno_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE aluno_id_seq OWNER TO postgres;

--
-- Name: aluno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE aluno_id_seq OWNED BY aluno.id;


--
-- Name: aluno_treino; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE aluno_treino (
    id integer NOT NULL,
    id_aluno integer,
    id_treino integer
);


ALTER TABLE aluno_treino OWNER TO postgres;

--
-- Name: aluno_treino_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE aluno_treino_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE aluno_treino_id_seq OWNER TO postgres;

--
-- Name: aluno_treino_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE aluno_treino_id_seq OWNED BY aluno_treino.id;


--
-- Name: exercicio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE exercicio (
    id integer NOT NULL,
    id_treino integer,
    nome_exercicio character varying(255) NOT NULL,
    repeticoes integer DEFAULT 10 NOT NULL
);


ALTER TABLE exercicio OWNER TO postgres;

--
-- Name: exercicio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE exercicio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE exercicio_id_seq OWNER TO postgres;

--
-- Name: exercicio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE exercicio_id_seq OWNED BY exercicio.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE knex_migrations OWNER TO postgres;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE knex_migrations_id_seq OWNER TO postgres;

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE knex_migrations_id_seq OWNED BY knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE knex_migrations_lock (
    is_locked integer
);


ALTER TABLE knex_migrations_lock OWNER TO postgres;

--
-- Name: professor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE professor (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    telefone character varying(255) NOT NULL,
    criado_em timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE professor OWNER TO postgres;

--
-- Name: professor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE professor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE professor_id_seq OWNER TO postgres;

--
-- Name: professor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE professor_id_seq OWNED BY professor.id;


--
-- Name: treino; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE treino (
    id integer NOT NULL,
    nome_treino character varying(255) NOT NULL
);


ALTER TABLE treino OWNER TO postgres;

--
-- Name: treino_exercicio; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE treino_exercicio (
    id integer NOT NULL,
    id_treino integer,
    id_exercicio integer
);


ALTER TABLE treino_exercicio OWNER TO postgres;

--
-- Name: treino_exercicio_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE treino_exercicio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE treino_exercicio_id_seq OWNER TO postgres;

--
-- Name: treino_exercicio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE treino_exercicio_id_seq OWNED BY treino_exercicio.id;


--
-- Name: treino_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE treino_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE treino_id_seq OWNER TO postgres;

--
-- Name: treino_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE treino_id_seq OWNED BY treino.id;


--
-- Name: aluno id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno ALTER COLUMN id SET DEFAULT nextval('aluno_id_seq'::regclass);


--
-- Name: aluno_treino id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno_treino ALTER COLUMN id SET DEFAULT nextval('aluno_treino_id_seq'::regclass);


--
-- Name: exercicio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exercicio ALTER COLUMN id SET DEFAULT nextval('exercicio_id_seq'::regclass);


--
-- Name: knex_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY knex_migrations ALTER COLUMN id SET DEFAULT nextval('knex_migrations_id_seq'::regclass);


--
-- Name: professor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY professor ALTER COLUMN id SET DEFAULT nextval('professor_id_seq'::regclass);


--
-- Name: treino id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino ALTER COLUMN id SET DEFAULT nextval('treino_id_seq'::regclass);


--
-- Name: treino_exercicio id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino_exercicio ALTER COLUMN id SET DEFAULT nextval('treino_exercicio_id_seq'::regclass);


--
-- Data for Name: aluno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY aluno (id, nome, email, telefone, criado_em) FROM stdin;
\.
COPY aluno (id, nome, email, telefone, criado_em) FROM '$$PATH$$/2197.dat';

--
-- Name: aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('aluno_id_seq', 3, true);


--
-- Data for Name: aluno_treino; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY aluno_treino (id, id_aluno, id_treino) FROM stdin;
\.
COPY aluno_treino (id, id_aluno, id_treino) FROM '$$PATH$$/2203.dat';

--
-- Name: aluno_treino_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('aluno_treino_id_seq', 1, false);


--
-- Data for Name: exercicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY exercicio (id, id_treino, nome_exercicio, repeticoes) FROM stdin;
\.
COPY exercicio (id, id_treino, nome_exercicio, repeticoes) FROM '$$PATH$$/2205.dat';

--
-- Name: exercicio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('exercicio_id_seq', 1, false);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY knex_migrations (id, name, batch, migration_time) FROM stdin;
\.
COPY knex_migrations (id, name, batch, migration_time) FROM '$$PATH$$/2194.dat';

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('knex_migrations_id_seq', 49, true);


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY knex_migrations_lock (is_locked) FROM stdin;
\.
COPY knex_migrations_lock (is_locked) FROM '$$PATH$$/2195.dat';

--
-- Data for Name: professor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY professor (id, nome, email, telefone, criado_em) FROM stdin;
\.
COPY professor (id, nome, email, telefone, criado_em) FROM '$$PATH$$/2199.dat';

--
-- Name: professor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('professor_id_seq', 1, false);


--
-- Data for Name: treino; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY treino (id, nome_treino) FROM stdin;
\.
COPY treino (id, nome_treino) FROM '$$PATH$$/2201.dat';

--
-- Data for Name: treino_exercicio; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY treino_exercicio (id, id_treino, id_exercicio) FROM stdin;
\.
COPY treino_exercicio (id, id_treino, id_exercicio) FROM '$$PATH$$/2207.dat';

--
-- Name: treino_exercicio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('treino_exercicio_id_seq', 4, true);


--
-- Name: treino_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('treino_id_seq', 1, false);


--
-- Name: aluno aluno_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno
    ADD CONSTRAINT aluno_email_unique UNIQUE (email);


--
-- Name: aluno aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (id);


--
-- Name: aluno_treino aluno_treino_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_pkey PRIMARY KEY (id);


--
-- Name: exercicio exercicio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exercicio
    ADD CONSTRAINT exercicio_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: professor professor_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY professor
    ADD CONSTRAINT professor_email_unique UNIQUE (email);


--
-- Name: professor professor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY professor
    ADD CONSTRAINT professor_pkey PRIMARY KEY (id);


--
-- Name: treino_exercicio treino_exercicio_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_pkey PRIMARY KEY (id);


--
-- Name: treino treino_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino
    ADD CONSTRAINT treino_pkey PRIMARY KEY (id);


--
-- Name: aluno_treino aluno_treino_id_aluno_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_id_aluno_foreign FOREIGN KEY (id_aluno) REFERENCES aluno(id);


--
-- Name: aluno_treino aluno_treino_id_treino_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY aluno_treino
    ADD CONSTRAINT aluno_treino_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);


--
-- Name: exercicio exercicio_id_treino_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY exercicio
    ADD CONSTRAINT exercicio_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);


--
-- Name: treino_exercicio treino_exercicio_id_exercicio_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_id_exercicio_foreign FOREIGN KEY (id_exercicio) REFERENCES exercicio(id);


--
-- Name: treino_exercicio treino_exercicio_id_treino_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY treino_exercicio
    ADD CONSTRAINT treino_exercicio_id_treino_foreign FOREIGN KEY (id_treino) REFERENCES treino(id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            