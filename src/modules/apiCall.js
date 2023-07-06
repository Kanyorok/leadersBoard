import createTask from './displayList.js';

const apiData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTV/scores/';

const refreshButton = async () => {
  try {
    const retrieveData = await fetch(apiData);
    const retrievedData = await retrieveData.json();
    createTask(retrievedData.result);
    return null;
  } catch (error) {
    return error;
  }
};

refreshButton();

export default refreshButton;
