const list = {
	"create a task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do"
};
// Функция showList будет выводить весь список дел в виде
//
// Todo:
// 	"create a task",
// 		"make a bed",
// 		In Progress:
// 	"write a post"
// Done:

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

console.log(showList(list));
changeStatus("write a post", "Done");
console.log(showList(list));
// addTask('have a walk');

