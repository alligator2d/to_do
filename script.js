const list = {
	"create a task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do"
};

let temp = [];
const tasks = document.querySelectorAll(".tasks");
const newTask = document.querySelector(".input");
const out = document.querySelector(".out");


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


function changeStatus(key, status) {
	list[key] = status;
}

// function addTask(task) {
// 	list[task] = "In Progress";
// }

function addTask() {
	temp.push(newTask.value);
	console.log(temp);
	console.log(newTask);
	out.innerHTML += newTask.value + " ";
	newTask.value = "";
}

function deleteTask(key) {
	delete list[key];
}

function showList(obj) {
	for (let key in obj) {
		console.log(obj[key] + ": " + key);
	}
}

changeStatus("write a post", "Done");
// console.log(showList(list));
// addTask('have a walk');


