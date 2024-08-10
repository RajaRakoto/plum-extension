/**
<<<<<<< HEAD
 * @description: gruntfile for plum extension
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = function (grunt) {
=======
 * @description: gruntfile for vscode boilerplate
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress
 */
module.exports = (grunt) => {
>>>>>>> vscode-boilerplate/master
	require("load-grunt-tasks")(grunt);

	// backups destination
	const backupsDestination = "./backups/";

	// node-glob syntax
	const includeAllFiles = ["**/*", ".*/**/*", "**/.*", "**/.*/**/*"];

	// all grunt plugins config
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),

		// compress files and folders (incremental backup)
		compress: {
			main: {
				options: {
<<<<<<< HEAD
					archive: backupsDestination + "main.tar.gz",
=======
					archive: `${backupsDestination}main.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				files: [{ src: ["./*", "./.*"] }],
				filter: "isFile",
			},
			vscode: {
				options: {
<<<<<<< HEAD
					archive: backupsDestination + "vscode.tar.gz",
=======
					archive: `${backupsDestination}vscode.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				expand: true,
				cwd: "./.vscode/",
				src: includeAllFiles,
				dest: "vscode",
			},
			assets: {
				options: {
<<<<<<< HEAD
					archive: backupsDestination + "assets.tar.gz",
=======
					archive: `${backupsDestination}assets.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				expand: true,
				cwd: "./assets/",
				src: includeAllFiles,
				dest: "assets",
			},
<<<<<<< HEAD
			modules: {
				options: {
					archive: backupsDestination + "modules.tar.gz",
				},
				expand: true,
				cwd: "./modules/",
				src: includeAllFiles,
				dest: "modules",
			},
			src: {
				options: {
					archive: backupsDestination + "src.tar.gz",
=======
			src: {
				options: {
					archive: `${backupsDestination}src.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				expand: true,
				cwd: "./src/",
				src: includeAllFiles,
				dest: "src",
			},
			tests: {
				options: {
<<<<<<< HEAD
					archive: backupsDestination + "tests.tar.gz",
=======
					archive: `${backupsDestination}tests.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				expand: true,
				cwd: "./tests/",
				src: includeAllFiles,
				dest: "tests",
			},
			tmp: {
				options: {
<<<<<<< HEAD
					archive: backupsDestination + "tmp.tar.gz",
=======
					archive: `${backupsDestination}tmp.tar.gz`,
>>>>>>> vscode-boilerplate/master
				},
				expand: true,
				cwd: "./tmp/",
				src: includeAllFiles,
				dest: "tmp",
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask("backup", [
		"compress:main",
		"compress:vscode",
		"compress:assets",
<<<<<<< HEAD
		"compress:modules",
=======
>>>>>>> vscode-boilerplate/master
		"compress:src",
		"compress:tests",
		"compress:tmp",
	]);

	// all tasks lists
	const plumTaskNames = ["backup"];
	const plumTaskStatus = [
<<<<<<< HEAD
		"compress: main | vscode | assets | modules | src | tests | tmp",
=======
		"compress: main | vscode | assets | src | tests | tmp",
>>>>>>> vscode-boilerplate/master
	];

	// default tasks
	grunt.registerTask("default", () => {
		console.log(
			"\nHere are the lists of plugins (tasks) you can run with grunt:".green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case "cyan":
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
<<<<<<< HEAD
						console.log(taskNames.cyan + ` -> ${taskStatus[index]}`);
=======
						console.log(`${taskNames.cyan} -> ${taskStatus[index]}`);
>>>>>>> vscode-boilerplate/master
					});
					break;
				case "magenta":
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
<<<<<<< HEAD
						console.log(taskNames.magenta + ` -> ${taskStatus[index]}`);
=======
						console.log(`${taskNames.magenta} -> ${taskStatus[index]}`);
>>>>>>> vscode-boilerplate/master
					});
					break;
				case "yellow":
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
<<<<<<< HEAD
						console.log(taskNames.yellow + ` -> ${taskStatus[index]}`);
=======
						console.log(`${taskNames.yellow} -> ${taskStatus[index]}`);
>>>>>>> vscode-boilerplate/master
					});
					break;
				case "blue":
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
<<<<<<< HEAD
						console.log(taskNames.blue + ` -> ${taskStatus[index]}`);
=======
						console.log(`${taskNames.blue} -> ${taskStatus[index]}`);
>>>>>>> vscode-boilerplate/master
					});
					break;

				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
<<<<<<< HEAD
			"== PLUM EXTENSION TASKS ==",
			plumTaskNames,
			plumTaskStatus,
			"magenta",
=======
			"== VSCODE BOILERPLATE TASKS ==",
			plumTaskNames,
			plumTaskStatus,
			"yellow",
>>>>>>> vscode-boilerplate/master
		);
	});
};
