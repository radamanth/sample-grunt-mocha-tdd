module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configuration des tâches grunt

        mochaTest: {
            unit: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/{,**}/*.js']
        }},
        mocha_istanbul: {
            coverage: {
                src: 'test'
            }
        },
        watch: {
            test: {
                files: [
                    'src/{,**}/*.js',
                    'test/{,**}/*.js'
                ],
                tasks: ['test']
            }
				}
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Les tâches sont enregistrées ici
    grunt.registerTask('default', []);

	  grunt.registerTask('test', ['mochaTest:unit']);
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
    grunt.registerTask('autotest', ['watch:test']);
};