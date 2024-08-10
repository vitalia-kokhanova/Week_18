// Переменные + действия для начального состояния сайта
const taskListWrapper = document.querySelector(".task-list__inner-wrapper");
const noTasksTitle = document.createElement("p");
noTasksTitle.classList.add("no-tasks__title");
taskListWrapper.append(noTasksTitle);
noTasksTitle.textContent = "Нет задач";
const clearButton = document.getElementById("clearButton");
clearButton.disabled = true;
const addButton = document.getElementById("addButton");
const input = document.querySelector(".input");
const taskList = document.createElement("ul");
taskList.classList.add("task-list");
taskListWrapper.append(taskList);
taskList.style.display = "none";

// Функция для клика по кнопке "Добавить"
function clickAddButton() {
	if (input.value.trim() === "") {
		return;
	} else {
		taskList.style.display = "block";
		noTasksTitle.style.display = "none";
		const taskListItem = document.createElement("div");
		taskListItem.classList.add("task-list__item-box");
		taskList.append(taskListItem);
		const taskListItemName = document.createElement("li");
		taskListItemName.classList.add("task-list__item-name");
		const taskListItemCheckboxLabel = document.createElement("label");
		taskListItem.append(taskListItemName, taskListItemCheckboxLabel);
		const taskListItemCheckbox = document.createElement("input");
		taskListItemCheckbox.type = "checkbox";
		const taskListItemCheckboxSpan = document.createElement("span");
		taskListItemCheckboxSpan.classList.add("unchecked");
		taskListItemCheckboxLabel.append(
			taskListItemCheckbox,
			taskListItemCheckboxSpan
		);
		taskListItemName.textContent = input.value;
		input.value = "";
		clearButton.disabled = false;
	}

	saveData();
}

addButton.addEventListener("click", clickAddButton);

// Функция для клика по кнопке "Очистить список задач"
function clearTaskList() {
	taskList.style.display = "none";
	noTasksTitle.style.display = "block";
	clearButton.disabled = true;
	document
		.querySelectorAll(".task-list__item-box")
		.forEach((item) => item.remove());
	saveData();
}

clearButton.addEventListener("click", clearTaskList);

// Сохраняем состояние чекбокса (правда только визуальное)
taskList.addEventListener("click", (e) => {
	if (e.target.tagName === "SPAN") {
		e.target.classList.toggle("checked");
		const parentDiv = e.target.closest("div");
		const childListItem = parentDiv.querySelector("li");
		childListItem.classList.toggle("done-task");
		saveData();
	}
});

// Фунцкия для сохранения структуры списка в Local Storage
function saveData() {
	localStorage.setItem("tasklist", taskList.innerHTML);
}

// Функция для отображения списка после обновления/закрытия сайта
function showList() {
	const someData = localStorage.getItem("tasklist");
	if (someData) {
		taskList.style.display = "block";
		noTasksTitle.style.display = "none";
		clearButton.disabled = false;
	}
	taskList.innerHTML = localStorage.getItem("tasklist");
}

showList();
