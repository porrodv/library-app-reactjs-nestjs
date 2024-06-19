<h1 align="center">Library app</h1>

<div align="center">
  <a href="#dart-descripción">Descripción</a> &#xa0; | &#xa0; 
  <a href="#white_check_mark-requerimientos">Requerimientos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-instalación">Instalación</a> &#xa0; | &#xa0;
</div>

## :dart: Descripción

Este proyecto full-stack simula el sistema de una Librería que puede listar, crear y editar libros. El aplicativo consta de un front-end desarrollado en [React](https://es.react.dev/) + [Tailwind CSS](https://tailwindcss.com/) y un backend trabajado con [Nest.js](https://nestjs.com/) + [MongoDB](https://www.mongodb.com/).

<div style="display: inline_block, margin: 0px 1px">
  <img height="40" align="center" alt="Chris-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="40" align="center" alt="Chris-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="40" align="center" alt="Chris-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <img height="40" align="center" alt="Chris-Node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="40" align="center" alt="Chris-Node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg">
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</div>

### Estilo de código

Para el estilo y formateo de código se usa [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/), con estos logramos estandarizar el código fuente, haciendo más fácil su lectura y seguimiento.

### Vista rápida

![][app]

## :white_check_mark: Requerimientos

Es necesario tener instalado [Git](https://git-scm.com) y [Node.js](https://nodejs.org/en/).

El proyecto hace uso de una base de datos [MongoDB](https://www.mongodb.com/). En caso no tenerlo instalado seguir alguna de las opciones especificadas:

### 1) Instalación local

- Leer la documentación oficial y seguir los [pasos de instalación](https://www.mongodb.com/docs/manual/administration/install-community/).

- Modificar variables de entorno del proyecto

```bash
# Backend variables
API_PORT=3000
MONGO_URI=mongodb://<MONGO_USER>:<MONGO_PASS>@<MONGO_HOST>:<MONGO_PORT>/library?authSource=admin

# ...
```

- Tener en cuenta que `<MONGO_USER>`, `<MONGO_PASS>`, `<MONGO_HOST>` y `<MONGO_PORT>` son variables locales que el usuario configura al instalar Mongo de forma local.

### 2) Configuración en la nube

MongoDB ofrece un servicio en la nube llamado [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database?tck=docs_server), este es capaz de desplegar una colección válida para el uso de la base de datos dentro del proyecto.

- Leer la documentación oficial y seguir los pasos para [crear una cuenta](https://www.mongodb.com/cloud/atlas/register).

- Desplegar un Clúster público para poder crear la base de datos.

- Una vez creado el Clúster, copiar la URL proporcionada y pegarla como variable de entorno.

```bash
# Backend variables
API_PORT=3000

# Ejemplo de cadena de conexión
MONGO_URI=mongodb+srv://<name>:<password>@cluster0.4douy49.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

# ...
```

### 3) Uso de imagen Docker

- Es necesario tener instalado y configurado [Docker]().

- Ejecutar en la raíz del proyecto:

```bash
# Levantar imágen de MongoDB
$ docker-compose up --build
```

- El comando creará una instancia local de MongoDB con las siguiente variables: - `<MONGO_USER>` : nestuser - `<MONGO_PASS>` : nestpass - `<MONGO_PORT>` : 27017
  <br />

- Adicionalmente, Docker insertarán datos de prueba en la colección `library` al crear la imágen.

## :checkered_flag: Instalación

Antes de iniciar :checkered_flag:, es necesario cumplir e instalar todos los <a href="#white_check_mark-requerimientos">requerimientos</a> previos.

```bash
# Clonar el proyecto
$ git clone https://github.com/porrodv/library-app-reactjs-nestjs.git

# Acceder al proyecto
$ cd library-app-reactjs-nestjs

# Instalar dependencias
$ npm run front:install
$ npm run back:install

# Correr el proyecto en desarrollo
$ npm run front:dev
$ npm run back:dev

# El backend del proyecto será alojado en <http://localhost:3000>
# El frontend del proyecto será alojado en <http://localhost:5173>
```

#### Variables de entorno

Para configurar las variables de entorno necesarias se debe crear un archivo `.env` a partir del ejemplo situado en la raíz del proyecto. Los siguientes valores son de prueba, modificar en caso ser necesario.

```bash
# Backend variables
API_PORT=3000
MONGO_URI=mongodb://nestuser:nestpass@localhost:27017/library?authSource=admin

# Frontend variables
VITE_API_PROT=http
VITE_API_HOST=localhost
VITE_API_PORT=3000
VITE_API_PATH=library/v1
```

#### Inicialización de base de datos

Al levantar el proyecto con todas las dependencias, haremos uso del backend conectado a la base de datos pero esta será generada vacía. Para agregar datos de prueba iniciales al proyecto es necesario ejecutar el archivo `init-mongo.js` que contiene el código necesario para generar los datos.

    ├── backend/
        ├── ...
    ├── db/
        ├── init-mongo.js           # Ejecutar
    ├── frontend/
        ├── ...
    ├── public/
        ├── ...
    ...

- Si se creó la instancia de MongoDB desde la imágen de docker no es necesario seguir este paso.

- Si se está haciendo uso de MongoDB Atlas bastará con copiar los datos en formato JSON y pegarlos en la sección de `Añadir documentos` dentro de nuestra colección `Library` en el clúster creado.

<!-- Images -->

[app]: ./public/app.png
