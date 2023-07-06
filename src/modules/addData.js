const addScore = async (e) => {
    e.preventDefault();
    let valUser = document.querySelector('.user-name');
    let valScore = document.querySelector('.user-score');
    const itemUserVal = valUser.value;
    const itemUserScore = valScore.value;
    const apiData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTV/scores/';
    try {
        const finResponse = await fetch(apiData, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: itemUserVal, score: itemUserScore})
        });

        valUser = '';
        valScore = '';
        const retrievedData = await finResponse.json();
    } catch(error){
        console.log('there was an error feeding data', error);
    }
};

export default addScore;