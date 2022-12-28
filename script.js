let temp = [];
const tasks = document.querySelectorAll(".tasks");
const newTask = document.querySelector(".input");

document.querySelector("button").addEventListener("click", (e) => addTask());

function checkEnter(e) {
	if(e.key === "Enter" && newTask.value !== "") {
		console.log("Finally");
		addTask();
	} else {
		console.log("empty");
	}
}

document.querySelector(".input").onkeydown = checkEnter;

function getElem(arr) {
	arr.forEach((key) => {
		temp.push(key.innerText);
	});
	return temp;
}
console.log(getElem(tasks));

function createElem (taskString) {
	const elem = document.createElement('li');
	elem.className = 'task';
	elem.style.listStyle = 'none';
	const checkBox = document.createElement('input');
	const label = document.createElement('label');
	const deleteBtn = document.createElement('button');
	label.innerText= taskString;
	checkBox.type = 'checkbox';
	deleteBtn.innerText= 'delete';
	deleteBtn.classList.add('delete')
	document.querySelector('.to_do').append(elem);
	// elem.appendChild(checkBox);
	elem.appendChild(label);
	elem.appendChild(deleteBtn);
	// document.querySelector('.delete').addEventListener('click', () => deleteTask());
	const del = document.querySelectorAll('.delete');
	del.forEach(i => i.addEventListener('click', () => deleteTask()))
}


function addTask() {
	if(newTask.value === '')return;
	temp.push(newTask.value);
	console.log(temp);
	console.log(newTask);
	createElem(newTask.value)
	newTask.value = "";
}

function deleteTask() {
	console.log('Delete task...');
	
	const div = document.querySelector('.task');
	// this.parentNode(div.lastChild);
	
	
	
}


