module.experts = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js'],
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %>' +
					' <%= grunt.template.today("yyy-mm-dd") %> */\n'
			},
			dist: {
				src: '<%= pkg.name %>',
				dest: '<%= pkg.name%>.<%= pkg.version %>.min.js'
			},
		},
	});
	grunt.loadNpmTask('grunt-contrib-uglify');
	grunt.loadNpmTask('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'uglify']);
};
