'use strict';

module.exports = function(grunt) {

    // Configuración del proyecto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*Tests*/
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        },
        /*Documentación*/
        docco: {
            debug: {
                src: ['*.js', 'test/*.js'],
                options: {
                    output: 'docs/'
                }
            }
        }
    });

    // Carga de plugins para realizar las diferentes tareas
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-docco');

    // Tarea Tests: Aplicamos los tests.
    grunt.loadNpmTasks('default', 'mochaTest');

    // Tarea por omisión: generar la documentación
    grunt.registerTask('default', ['docco', 'mochaTest']);
};