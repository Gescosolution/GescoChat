# GescoChat

[![Build Status](https://travis-ci.org/Gescosolution/GescoChat.svg?branch=master)](https://travis-ci.org/Gescosolution/GescoChat)

**Chat interno de GescoSolutions //GescoSolutions's internal chat**

Módulo para la comunicación interna mediante mensajería instantánea de los miembros del proyecto.
Publicado bajo licencia **GNU GENERAL PUBLIC LICENSE Version 2**.

Este proyecto participa en el Certamen de Proyectos Libres de la Universidad de Granada 2015-2016 como parte del proyecto [Gesco](https://github.com/Gescosolution/Gesco). Para consultar las bases, ir [aquí](https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit)

Desarrollado por Fernando Llodra Belda ([@fllodrab](https://github.com/fllodrab)).

## Primer Hito

### Descripción
GescoChat es un chat interno orientado a comunicaciones entre miembros de un proyecto informáticos para la gestión de éste. Este chat tiene diferentes herramientas útiles para una buena comunicación durante el desarrollo de cualquier proyecto informático.

A su vez, GescoChat es un módulo que forma parte de Gesco (Gestor de Proyectos Informáticos) de la organización GescoSolutions.

Los hitos establecidos son los siguientes:
* **Desarrollo**: Etapa de desarrollo de la aplicación.
* **Documentación**: Etapa de documentación.
* **Pruebas**: Etapa de pruebas.
* **Despliegue**: Etapa de despliegue.
* **Configuración**: Etapa de gestión de configuraciones.

### Motivación
Lo mas importante en un equipo es la comunicación. Por eso surge la necesidad en todo proyecto (trabajo en equipo) de disponer de herramientas que fomenten esta comunicación. De esta idea surge GescoChat, una herramienta de mensajería instantanea donde poder compartir todo tipo de ideas y datos sobre el proyecto, y que dispone de multiples herramientas implícitas útiles para compartir información entre los miembros del equipo.

### Herramientas de desarrollo
A continuación, se describe las diferentes herramientas que se usan para el desarrollo de este proyecto.

Esta aplicación se desarrollará en [Node.js](https://nodejs.org/en/), un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Además, se usa [Socket.io](http://socket.io/), el cual habilita eventos basados en comunicaciones bidireccionales en tiempo real, imprescindible para la causa.

Para las plantillas (vistas) se usa [Handlebars](http://handlebarsjs.com/) que es una extensión del lenguaje de maquetación [Mustache](http://mustache.github.io/). El repositorio en github se actualiza con bastante frecuencia por lo que genera seguridad a la hora de usar esta herramienta de maquetación.

Se usa una base de datos NoSQL llamada [MongoDB](https://www.mongodb.org/) ya que una de sus principales ventajas es la rapidez de las consultas en base de datos siempre y cuando no se traten de consultas muy complejas (como sería en este caso).

Se pretende seguir una metodología de desarrollo DevOps por lo que es importante llevar a cabo una serie de pruebas para evaluar las funcionalidades de la aplicación y asegurar su correcto funcionamiento. Para esto se usa [Mocha](http://mochajs.org/). También se hace una serie de test de cobertura en la aplicación con [Blanket.js](http://blanketjs.org/) y una integración continua con [Travis CI](https://travis-ci.org/).

Se elabora un provisionamiento de software automático con [Ansible](http://www.ansible.com/).

Se prepara la aplicación para poder desplegarse sin problemas en un PaaS/IaaS como [Azure](https://azure.microsoft.com/es-es/).

## Segundo Hito: Integración continua

### Tareas

Se utiliza [Grunt](http://gruntjs.com/) para automatizar las tareas tales como la documentación y los test de prueba.

He elegido esta herramienta por ser una de las más populares y por tanto con una amplia documentación y catálogo de
plugins. 

### Tests

Para los test, he usado [Mocha](https://mochajs.org/) ya que se trata de una framework de pruebas para JavaScript y por 
tanto compatible con **Node.js**, que es el lenguaje utilizado para mi proyecto.

### Integración Continua

Se utiliza [Travis CI](https://travis-ci.org/) para la construcción y pruebas de la aplicación. Se ha elegido esta 
herramienta frente a otras por su gran integración con gitHub, su facilidad de uso y la posibilidad de ejecutar una 
aplicación en diferentes versiones simultáneamente.

### Despliegue en un PaaS

Se pretende hacer el despliegue en OpenShift por la oferta de add-ons sin tener límite y de forma gratuita.

Para configurar correctamente el despliegue en OpenShift se deben seguir los siguientes pasos:

- Instalar herramienta de línea de comandos de **Travis CI** como gema **Ruby**.

`sudo gem install travis -v 1.8.0 --no-rdoc --no-ri`

- Instalar la gema con la herramienta de línea de comandos de **OpenShift**.

`sudo gem install rhc`

- Configurar las herramientas **OpenShift** (Sólo si es la primera vez que se instala ésta gema).

`rhc setup`

- Crear una aplicación **OpenShift** donde desplegar nuestra app.

`rhc app create gescochat nodejs-0.10`

- Editar el archivo de configuración de Travis CI para agregar la información que se necesita a la hora del despliegue
automático.

`travis setup openshift`

(Aquí me da fallo)
An error occurred running `travis setup`:
    Addressable::URI::InvalidURIError: Invalid scheme format: git@github.com

Issue sin resolver: https://github.com/travis-ci/travis-ci/issues/5280

Pasamos a Heroku.

### Heroku

Voy a usar **Heroku** para el despliegue por su facilidad para desplegar cualquier aplicación.
En un principio, se quiso optar por OpenShift por probar un nuevo PaaS, pero dio fallos a la hora de configurarlo como
se ha visto previamente.

Para desplegar una aplicación en Heroku hay que seguir los siguientes pasos:

- Como con OpenShift, se necesita tener instalado Ruby con al menos la versión 1.9.3.

`sudo apt-get install ruby-full`

- Instalar herramienta de línea de comandos de **Travis CI** como gema **Ruby**.

`sudo gem install travis`

- Hacer push de la aplicación a **Heroku**.

`git push heroku master`

- Habilitar la 'Espera de integración continua antes de desplegar'.

![esperaCI](https://dl.dropboxusercontent.com/s/2ka1raisqbqfwij/Captura%20de%20pantalla%202015-12-13%2021.37.40.png)

Una vez hechos estos pasos, cada vez que hagamos push desde la rama 'master' se hará una integración continua con 
**Travis CI**, y hasta que no acabe exitosamente dicha integración continua, no se desplegará en **Heroku**. 

A continuación, se puede observar como con un simple push a 'master' **Travis CI** ha ejecutado la integración continua
y mas tarde **Heroku** la ha desplegado.

**Travis CI**
![travisCI](https://dl.dropboxusercontent.com/s/cfpbxv4tnbq4l2a/Captura%20de%20pantalla%202015-12-13%2021.58.21.png)

**Heroku**
![Heroku](https://dl.dropboxusercontent.com/s/od8je4zz7l28upv/Captura%20de%20pantalla%202015-12-13%2021.58.30.png)


### Docker










