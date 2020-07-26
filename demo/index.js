/**
 * This demo compresses the contents of the demo folder into a zip on the root folder
 */
let path = require('path');
let mkdirp = require('mkdirp').sync;

// You would use require('zip-folder') if using the published package
let zipFolder = require('../index.js');

let demoDir = __dirname;
let parentDir = path.dirname(demoDir);
let outputDir = path.join(parentDir, 'demo_tmp');
let outputFile = path.join(outputDir, 'demo.zip');

mkdirp(outputDir);

zipFolder(demoDir, outputFile, function(err) {
	if(err) {
		console.error('This did not quite work :-/', err);
	} else {
		console.log('Done!');
	}
});

