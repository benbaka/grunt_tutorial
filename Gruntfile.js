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

		imagemin: {
			files: [{
				expand: true,
				cwd: 'images',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'sample/images/build'
			}],

		},

		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
