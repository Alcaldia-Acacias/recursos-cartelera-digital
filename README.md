# Proyecto: Consulta Cartelera Digital

Este proyecto es una aplicación web sencilla para consultar la Cartelera Digital del programa Renta Ciudadana utilizando el número de cédula. La aplicación está construida utilizando HTML, CSS, y JavaScript, y utiliza un archivo JSON para almacenar los datos de consulta.

## Descripción

La aplicación permite a los usuarios ingresar su número de cédula en un formulario y consultar si están registrados en la lista de beneficiarios del programa Renta Ciudadana. La consulta se realiza contra un archivo JSON que contiene la información de los beneficiarios.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `index.html`: Contiene la estructura HTML de la página principal.
- `style.css`: Archivo CSS que define los estilos de la página.
- `script.js`: Archivo JavaScript que maneja la lógica de la consulta y la interacción con el usuario.
- `cedulas.json`: Archivo JSON que contiene los datos de los beneficiarios.

## Funcionalidades

- **Consulta por número de cédula:** El usuario ingresa su número de cédula en el formulario y, al presionar el botón de consulta, la aplicación verifica si el número está registrado en el archivo JSON.
- **Mensajes de respuesta:** Dependiendo del resultado de la consulta, se muestra un mensaje indicando si el usuario es beneficiario o no.
- **Interfaz amigable:** La aplicación cuenta con un diseño responsivo y fácil de usar, adaptado tanto para dispositivos móviles como para escritorio.

## Instalación

1. Clona este repositorio en tu máquina local.

## Uso

1. Abre la página web en tu navegador.
2. Ingresa tu número de cédula en el campo correspondiente.
3. Haz clic en el botón "Consultar".
4. Observa el resultado de la consulta, que te indicará si eres beneficiario del programa Renta Ciudadana.
