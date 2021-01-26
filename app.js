// select input
const inputText = document.getElementById('task');

// select button
const buttonAddTask = document.querySelector('.btn');

// selectionner le formulaire
const form = document.getElementById('task-form');

// select ul
const list = document.querySelector('.collection');

//add event
form.addEventListener('submit', ajouterTache);

// testet if la clé tasks exist ou pas
if (localStorage.getItem('tasks') === null) {
  // crée la clé
  localStorage.setItem('tasks', JSON.stringify([]));
}

function ajouterTache(e) {
  // bloque refresh
  e.preventDefault();

  // tester si la valuer de l'input est vide
  if (inputText.value !== '') {
    // // ajouter la valeur de l'input dans localStorage
    // localStorage.setItem('task', inputText.value);

    // recuperez la valuer de la clé tasks qui existe deja dans localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')); // ["hello", "morocco"]

    // ajouter la valuer de l'input dans le tableau tasks
    tasks.push(inputText.value); // ['hello', 'morocco', "2020"]
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // creer l'element li
    const element = document.createElement('li');

    // ajouter class `collection-item`
    element.classList.add('collection-item');

    // ajouter le lien a dans li (method 1)
    element.innerHTML = `
      <a class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
      </a>
  `;
    /*
        mehtod 2
        ? creer a 
        const a = document.createElement('a')
        a.classList.add('delete-item')
        a.classList.add('secondary-content')

        ? creer i
        const icon = document.createElement('i')
        icon.className = "fa fa-remove"

        ? injecter i dans a
        a.appendChild(icon)

        ? inject a dans element
        element.appendChild(a)


  */

    // creer le text (contenu) pour li (mehtod1)
    const text = document.createTextNode(inputText.value);
    element.appendChild(text);

    /*
      method 2
      todo    element.appendChild(document.createTextNode(inputText.value));
    */

    // injecter li dans ul
    list.appendChild(element);

    // reset input
    inputText.value = '';
  } else {
    alert('faut remplir le form');
  }
}

// selectionner clear tasks button
const clearBtn = document.querySelector('.clear-tasks');

// ajouter click
clearBtn.addEventListener('click', viderListUl);

function viderListUl() {
  list.innerHTML = '';
}

// format clé  - valuer
localStorage.setItem('nom', 'Anass');

const numbers = [1, 2, 3]; // "[1,2,3]"
localStorage.setItem('tableau', JSON.stringify(numbers)); //"[1,2,3]"

const tableauFromStorage = JSON.parse(localStorage.getItem('tableau'));

console.log(tableauFromStorage);

/*
  1 . creer la clé tasks , sa valuer est un tableau vide (dans le scope global)
  2 . 
*/
