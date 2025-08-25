# MongoDB Node CRUD

Este proyecto es una aplicación CRUD de tareas desarrollada con Node.js, Express, MongoDB y Handlebars.

## Características

- Crear, editar, eliminar y marcar tareas como completadas.
- Interfaz web con Handlebars.
- Conexión a MongoDB usando Mongoose.
- Configuración flexible mediante variables de entorno.
- Listo para ejecutarse con Docker y Docker Compose.

## Requisitos

- Node.js >= 18
- Docker y Docker Compose (opcional)
- MongoDB (puedes usar el contenedor incluido)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mongodb-node-crud.git
   cd mongodb-node-crud
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Copia el archivo de ejemplo de variables de entorno y complétalo con tus datos:

   ```bash
   cp .env.example .env
   ```

   Edita el archivo `.env` y completa los valores requeridos:

   ```env
   MONGO_USERNAME=
   MONGO_PASSWORD=
   MONGO_HOST=
   MONGO_PORT=
   MONGO_DATABASE=
   MONGODB_URI=
   PORT=
   NODE_ENV=
   ```

## Uso con Docker

1. Inicia los servicios:

   ```bash
   docker-compose up --build
   ```

2. Accede a la aplicación en [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` — Ejecuta el servidor en modo desarrollo con nodemon y babel-node.
- `npm start` — Ejecuta el servidor en modo producción.

## Estructura del proyecto

```text
src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── views/
  ├── app.js
  ├── index.js
  ├── database.js
.env
.env.example
Dockerfile
docker-compose.yml
```

## Variables de entorno

Debes completar todas las variables en el archivo `.env` antes de iniciar el proyecto.  
Consulta el archivo `.env.example` para ver los nombres requeridos.

## Licencia

MIT
