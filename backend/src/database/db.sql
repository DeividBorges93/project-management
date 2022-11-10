-- Active: 1668032235317@@127.0.0.1@5432@projects_manager
CREATE DATABASE projects_manager
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE users(
    id SERIAL NOT NULL,
    name character varying(50) NOT NULL,
    password character varying(10) NOT NULL,
    username character varying(20) NOT NULL,
    PRIMARY KEY(id)
);