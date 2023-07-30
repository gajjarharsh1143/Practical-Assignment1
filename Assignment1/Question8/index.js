const fetch = require('../node_modules/node-fetch')
async function fetchData() {
    try {
        const response = await fetch('https://google.com');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status} - ${response.statusText}`);
        }

        const data = await response.text();
        console.log(data);
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

fetchData();
