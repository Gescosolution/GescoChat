# GescoChat

[![Build Status](https://travis-ci.org/Gescosolution/GescoChat.svg?branch=master)](https://travis-ci.org/Gescosolution/GescoChat)

**Chat interno de GecoSolutions //GescoSolutions's internal chat**

Módulo para la comunicación interna mediante mensajería instantánea de los miembros del proyecto.
Publicado bajo licencia **GNU GENERAL PUBLIC LICENSE Version 2**.

Este proyecto participa en el Certamen de Proyectos Libres de la Universidad de Granada 2015-2016 como parte del proyecto [Gesco](https://github.com/Gescosolution/Gesco). Para consultar las bases, ir [aquí](https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit)

Desarrollado por Fernando Llodra Belda ([@fllodrab](https://github.com/fllodrab)).

## Descripción
GescoChat es un chat interno orientado a comunicaciones entre miembros de un proyecto informáticos para la gestión de éste. Este chat tiene diferentes herramientas útiles para una buena comunicación durante el desarrollo de cualquier proyecto informático.

A su vez, GescoChat es un módulo que forma parte de Gesco (Gestor de Proyectos Informáticos) de la organización GescoSolutions.

Los hitos establecidos son los siguientes:
* **Desarrollo**: Etapa de desarrollo de la aplicación.
* **Documentación**: Etapa de documentación.
* **Pruebas**: Etapa de pruebas.
* **Despliegue**: Etapa de despliegue.
* **Configuración**: Etapa de gestión de configuraciones.

## Motivación
Lo mas importante en un equipo es la comunicación. Por eso surge la necesidad en todo proyecto (trabajo en equipo) de disponer de herramientas que fomenten esta comunicación. De esta idea surge GescoChat, una herramienta de mensajería instantanea donde poder compartir todo tipo de ideas y datos sobre el proyecto, y que dispone de multiples herramientas implícitas útiles para compartir información entre los miembros del equipo.

## Herramientas de desarrollo
A continuación, se describe las diferentes herramientas que se usan para el desarrollo de este proyecto.

Esta aplicación se desarrollará en [Node.js](https://nodejs.org/en/), un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Además, se usa [Socket.io](http://socket.io/), el cual habilita eventos basados en comunicaciones bidireccionales en tiempo real, imprescindible para la causa.

Para las plantillas (vistas) se usa [Handlebars](http://handlebarsjs.com/) que es una extensión del lenguaje de maquetación [Mustache](http://mustache.github.io/). El repositorio en github se actualiza con bastante frecuencia por lo que genera seguridad a la hora de usar esta herramienta de maquetación.

Se usa una base de datos NoSQL llamada [MongoDB](https://www.mongodb.org/) ya que una de sus principales ventajas es la rapidez de las consultas en base de datos siempre y cuando no se traten de consultas muy complejas (como sería en este caso).

Se pretende seguir una metodología de desarrollo DevOps por lo que es importante llevar a cabo una serie de pruebas para evaluar las funcionalidades de la aplicación y asegurar su correcto funcionamiento. Para esto se usa [Mocha](http://mochajs.org/). También se hace una serie de test de cobertura en la aplicación con [Blanket.js](http://blanketjs.org/) y una integración continua con [Travis CI](https://travis-ci.org/).

Se elabora un provisionamiento de software automático con [Ansible](http://www.ansible.com/).

Se prepara la aplicación para poder desplegarse sin problemas en un PaaS/IaaS como [Azure](https://azure.microsoft.com/es-es/).
