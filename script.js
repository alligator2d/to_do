const list = {
	"create a task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do"
};
let temp=[];
const tasks = document.querySelectorAll('.tasks');
const newTask = document.querySelector('#myInput').value;

document.querySelector('button').addEventListener('click', () => {
	console.log('button!');
	temp.push(newTask);
	console.log(temp)
})

function getElem (arr) {
	arr.forEach((key)=> {
		 temp.push(key.innerText)
	}) 
	return temp
}
console.log(getElem(tasks))





function changeStatus(key, status) {
	list[key] = status;
}

function addTask(task) {
	list[task] = "In Progress";
}

function deleteTask(key) {
	delete list[key];
}

function showList(obj) {
	for (let key in obj) {
		console.log(obj[key] + ": " + key);
	}
}

// console.log(showList(list));
changeStatus("write a post", "Done");
// console.log(showList(list));
// addTask('have a walk');


