# Node-MongoDB-Ecommerce

El proyecto recrea una tienda virtual para compra y venta de productos

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)

## Requisitos

Enumera aquí los requisitos previos para ejecutar el proyecto:

- Node.js (v14 o superior)
- MongoDB (si es necesario)

## Instalación

1. Clona el repositorio desde GitHub:

  ```bash
  git clone https://github.com/Dieguidev/node-mongoDB-ecommerce.git
  ```

2. Cambia al directorio del proyecto clonado utilizando el siguiente comando en la terminal:

  ```bash
  cd node-mongoDB-ecommerce
  ```

3. Instalar Dependencias:

  ```bash
  npm install
  ```
## Configuración

Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno:

  ```bash
  MONGO_URL=  
  JWT_SECRET=
  PORT=
  DOMAIN=
  ```
  
## Ejecución

Iniciar el Servidor: Utiliza el siguiente comando para iniciar el servidor:

  ```bash
  npm run start
  ```

Si deseas iniciar en modo desarrollador:

  ```bash
  npm run dev
  ```
