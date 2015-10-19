module.exports = function(grunt){


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'js/libs/*.js',
					'js/global.js'
				],
				dest: 'js/build/production.js',
			}
		},

		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},

		coffee: {
			build: {
				expand: true,
				cwd: 'coffee',
				src: ['**/*.coffee'],
				dest: 'js/coffee',
				ext: ".js"
			}
		},

		imagemin: {
			files: [{
				expand: true,
				cwd: 'images',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'sample/images/build'
			}],

		},

		watch: {
			coffee:{
				files: "coffee/js/*.coffee",
				tasks: ["coffee:build"]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.registerTask('default', ['watch']);

};
