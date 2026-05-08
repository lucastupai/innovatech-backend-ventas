CREATE DATABASE IF NOT EXISTS innovatech_db;

USE innovatech_db;

CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

INSERT INTO productos (nombre, precio) VALUES
('Notebook Lenovo', 450000),
('Mouse Gamer', 15990),
('Teclado Mecanico', 39990);