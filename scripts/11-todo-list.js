let myArray = JSON.parse(localStorage.getItem('myArray')) || [];
function add() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-date');
    const dueDate = dateInputElement.value;
    if (name != "") {
        myArray.push({
            //name: name, 
            //dueDate: dueDate
            name,
            dueDate
        });
        name.value = "";
        localStorage.setItem('myArray', JSON.stringify(myArray))
        renderTodoList();
    } else {
        return
    }
}

function renderTodoList() {
    let todoHTML = "";
        for (let i = 0; i < myArray.length; i++) {
            const todoObject = myArray[i];
            //const name = todoObject.name;
            //const dueDate = todoObject.dueDate;
            //const { name } = todoObject;
            //const { dueDate } = todoObject;
            const { name, dueDate } = todoObject;
            const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                myArray.splice(${i}, 1);
                renderTodoList();
                " class="delete-todo-button">Delete</button>
            `;
            todoHTML += html;
        }

        document.querySelector('.container').innerHTML = todoHTML;
}


function keyDown(event) {
    if (event === 'Enter') {
        add();
    }
}

/*function clearList () {
    myArray = [];
    todoHTML = "";
    document.querySelector('.container').innerHTML = todoHTML;
    localStorage.removeItem('myArray');
}*/