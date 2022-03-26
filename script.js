let inputText = document.getElementById('input-task');
let addTaskButton = document.getElementById('add-task-button');
let list = document.querySelector('#task-list')
//let li = document.getElementsByClassName('delete-btn');

addTaskButton.addEventListener('click', (ev => {
    if (inputText.value !== "") {
        // ev.preventDefault();
        let newLi = document.createElement('li');
        list.appendChild(newLi);

        let newInput = document.createElement('input');
        newInput.innerHTML;
        newInput.setAttribute('type', 'checkbox');
        newLi.appendChild(newInput);

        let newSpan = document.createElement('span');
        newSpan.className = 'task';
        newSpan.innerHTML = inputText.value;
        newLi.appendChild(newSpan);

        let newButton = document.createElement('button');
        newButton.className = 'delete-btn';
        newButton.innerHTML = 'X';
        newLi.appendChild(newButton);

        inputText.value = '';

        li = document.getElementsByClassName('delete-btn');
        for (let i = 0; i < li.length; i++) {
            li[i].addEventListener('click', function () {
                li[i].parentElement.remove();
            })
        }
    }
}));