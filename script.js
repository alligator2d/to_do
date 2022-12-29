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

// function getElem(arr) {
// 	arr.forEach((key) => {
// 		temp.push(key.innerText);
// 	});
// 	return temp;
// }
//
// console.log(getElem(tasks));


function createElem(taskString) {
	const elem = document.createElement("li");
	const checkBox = document.createElement("input");
	const label = document.createElement("label");
	const deleteBtn = document.createElement("button");
	
	elem.className = "task";
	elem.style.listStyle = "none";
	label.innerText = taskString;
	checkBox.type = "checkbox";
	deleteBtn.innerText = "delete";
	deleteBtn.classList.add("delete");
	
	document.querySelector(".to_do").append(elem);
	// elem.appendChild(checkBox);
	elem.appendChild(label);
	elem.appendChild(deleteBtn);
	const list = document.querySelectorAll("li");
	list.forEach(i => i.addEventListener("click", (e) => deleteTask(e)));
}

function deleteTask(e) {
	console.log("Delete task...");
	const btn = e.target.closest(".delete");
	if(!btn) {
		return;
	}
	temp.pop();
	console.log(temp);
	
	btn.parentElement.remove();
	localStorage.removeItem('temp');
}

function addTask() {
	if(newTask.value === "") return;
	temp.push(newTask.value);
	console.log(temp);
	console.log(newTask);
	
	localStorage.setItem("temp", JSON.stringify(temp));
	createElem(newTask.value);
	newTask.value = "";
}

if(localStorage.getItem("temp")) {
	console.log("ls");
	createElem(JSON.parse(localStorage.getItem("temp")));
}

console.log(localStorage.getItem("temp"));



