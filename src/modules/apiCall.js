import createTask from "./displayList";
const apiData = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Al4d7IVkemOTTV/scores/';

const refreshButton = async () => {
    try{
        const retrieveData = await fetch(apiData);
        const retrievedData = await retrieveData.json();
        createTask(retrievedData.result)
    } catch (error) {
        console.log('The data was not loaded', error);
    }
};

refreshButton();

export default refreshButton;
