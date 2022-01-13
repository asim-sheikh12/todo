var maintodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addButton = document.querySelector('#add');
var editButton = document.querySelector('#edit');
var delButton = document.querySelector('#delete');

{
    addButton.addEventListener('click',function(e)
    {
    if(input.value.trim())
    {
        let ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container')
        
        let todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        
        let liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');
        
        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        
        let completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="material-icons">&#xe876;</i>';

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '<i class="material-icons" id="edit" >&#xe22b;</i>';
        editButton.onclick = function()
        {
            editWorking(liTag);
        }
        let trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';


// Appending elements :-

      ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(trashButton);     

// APPEND INTO MAIN TAG

        maintodoContainer.appendChild(ulTag);

        // Complete
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
            input.value = '';

    }else if(input.value === ''){
        alert('Please fill the input field')
    }
});


function editWorking(e){
    var editValue = prompt('Edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
}
}
