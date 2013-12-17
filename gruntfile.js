module.exports = function(grunt){
	grunt.initConfig({
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['-a'],
				commitMessage: 'release %VERSION%',
				tagMessage: 'version %VERSION%',
				pushTo: 'origin'
			}
		},
		jshint: {
			codebase: {
				src: 'fn.js'
			}
		},
		complexity: {
			codebase: {
				src: 'fn.js'
			}
		},
		uglify: {
			options: {
				report: 'min'
			},
			web: {
				options: {
					wrap: 'fn'
				},
				src: 'fn.js',
				dest: 'fn.min.js'
			},
			node: {
				src: 'fn.js',
				dest: 'index.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-complexity');

	grunt.registerTask('default', ['jshint', 'complexity', 'uglify']);
};