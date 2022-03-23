
/*
|--------------------------------------------------------------------------
| Selección de secciones en menú
|--------------------------------------------------------------------------
*/

function mostrar(req) {

	let init = document.getElementById('init');
	let todo = document.getElementById('todo');
	let contact = document.getElementById('contact');

	init.style.display = "none";
	todo.style.display = "none";
	contact.style.display = "none";

	document.getElementById('linkinit').classList.remove('active');
	document.getElementById('linktodo').classList.remove('active');
	document.getElementById('linkcontact').classList.remove('active');

	switch(req) {
		case 'init':
			init.style.display = "block";
			document.getElementById('linkinit').classList.add('active');
		break;

		case 'todo':
			todo.style.display = "block";
			document.getElementById('linktodo').classList.add('active');
		break;

		case 'contact':
			contact.style.display = "block";
			document.getElementById('linkcontact').classList.add('active');
		break;

		default:
			init.style.display = "block";
			document.getElementById('linkinit').classList.add('active');
		break;
	}
}


/*
|--------------------------------------------------------------------------
| Creación de Lista
|--------------------------------------------------------------------------
*/

function datalist() {

	var container = document.getElementById('list_content');

	var ulist = document.createElement('ul');

	ulist.id = 'lista';

	container.appendChild(ulist);
}


/*
|--------------------------------------------------------------------------
| Inicialización de valores
|--------------------------------------------------------------------------
*/

if (!localStorage.getItem('todolist')) {
	let todo = {
		'tarea': []
	}

	localStorage.setItem('todolist', JSON.stringify(todo));
}

function inicio() {
	datalist();
	fill();
}


/*
|--------------------------------------------------------------------------
| Llenando Lista
|--------------------------------------------------------------------------
*/

function fill() {
	let ulist = document.getElementById("lista");

	ulist.innerHTML = '';

	let data = JSON.parse(localStorage.getItem('todolist'));

	data.tarea.forEach(function(val, index) {
		var item = document.createElement('li');

		item.classList.add('item');

		var content = document.createTextNode(val);

		item.appendChild(content);

		ulist.appendChild(item);
	});
}


/*
|--------------------------------------------------------------------------
| Ingresando datos
|--------------------------------------------------------------------------
*/

function guardar() {

	let data = JSON.parse(localStorage.getItem('todolist'));

	var tarea = document.formTodo.tarea.value;

	if (tarea != '') {
		data.tarea.push(tarea);
		localStorage.setItem('todolist', JSON.stringify(data));
		fill();
	}else {
		alert("Debes llenar el campo de tareas antes de guardar");
	}

	document.formTodo.tarea.value = "";
}


/*
|--------------------------------------------------------------------------
| Finalizando tareas
|--------------------------------------------------------------------------
*/

