document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.input');
    const addButton = document.querySelector('.add');
    const container = document.querySelector('.container');

    addButton.addEventListener('click', function () {
        const inputValue = inputField.value;
        if (inputValue.trim() !== '') {
            addTodoItem(inputValue);
            inputField.value = '';
        }
    });

    function addTodoItem(text) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoText = document.createElement('p');
        todoText.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');

        editButton.addEventListener('click', function () {
            const updatedText = prompt('Edit your todo:', text);
            if (updatedText !== null) {
                todoText.textContent = updatedText;
            }
        });

        removeButton.addEventListener('click', function () {
            todoItem.remove();
        });

        todoItem.appendChild(todoText);
        todoItem.appendChild(editButton);
        todoItem.appendChild(removeButton);

        container.appendChild(todoItem);
    }
});
