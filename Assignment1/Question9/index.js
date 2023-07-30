const mysql = require('mysql');
const { promisify } = require('util');
const Table = require('cli-table3');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

const query = promisify(connection.query).bind(connection);

async function insertRecord() {
    try {
        const insertSql = 'INSERT INTO employee (name) VALUES (?)';
        const insertParams = [`John Doe ${Math.floor(Math.random() * 100)}`];
        await query(insertSql, insertParams);
        console.log('Record inserted successfully.');
        displayRecords();
    } catch (err) {
        console.error('Error inserting record:', err);
    }
}

async function displayRecords() {
    try {
        const selectSql = 'SELECT * FROM employee';
        const records = await query(selectSql);

        const table = new Table({
            head: ['ID', 'Name'],
        });

        records.forEach((record) => {
            table.push([record.id, record.name]);
        });

        console.log(table.toString());
    } catch (err) {
        console.error('Error fetching records:', err);
    }
}

setInterval(insertRecord, 5000);