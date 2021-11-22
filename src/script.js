const form = document.querySelector('.todo-list__form');
const input = form.querySelector('.todo-list__input');
const btn = form.querySelector('.todo-list__submit');
const content = document.querySelector('.content');
let tasks; // эта переменная вынесена та как мы ее меняем при инициализации страницы
let flag =false;

// наш конструктор для создания обьекта
function Task(description) {
    this.description = description;
    this.completed = false;
};

// ф-ция создания шаблона таска
function createTemplate(task , index){
    return `
         <li class="content__item">
              <div class="content__text">${task.description}</div>
              <input onclick="completedTask(${index})" type="checkbox" class="content__checkbox" ${task.completed ? 'checked' : ''}>
              <button onclick="deleteTask(${index})" class ="content__del-btn">Dell</button>
              <button onclick="editBtn(${index})" class ="content__edit-btn">Edit</button>
          </li>
    `
};

// ф-ция для заполнения HTML списка
function fillHtmlList() {
    content.innerHTML = "";
    if(tasks.length > 0) {
        tasks.forEach((task , index) => {
            content.innerHTML += createTemplate(task , index);
        });
    };
};

// ф-ция для обновления данных в локалСторидж
function updateLocal(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// ф-ция для изменения свойства completed
// после должны обновить и заполнить наш контент,если в массиве есть обьекты
function completedTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateLocal();
    fillHtmlList();
};

// удалени таска
function deleteTask(index) {
    tasks.splice(index,1);
    updateLocal();
    fillHtmlList();
};

// редактирование текста
// так как у нас одина кнопка а надо повесить еще слушатель ,то я принял решение сделать через флаг
function editBtn(index) {
    flag = true;
    input.value = tasks[index].description;
    btn.addEventListener('click', (e) => {
        if(flag === true) {
            tasks[index].description = input.value;
            flag = false;
            updateLocal();
            fillHtmlList();
            input.value = '';
        }
    });
}

// данная проверка служит для того чтоб ,при инициализации мы проверяли пустой ли у нас
// lolalStorege , если да то оставляем массив пустім если нет то парсим в
// переменную все что хранится в локалсторидже
!localStorage.tasks ? tasks=[] : tasks = JSON.parse(localStorage.getItem('tasks'));
fillHtmlList();
btn.addEventListener('click',function (e) {
    if(input.value !== '' && flag === false){
        tasks.push(new Task(input.value));
        updateLocal();
        fillHtmlList();
        input.value='';
    };
});