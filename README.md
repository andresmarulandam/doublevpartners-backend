# Tickets API

Este proyecto proporciona una API para la gestión de tickets con paginación. La aplicación está desarrollada en Node.js y utiliza Express para exponer el servicio HTTP RESTful. Además, se utiliza MongoDB como base de datos, y se puede ejecutar fácilmente con Docker.

## Requisitos Previos

- Node.js y npm instalados
- Docker instalado

## Clonar el Repositorio

git clone https://github.com/andresmarulandam/doublevpartners-backend.git
cd tickets-api

## Instalar Dependencias

npm install

## Configuración de Variables de Entorno

cp .env.example .env

## .env

Actualiza en .env con la información dada

## Ejecutar con Docker

1. Iniciar el contenedor de MongoDB en segundo plano con: docker-compose up -d
2. Ejecuta la aplicación con el comando: npm start

## USO

La aplicación estará disponible en: http://localhost:3000
Puedes probar las API utilizando herramientas como Postman.

## DOCUMENTACIÓN

Puedes acceder a la documentación en: http://localhost:3000/api-docs

## Licencia

Este proyecto está bajo la licencia MIT.
