const fs = require('fs');
const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink);

const filePath = './sample.txt';

async function deleteFile() {
    try {
        await unlinkAsync(filePath);
        console.log('File deleted successfully.');
    } catch (err) {
        console.error('Error deleting the file:', err);
    }
}

deleteFile();
