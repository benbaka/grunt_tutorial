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

		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
