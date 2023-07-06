const taskContainer = document.querySelector('.namesList');

const createTask = (info) => {
  const actionTask = info;
  taskContainer.innerHTML = '';

  actionTask.forEach((score) => {
    const taskComponent = document.createElement('div');
    taskComponent.classList.add('names_container');
    const paragraph = document.createElement('p');
    taskComponent.appendChild(paragraph)
    paragraph.innerHTML = `${score.user}: ${score.score}`;
    taskContainer.appendChild(taskComponent);
  });
};

export default createTask;