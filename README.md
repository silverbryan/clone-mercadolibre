<p align="center">
  <a href="https://github.com/silverbryan">
    <img src="images/mercado-libre-logo.svg" alt="Logo Mercadolibre" width="200" >
  </a>

  <h2 align="center"><b>Clone-Mercadolibre</b></h2>

  <p align="center">
    React - redux - Express.js
    <br />
    <br />
    <br />
    <a href="https://clone-mercadolibre.herokuapp.com/">View Online Demo</a>
    ·
    <a href="https://github.com/silverbryan/clone-mercadolibre/issues">Report Bug</a>
    ·
    <a href="https://github.com/silverbryan/clone-mercadolibre/issues">Request Feature</a>
  </p>
</p>
<br>

## About The Project
Este proyecto esta inspirado en el ecommerce #1 de latam - mercadolibre, se construyo usando el end point de mercado, el proyecto esta divido en 2 secciones una llamada api donde se encuentra donde el back, y otra llamada client donde se encuentra la app de react, en el backend fue construido con express.js donde se encarga de consumir la api y asi mismo gestiona los recursos, en el frontend esta construido en React.js. La idea es seguir añadiendo nuevas features para que el mini ecommerce tome forma.
Basicamente por el momento se puede hacer :

- Buscar por categorias de mercadolibre
- Buscar por producto
- Filtrado de los resultados de busqueda
- Detalle del producto
- Checkout MercadoPago

## Built With

* []()Express.js
* []()React.js - React-router - Redux - react-redux
* []()Bootstrap

## Installation

Create .env

```sh
PORT=5000 #PORT DEVELOPMENT
PATH_BASE=https://api.mercadolibre.com
ACCESS_TOKEN=APP_USR-XXXX-XXXXX-XXXXXXXXXX #MERCADOPAGO CREDENTIALS
```
### Development Environment

```sh
npm install
npm start
```
### Production Environment

```sh
npm install
npm run heroku-postbuild
npm run start:prod
```
