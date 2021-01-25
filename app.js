// select input
const inputText = document.getElementById('task');
// select button
const buttonAddTask = document.querySelector('.btn');

// selectionner le formulaire
const form = document.getElementById('task-form');

// select ul
const list = document.querySelector('.collection');

form.addEventListener('submit', ajouterTache);

function ajouterTache(e) {
  // bloque refresh
  e.preventDefault();

  if (inputText.value !== '') {
    // creer l'element li
    const li = document.createElement('li');

    // ajouter class `collectio-item`
    li.classList.add('collection-item');

    // ajouter le lien a dans li
    li.innerHTML = `
  <a class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
</a>
  `;

    // creer le text pour li
    const text = document.createTextNode(inputText.value);
    li.appendChild(text);

    // injecter li dans ul
    list.appendChild(li);

    // reset input
    inputText.value = '';
  } else {
    alert('faut remplir le form');
  }
}

// selectinner clear tasks button
const clearBtn = document.querySelector('.clear-tasks');

// ajouter click
clearBtn.addEventListener('click', viderListUl);

function viderListUl() {
  list.innerHTML = '';
}
