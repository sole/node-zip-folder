const fs = require('fs');
const archiver = require('archiver');

const zipFolder = (srcFolder, zipFilePath, callback) => {
	var output = fs.createWriteStream(zipFilePath);
	var zipArchive = archiver('zip');
    
	output.on('close', function() {
		callback();
	});

	zipArchive.pipe(output);

	zipArchive.glob('**/*', 
        { cwd: srcFolder, 
          src: ['**/*'], 
          expand: true }
	);

	zipArchive.finalize(function(err, bytes) {
		if(err) {
			callback(err);
		}
	});
}

module.exports = zipFolder;
