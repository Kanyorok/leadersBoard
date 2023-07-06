import './styles/style.css';
import refreshButton from './modules/apiCall.js';
import addScore from './modules/addData';

const refreshData = document.getElementById('btn-add');
refreshData.addEventListener('click', refreshButton);

const form = document.querySelector('form');
form.addEventListener('submit', addScore);