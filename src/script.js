const form = document.querySelector('.todo-list__form');
const input = form.querySelector('.todo-list__input');
const btn = form.querySelector('.todo-list__submit');
const content = document.querySelector('.content');
let tasks;
let flag = false;

function Task(description) {
	this.description = description;
	this.completed = false;
};

function createTemplate(task, index) {
	return `
         <li class="content__item">
              <div class="content__text">${task.description}</div>
              <div class="content__input-wrapper">
	              <input onclick="completedTask(${index})" type="checkbox" class="content__checkbox" ${task.completed ? 'checked' : ''}>
	              <button onclick="deleteTask(${index})" class ="content__del-btn btn">Dell</button>
	              <button onclick="editBtn(${index})" class ="content__edit-btn btn">Edit</button>
              </div>
              </div>
          </li>
    `
};

function fillHtmlList() {
	content.innerHTML = "";
	if (tasks.length > 0) {
		tasks.forEach((task, index) => {
			content.innerHTML += createTemplate(task, index);
		});
	}
	;
};

function updateLocal() {
	localStorage.setItem('tasks', JSON.stringify(tasks));
};


function completedTask(index) {
	tasks[index].completed = !tasks[index].completed;
	updateLocal();
	fillHtmlList();
};

function deleteTask(index) {
	tasks.splice(index, 1);
	updateLocal();
	fillHtmlList();
};

function editBtn(index) {
	flag = true;
	input.value = tasks[index].description;
	btn.addEventListener('click', (e) => {
		if (flag === true) {
			tasks[index].description = input.value;
			flag = false;
			updateLocal();
			fillHtmlList();
			input.value = '';
		}
	});
}


!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
fillHtmlList();
btn.addEventListener('click', function (e) {
	if (input.value !== '' && flag === false) {
		tasks.push(new Task(input.value));
		updateLocal();
		fillHtmlList();
		input.value = '';
	}
	;
});