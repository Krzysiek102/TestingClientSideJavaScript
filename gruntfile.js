module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            pivotal: {
                src: 'jasmineKarma/jasmineSUT.js',
                options: {
                    specs: 'jasmineKarma/jasmineSUTSpec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jasmine']);
}