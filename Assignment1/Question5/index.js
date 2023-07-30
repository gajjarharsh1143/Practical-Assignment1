const fs = require('fs');
const zlib = require('zlib');

function createZip() {
    const output = fs.createReadStream('../Question5/sample.txt')
        .pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('../Question5/sample.txt.gz'))


    output.on('close', () => {
        console.log('Zip file created successfully.');
    });
}

createZip();