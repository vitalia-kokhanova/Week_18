// Переменные + действия для начального состояния сайта
const noTasksTitle = document.createElement("p");
const taskList = document.createElement("ul");

const UI_ELEMENTS = {
	TASK_LIST_WRAPPER: document.querySelector(".task-list__inner-wrapper"),
	CLEAR_BUTTON: document.getElementById("clearButton"),
	ADD_BUTTON: document.getElementById("addButton"),
	INPUT: document.querySelector(".input"),
	NO_TASKS_TITLE: noTasksTitle,
	TASK_LIST: taskList,
};

UI_ELEMENTS.NO_TASKS_TITLE.classList.add("no-tasks__title");
UI_ELEMENTS.NO_TASKS_TITLE.textContent = "Нет задач";
UI_ELEMENTS.TASK_LIST.classList.add("task-list");

UI_ELEMENTS.TASK_LIST_WRAPPER.append(UI_ELEMENTS.NO_TASKS_TITLE);
UI_ELEMENTS.TASK_LIST_WRAPPER.append(UI_ELEMENTS.TASK_LIST);

// Пустой массив, куда будут падать задачи и их статус выполнения
let tasksArray = [];

// Функции, которые задают исходное состояние страницы, когда нет никаких задач
showNoTasksTitle();
disableClearAllButton();

// Проверяем, есть ли в локальном хранилище данные, если есть, то отрисовываем список задач
if (localStorage.getItem("tasksArray")) {
	hideNoTasksTitle();
	enableClearAllButton();
	tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
	renderTasks(tasksArray);
}

// Функция для клика по кнопке "Добавить"
function addTask() {
	if (!UI_ELEMENTS.INPUT.value.trim()) return;
	const task = {
		name: UI_ELEMENTS.INPUT.value,
		isDone: false,
	};
	tasksArray.push(task);
	saveData();
	hideNoTasksTitle();
	renderTasks(tasksArray);
	clearInput();
	enableClearAllButton();
}

UI_ELEMENTS.ADD_BUTTON.addEventListener("click", addTask);

// Функция для клика по кнопке "Очистить список задач"
function clearTaskList() {
	showNoTasksTitle();
	disableClearAllButton();
	document
		.querySelectorAll(".task-list__item-box")
		.forEach((item) => item.remove());

	clearArrayAndLocalStorage();
}

UI_ELEMENTS.CLEAR_BUTTON.addEventListener("click", clearTaskList);

// Слушатель события клика по кастомизированному чекбоксу
// Здесь мы меняем и визуальный вид галочки и меняем статус выполнения задачи внутри массива объектов tasksArray

UI_ELEMENTS.TASK_LIST.addEventListener("click", (e) => {
	// Здесь у нас тег <span>, потому что я кастомизировала чекбокс, и клик происходит по этому тегу. А тег <input> сделан так, что его не видно, по нему нельзя нажать.
	// Вообще HTML-структура одной задачи выглядит так:
	/* <div class="task-list__item-box">
			<li class="task-list__item-name"></li>
			<label class="label">
				<input type="checkbox">
				<span class="unchecked"></span>
			</label>
	</div>
	*/

	if (e.target.tagName === "SPAN") {
		e.target.classList.toggle("checked");
		const parentDiv = e.target.closest("div");
		const childListItem = parentDiv.querySelector("li");
		childListItem.classList.toggle("done-task");

		if (childListItem.classList.contains("done-task")) {
			tasksArray.find(
				(task) => task.name === childListItem.textContent
			).isDone = true;
		} else {
			tasksArray.find(
				(task) => task.name === childListItem.textContent
			).isDone = false;
		}
		saveData();
	}
});

// Функция для рендеринга списка задач
function renderTasks(array) {
	UI_ELEMENTS.TASK_LIST.innerHTML = "";
	array.forEach((task) => {
		const taskListItem = document.createElement("div");
		taskListItem.classList.add("task-list__item-box");
		UI_ELEMENTS.TASK_LIST.append(taskListItem);
		const taskListItemName = document.createElement("li");
		taskListItemName.classList.add("task-list__item-name");
		taskListItemName.textContent = task.name;
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
		if (task.isDone === true) {
			taskListItemCheckboxSpan.classList.add("checked");
			taskListItemName.classList.add("done-task");
		}
	});
}

// Функция, чтобы спрятать надпись "Нет задач" и показать сам список
function hideNoTasksTitle() {
	UI_ELEMENTS.TASK_LIST.style.display = "block";
	UI_ELEMENTS.NO_TASKS_TITLE.style.display = "none";
}

// Функция, чтобы скрыть список задач и показать надпись "Нет задач"
function showNoTasksTitle() {
	UI_ELEMENTS.TASK_LIST.style.display = "none";
	UI_ELEMENTS.NO_TASKS_TITLE.style.display = "block";
}

// Функция для очистки инпута
function clearInput() {
	UI_ELEMENTS.INPUT.value = "";
}

// Функция для включения кнопки "Очистить список задач"
function enableClearAllButton() {
	UI_ELEMENTS.CLEAR_BUTTON.disabled = false;
}

// Функция для полного отключения кнопки "Очистить список задач"
function disableClearAllButton() {
	UI_ELEMENTS.CLEAR_BUTTON.disabled = true;
}

// Функция для очистки самого массива от всех задач и локального хранилища от такого объекта
function clearArrayAndLocalStorage() {
	tasksArray.length = 0;
	localStorage.removeItem("tasksArray");
}

// Фунцкия для сохранения структуры списка в Local Storage
function saveData() {
	localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
}
