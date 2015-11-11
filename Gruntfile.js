(function () {
    'use strict';

    module.exports = function (grunt) {

        // Configuración del proyecto
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            // Tests
            mochaTest: {
                test: {
                    options: {
                        reporter: 'spec'
                    },
                    src: ['test/**/*.js']
                }
            },
            // Documentación
            docco: {
                debug: {
                    src: ['*.js', 'test/*.js'],
                    options: {
                        output: 'docs/'
                    }
                }
            },
            // Analizar sintacticamente el código .js
            jshint: {
                // Definir los archivos a los que aplicar el análisis
                all: ['Gruntfile.js', 'index.js', 'chatServer.js', 'test/**/*.js']
            }
        });

        // Carga de plugins para realizar las diferentes tareas
        grunt.loadNpmTasks('grunt-mocha-test');
        grunt.loadNpmTasks('grunt-docco');
        grunt.loadNpmTasks('grunt-contrib-jshint');

        // Tarea Tests: Aplicamos los tests.
        grunt.loadNpmTasks('test', ['mochaTest']);

        // Tarea 'syntax': analizar sintacticamente archivos JS
        grunt.registerTask('syntax', ['jshint']);

        // Tarea por omisión: generar la documentación
        grunt.registerTask('default', ['docco', 'mochaTest', 'syntax']);
    };

}());