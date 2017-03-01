module.exports = function(grunt){

	// Grunt Config
	grunt.initConfig({

		// Sass
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'public/css/style.min.css': 'assets/scss/main.scss'
				}
			}
		},

		// Watch
		watch: {
			options: {
				livereload: true
			},
			sass: {
	    		files: 'assets/scss/*.scss',
	    		tasks: 'css'
	    	}
		},

		// Connect
		connect: {
			server: {
				options: {
					port: 9000,
					base: '.',
					hostname: 'localhost',
					livereload: true
				}
			}
		}

	});

	// Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Tasks
	grunt.registerTask('css', ['sass']);
	grunt.registerTask('live', ['connect', 'watch']);
};