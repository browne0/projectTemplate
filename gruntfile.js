module.exports = function(grunt) {

	// Project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['js/*.js', '!gruntfile.js'],
			options: {
				"curly" : true,
				'eqnull': true,
				'eqeqeq': true,
				'undef': false,
				'globals': {
					'jQuery': true
				}
			}
		},
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				options: {
					includePaths: require('node-bourbon').includePaths
				},
				files: {
					'css/main.css': 'sass/main.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: ['js/**/*.js'],
				tasks: ['jshint'],
				options: {
					spawn: false,
					livereload: true,
				}
			},
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true,
				}
			},
			html: {
				files: ['index.html'],
				options: {
					livereload: true,
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default tasks
	grunt.registerTask('default', ['watch']);
}