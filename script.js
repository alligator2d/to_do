	let temp = [];
	
	if(localStorage.getItem("temp")) {
		console.log("ls");
		const localStorageItems = JSON.parse(localStorage.getItem("temp"))
		temp = localStorageItems;
		
		localStorageItems.forEach(i => createElem(i));
	}
	
	const newTask = document.querySelector(".input");
	
	document.querySelector("button").addEventListener("click", (e) => addTask());
	
	document.querySelector(".input").onkeydown = checkEnter;
	function checkEnter(e) {
		if(e.key === "Enter" && newTask.value !== "") {
			console.log("Finally");
			addTask();
		} else {
			console.log("empty");
		}
	}
