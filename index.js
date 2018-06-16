var fs = require('fs');
var archiver = require('archiver');

function zipFolder(srcFolder, zipFilePath, callback) {
	var output = fs.createWriteStream(zipFilePath);
	var zipArchive = archiver('zip');

	output.on('close', function() {
		callback();
	});

	zipArchive.on('warning', function(err) {
		if (err.code === 'ENOENT') {
			// log warning
		} else {
			// throw error
			throw err;
		}
	});

	zipArchive.on('error', function(err) {
		throw err;
	});

	zipArchive.pipe(output);

	zipArchive.directory(srcFolder, false);

	zipArchive.finalize();
}

module.exports = zipFolder;
