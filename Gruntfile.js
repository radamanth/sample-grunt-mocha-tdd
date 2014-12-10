module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuration des tâches grunt

        mocha_istanbul: {
            coverage: {
                src: 'test'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul')

    // Les tâches sont enregistrées ici
    grunt.registerTask('default', []);

    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};