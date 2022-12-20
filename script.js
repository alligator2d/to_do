const list = {
	"create a task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}
// Функция changeStatus - будет менять статус задачи
// changeStatus("write a post", "Done")

// Функция showList будет выводить весь список дел в виде
//
// Todo:
// 	"create a task",
// 		"make a bed",
// 		In Progress:
// 	"write a post"
// Done:

function changeStatus (key, status) {
	list[key] = status
}
function addTask (task) {
	 list[task] = "In Progress";
}
function deleteTask (property) {
	delete list[property]
}
function showList (obj) {
	return obj
	//
}
console.log(showList(list));
// deleteTask('make a bed');
changeStatus('write a post', 'Done')
console.log(showList(list));
// addTask('have a walk');

