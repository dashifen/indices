module.exports = function(grunt) {
	grunt.initConfig({
		package: grunt.file.readJSON("package.json"),

		sass: {
			options: {
				outputStyle: "compressed"
			},

			dist: {
				files: [{
					expand: true,
					cwd: "includes/styles/max",
					src: "**/*.scss",
					dest: "includes/styles/min",
					ext: ".min.css"
				}]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: "node_modules/html5-boilerplate-npm/css",
					src: "main.css",
					dest: "includes/styles/min/",
					ext: ".min.css"
				}, {
					expand: true,
					cwd: "node_modules/normalize.css/",
					src: "normalize.css",
					dest: "includes/styles/min/",
					ext: ".min.css"
				}, {
					expand: true,
					cwd: "includes/styles/max",
					src: "**/*.css",
					dest: "includes/styles/min",
					ext: ".min.css"
				}]
			}
		},

		concat: {
			options: {
				separator: ""
			},
			dist: {
				src: [
					"includes/styles/min/normalize.min.css",
					"includes/styles/min/main.min.css",
					"includes/styles/min/styles.min.css"
				],

				dest: "includes/styles/<%= package.name %>.min.css"
			}
		},

		postcss: {
			options: {
				processors: [
					require("autoprefixer")({
						browsers: ["last 2 versions"],
						remove: false
					})
				]
			},
			dist: {
				src: "includes/styles/min/styles.min.css"
			}
		},

		uglify: {
			options: {
				screwIE8: true
			},

			my_target: {
				files: [{
					expand: true,
					cwd: "includes/scripts/max",
					src: "**/*.js",
					dest: "includes/scripts/min",
					rename: function(destBase, destPath) {
						return destBase+'/'+destPath.replace('.js', '.min.js');
					}
				}]
			}
		},

		watch: {
			css: {
				files: "includes/styles/max/**/*.scss",
				tasks: ["sass", "concat", "postcss"]
			},

			js: {
				files: "includes/scripts/max/**/*.js",
				tasks: ["uglify"]
			}
		}
	});

	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-postcss");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("css", ["sass", "concat", "postcss"]);
	grunt.registerTask("default", ["watch"]);
};
