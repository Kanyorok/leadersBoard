const addScore = async (e) => {
  e.preventDefault();
  const valUser = document.querySelector('.user-name');
  const valScore = document.querySelector('.user-score');
  const itemUserVal = valUser.value;
  const itemUserScore = valScore.value;
  const apiData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTV/scores/';
  try {
    const finResponse = await fetch(apiData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: itemUserVal, score: itemUserScore }),
    });

    valUser.value = '';
    valScore.value = '';
    const retrievedData = await finResponse.json();
    return retrievedData;
  } catch (error) {
    return error;
  }
};

export default addScore;