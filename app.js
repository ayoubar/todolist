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
    // vous avez trouvé la solution
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
  localStorage.removeItem('tasks');
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

function LoadTasksFromLocalStorage() {
  let tasks = localStorage.getItem('tasks');
  if (tasks !== null) {
    // verifier si la clé task est existe
    tasks = JSON.parse(localStorage.getItem('tasks')); // ["ayoub","mehdi","salman","test"]
    for (let t of tasks) {
      const element = document.createElement('li');

      // ajouter class `collection-item`
      element.classList.add('collection-item');

      // ajouter le lien a dans li (method 1)
      element.innerHTML = `
        <a class="delete-item secondary-content">
          <i class="fa fa-remove"></i>
        </a>
    `;
      // creer le text (contenu) pour li (mehtod1)
      const text = document.createTextNode(t);
      element.appendChild(text);

      list.appendChild(element);
    }
    //   const element = document.createElement('li');

    //   // ajouter class `collection-item`
    //   element.classList.add('collection-item');

    //   // ajouter le lien a dans li (method 1)
    //   element.innerHTML = `
    //     <a class="delete-item secondary-content">
    //       <i class="fa fa-remove"></i>
    //     </a>
    // `;
    //  // creer le text (contenu) pour li (mehtod1)
    //  const text = document.createTextNode(inputText.value);
    //  element.appendChild(text);
  }
}

LoadTasksFromLocalStorage();

// EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card content');
});

// event Delegation
const main = document.getElementById('main');

main.addEventListener('click', function (e) {
  if (e.target.className === 'card-title') {
    alert('card title');
  } else if (e.target.className === 'card-content') {
    alert('card Content');
  }
});

// supprimer les elements
list.addEventListener('click', supprimerLi);

function supprimerLi(e) {
  // debugger;
  let indice = undefined;
  if (e.target.className === 'fa fa-remove') {
    console.log(e.target.parentElement.parentElement);
    // suppression au niveau de LocalStorage
    // ? recuperze le tableaud deouis localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    // aficher le contenu de li
    console.log(e.target.parentElement.parentElement.textContent);
    for (let t in tasks) {
      if (
        e.target.parentElement.parentElement.textContent.trim() === tasks[t]
      ) {
        indice = t; // recuperez l'incide d'elment supprimé
        // supprimer l'element depuis la tableau tasks
        tasks.splice(indice, 1);
        console.log(tasks);

        // reinitalizer la clé tasks dans localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // suppression UI
        e.target.parentElement.parentElement.remove();
      }
    }
  }
}
