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

// console.log(showList(list));
changeStatus("write a post", "Done");
// console.log(showList(list));
// addTask('have a walk');


const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

function showListOfFilms(arr) {
	let temp = [];
	 arr.forEach((item) => {
		temp.push(item.name)
	})
	return temp.join(',');
}
console.log(showListOfFilms(films));



const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(item => item.amount >0).reduce((acc,curr)=> acc + curr.amount,0)
};
console.log(getPositiveIncomeAmount(funds))
const getTotalIncomeAmount = (data) => {
	return data.filter(item => item.amount <0) ? data.reduce((acc, curr)=> acc + curr.amount,0) : getPositiveIncomeAmount(funds)
};
console.log(getTotalIncomeAmount(funds))
