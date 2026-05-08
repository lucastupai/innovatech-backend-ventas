# Backend Ventas - Innovatech Chile

Este repositorio corresponde al microservicio de ventas del proyecto Innovatech Chile, desarrollado para la Evaluación Parcial N°2 de la asignatura Introducción a Herramientas DevOps.

El servicio fue construido con Node.js, Express y MySQL, y se ejecuta mediante Docker y Docker Compose. Su función principal es permitir la consulta y registro de productos, simulando una parte del sistema relacionada con ventas.

## Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Docker
- Docker Compose

## Descripción del servicio

El backend de ventas expone una API REST básica que permite trabajar con productos. La base de datos se ejecuta en un contenedor MySQL y el backend se conecta a ella usando variables de entorno.

La idea de separar este servicio es mantener una estructura más ordenada, donde ventas pueda funcionar como un microservicio independiente dentro del sistema.

## Endpoints disponibles

### Verificar funcionamiento del backend

```bash
GET /