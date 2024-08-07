let usertaks  = [];
let result    = document.getElementById('result-paragraph');


function orderRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const clearTaskButton   = document.getElementById('clear-task');
const addTaskButton = document.getElementById('add-task');
const shuffleTaskButton  = document.getElementById('shuffle-task');
const taskItem      = document.getElementById('inputTask');
let   userList      = document.getElementById('list-user');

function clearAllTask() {
    if (!userList.innerHTML){
        alert ('Tenemos que hablar');
    } else{
        userList.innerHTML = '';  
        taskItem.value = ''; 
        usertaks = [];
    }  
}

function addTask(task) { 
    if (task) { 
        usertaks.push(task);
        taskItem.value = ''; 
        printUserList(usertaks); 
    }
}

function setRandomTask(task) { 
    if (task) { 
        usertaks.push(task);
        taskItem.value = ''; 
        printUserList(mixArray(usertaks)); 
    }
}
function mixArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));        
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printUserList(arr){

    userList.innerHTML = '';

    arr.forEach(taskItem => {
        const listItem = document.createElement('p');
        listItem.textContent = taskItem;
        userList.appendChild(listItem);
    });
}

clearTaskButton.addEventListener('click', () => {
    clearAllTask();
});

addTaskButton.addEventListener('click', () => {
    addTask(taskItem.value);
});

taskItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addTask(taskItem.value);
    }
});

shuffleTaskButton.addEventListener('keydown', () => {
    printUserList(mixArray(usertaks));
});

printUserList(usertaks);


