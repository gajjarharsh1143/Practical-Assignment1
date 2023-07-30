// function fetchLiveScore() {
//     fetch('https://api.cricapi.com/v1/currentMatches?apikey=9a070f69-58aa-447a-b950-6358a39bf75e&offset=0')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Live Cricket Score:');
//             console.log('Match:', data.match);
//             console.log('Score:', data.score);
//             console.log('---------------------------------------');
//         })
//         .catch((error) => {
//             console.error('Error fetching live score data:', error);
//         });
// }

// setInterval(fetchLiveScore, 10000);
async function getScore() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=9a070f69-58aa-447a-b950-6358a39bf75e&offset=0");
        const { data } = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err)
    }
}
getScore();