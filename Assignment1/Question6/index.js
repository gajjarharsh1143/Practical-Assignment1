const fs = require('fs');
const zlib = require('zlib');

function ExtractZip() {
    const output = fs.createReadStream('../Question5/sample.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('../Question6/extracted_file.txt', 'utf-8'))


    output.on('close', () => {
        console.log('Zip file extracted successfully.');
    });
}

ExtractZip();