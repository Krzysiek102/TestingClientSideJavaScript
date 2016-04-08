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
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jasmine', 'qunit', 'mocha']);
}