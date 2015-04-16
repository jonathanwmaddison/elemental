var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Elemental',
		dependencies: [
			'blacklist',
			'classnames',
			'moment',
			'react',
			'react/addons',
			'underscore'
		]
	},

	example: {
		src: 'site/src',
		dist: 'site/dist',
		files: [
			'index.html',
			'.gitignore'
		],
		scripts: [
			'site.js'
		],
		less: [
			'site.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
