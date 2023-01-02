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
	
	
	// list.forEach(i => i.addEventListener("click", (e) => deleteTask(e)));
	
	list.forEach(i => i.addEventListener("click", (e) => {
		
		deleteTask(e);
		// localStorage.removeItem('temp', i);
		console.log('working')
		
	}));
}

function deleteTask(e) {
	console.log("Delete task...");
	const btn = e.target.closest(".delete");
	if(!btn) {
		return;
	}
	console.log(temp);
	
	btn.parentElement.remove();
	// localStorage.removeItem('temp', btn);
	// temp.filter(i => )
	
	localStorage.removeItem('temp', btn);
	
	// localStorage.setItem('temp', JSON.stringify(temp));
}

function addTask() {
	if(newTask.value === "") return;
	temp.push(newTask.value);
	console.log(temp);
	console.log(newTask);
	
	// let task = newTask.innerHTML;
	// localStorage.setItem('tasks', task);
	
	localStorage.setItem("temp", JSON.stringify(temp));
	createElem(newTask.value);
	newTask.value = "";
}