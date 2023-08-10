const $ = (selector) => document.getElementById(selector);

let shoppingList = [];

const addItem = () => {
    let newItem = $('newItemInput').value.toUpperCase();
    shoppingList.push(newItem);
    createList(shoppingList);
    $('listForm').reset();
}

const createList = (lista) => {
    $('list').innerHTML = '';
    lista.forEach((item, index)=> {
        let liContent = document.createTextNode(`${item}`);
        let liItem = document.createElement('li');
        let updateBtn = document.createElement('button');
        updateBtn.classList.add('btn');
        updateBtn.innerText = '✍🏻';
        updateBtn.addEventListener('click', () => updateItem(index));
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.innerText = '⛔';
        deleteBtn.addEventListener('click', () => deleteItem(index));
        liItem.classList.add('list-item');
        liItem.appendChild(liContent);
        liItem.appendChild(updateBtn);
        liItem.appendChild(deleteBtn);
        $('list').appendChild(liItem);
    });
}

const deleteItem = (itemIndex) => {
    shoppingList.splice(itemIndex, 1);
    // shoppingList = shoppingList.filter((listItem) => listItem !== item);
    createList(shoppingList);
}

const updateItem = (itemIndex) => {
    let newValor = prompt('Ingrese el cambio:').toUpperCase();
    shoppingList[itemIndex] = newValor;
    createList(shoppingList);
}

$('addButton').addEventListener('click', addItem);

const changeMode = () => {
    if ($('body').getAttribute('data-theme') === 'light') {
        $('body').setAttribute('data-theme', 'dark');
        $('modeBtn').innerText = '✨';
    } else {
        $('body').setAttribute('data-theme', 'light');
        $('modeBtn').innerText = '🌑';
    }
}

$('modeBtn').addEventListener('click', changeMode);