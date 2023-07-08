const taskContainer = document.querySelector('.namesList');

const createTask = (info) => {
  const actionTask = info;
  taskContainer.innerHTML = '';
  const tableDesign = document.createElement('table');
  const tHead = document.createElement('thead');
  const tBody = document.createElement('tbody');
  tableDesign.append(tHead);
  const trow = document.createElement('tr');
  tHead.appendChild(trow);
  const tData1 = document.createElement('th');
  trow.appendChild(tData1);
  tData1.innerHTML = 'User Name & Points';
  tableDesign.append(tBody);
  actionTask.forEach((score) => {
    const tBodyRow = document.createElement('tr');
    tBodyRow.classList.add('names_container');
    tBody.appendChild(tBodyRow);
    const tBodyData1 = document.createElement('td');
    const tBodyData2 = document.createElement('td');
    tBodyRow.appendChild(tBodyData1);
    tBodyRow.appendChild(tBodyData2);
    const paragraph = document.createElement('p');
    const paragraph1 = document.createElement('p');
    tBodyData1.appendChild(paragraph);
    paragraph.innerHTML = `${score.user}`;
    tBodyData2.appendChild(paragraph1);
    paragraph1.innerHTML = `${score.score}`;
    taskContainer.appendChild(tableDesign);
  });
};

export default createTask;