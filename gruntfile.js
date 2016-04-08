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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['jasmine', 'qunit']);
}