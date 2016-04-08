module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'jasmineKarma/jasmineSUT.js',
                options: {
                    specs: 'jasmineKarma/jasmineSUTSpec.js'
                }
            }
        },
        qunit: {
            all: ['qUnit/qUnitRunner.html']
        },
        mocha: {
            all: {
                src: ['mocha/mochaRunner.html'],
                options: {
                    run: true
                }
            }
        },
        jshint: {
            all: ['jasmineKarma/*.js', 'qUnit/*.js', 'mocha/*.js'],
            options:{
                asi: true
            }
        },
        watch: {
            files: ['jasmineKarma/*.*', 'qUnit/*.*', 'mocha/*.*'],
            tasks: ['jshint', 'jasmine', 'qunit', 'mocha']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jasmine', 'qunit', 'mocha']);
}