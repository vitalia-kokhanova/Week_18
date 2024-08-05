//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
	//Ваш код
	window.localStorage.setItem("games", "11");
}

makeOne();

//добавьте слушатель события

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

/*
function makeTwo() {
	//Ваш код
	console.log('Строка "7,6,5" была записана в Local Storage.');
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeTwo() {
	//Ваш код
	localStorage.setItem("numbers", "7,6,5");
}

makeTwo();

//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

/*
function makeThree() {
	//Ваш код
	console.log('Строка "name=John, age=25" была записана в Local Storage.');
}
*/
//добавьте слушатель события

// Моё решение из тренажера:
function makeThree() {
	//Ваш код
	localStorage.setItem("users", "name=John,age=25");
}
makeThree();

//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

/*
function makeFour() {
	//Ваш код
	console.log("Логическое значение true было записано в Local Storage.");
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeFour() {
	//Ваш код
	localStorage.setItem("bool", "true");
}

makeFour();

//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.
/*
function makeFive() {
	//Ваш код
	console.log("Значение null было записано в Local Storage.");
}

//добавьте слушатель события
*/

// Моё решение из тренажера:
function makeFive() {
	//Ваш код
	const key = "item";
	localStorage.setItem(key, "null");
}

makeFive();

//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

/*
function makeSix() {
	//Ваш код
	console.log("Объект obj был записан в Local Storage.");
}
*/
//добавьте слушатель события

// Моё решение из тренажера:
function makeSix() {
	//Ваш код
	const obj = { name: "Алиса", age: 30 };
	const objJSON = JSON.stringify(obj);
	localStorage.setItem("objectSix", objJSON);
}

makeSix();

//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
/*
function makeSeven() {
	//Ваш код
	console.log("Объект obj был записан в Local Storage.");
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeSeven() {
	//ваш код
	const obj2 = {
		city: "Лондон",
		country: "Великобритания",
		population: 8900000,
		language: "английский",
	};
	const obj2JSON = JSON.stringify(obj2);
	localStorage.setItem("objectSeven", obj2JSON);
}
makeSeven();

//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()
/*
function makeEight() {
	//Ваш код
	console.log("Объект obj был записан в Local Storage.");
}
*/
//добавьте слушатель события

// Моё решение из тренажера:
function makeEight() {
	//Ваш код
	const obj3 = {
		fruit: "Яблоко",
		color: "красное",
		quantity: 10,
		price: 199,
	};
	localStorage.setItem("objectEight", JSON.stringify(obj3));
}

makeEight();

//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
/*
function makeNine() {
	//Ваш код
	console.log("Массив arr был записан в Local Storage.");
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeNine() {
	//Ваш код
	const arr = [1, 2, 3, 4, 5];
	const arrJSON = JSON.stringify(arr);
	localStorage.setItem("arrayNine", arrJSON);
}
makeNine();

//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
/*
function makeTen() {
	//Ваш код
	console.log("Массив arr был записан в Local Storage.");
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeTen() {
	//Ваш код
	const arr2 = ["яблоко", "банан", "апельсин"];
	localStorage.setItem("arrayTen", JSON.stringify(arr2));
}

makeTen();

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()
/*
function makeEleven() {
	//Ваш код
	console.log("Массив arr был записан в Local Storage.");
}
*/

//добавьте слушатель события

// Моё решение из тренажера:
function makeEleven() {
	//Ваш код
	const arr3 = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 },
	];
	const arr3JSON = JSON.stringify(arr3);
	localStorage.setItem("arrayEleven", arr3JSON);
}

makeEleven();

//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()
/*
function showEleven() {
	//Ваш код
	let output = "";
	for (let i = 0; i < arrayEleven.length; i++) {
		const object = arrayEleven[i];
		for (let key in object) {
			output += `${key} ${object[key]}`;
		}
	}
	document.querySelector(".practicum12").textContent = output;
}
*/
//добавьте слушатель события

// Задание №12 из тренажера:
/*
Вам нужно будет создать две функции: addLocalStorageEleven и renderLocalStorage.
Функция addLocalStorageEleven должна записать в localStorage arr = [
{ name: "Алиса", age: 30 },
{ name: "Филин", age: 35 },
{ name: "Кот", age: 40 }
] под ключом arrTwelve.
После чего создаем вторую функциию renderLocalStorage.
Она должна находить span c классом practicum12, который чуть ниже задания, и в него с помощью метода TextContent должно записываться имя пользователя из localStorage name первого пользователя из массива .
Вызываем функцию addLocalStorageEleven renderLocalStorage и нажимаем кнопку Проверить.

Подсказки :
-не перепутайте последовательность вызова функций, сначала записываем в localStorage, потом забираем.
-для того, чтобы записать данные, оборачиваем в JSON.stringify, для того, чтобы с полученными данными работать - JSON.parse.

<span class="practicum12">Тут должен быть ваш текст</span>
*/

// Моё решение из тренажера:
const arr4 = [
	{ name: "Алиса", age: 30 },
	{ name: "Филин", age: 35 },
	{ name: "Кот", age: 40 },
];
const arr4JSON = JSON.stringify(arr4);
const arr4ARRAY = JSON.parse(arr4JSON);
const result12 = document.querySelector(".practicum12");

function addLocalStorageEleven() {
	//ваш код
	localStorage.setItem("arrTwelve", arr4JSON);
}

function renderLocalStorage() {
	//ваш код
	result12.textContent = arr4ARRAY[0].name;
}

addLocalStorageEleven();
renderLocalStorage();

// Решение авторов:
function addLocalStorageEleven() {
	const arr = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 },
	];
	localStorage.setItem("arrTwelve", JSON.stringify(arr));
}
function renderLocalStorage() {
	const arr = JSON.parse(localStorage.getItem("arrTwelve"));
	const span = document.querySelector(".practicum12");
	span.textContent = arr[0].name;
}
addLocalStorageEleven();
renderLocalStorage();

// Ещё одно моё решение:
function addLocalStorageEleven() {
	//ваш код
	const arr4 = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 },
	];
	const arr4JSON = JSON.stringify(arr4);
	localStorage.setItem("arrTwelve", arr4JSON);
}

function renderLocalStorage() {
	//ваш код
	const arr4ARRAY = JSON.parse(localStorage.getItem("arrTwelve"));
	const result12 = document.querySelector(".practicum12");
	result12.textContent = arr4ARRAY[0].name;
}

addLocalStorageEleven();
renderLocalStorage();

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

/*
const showTen = () => {
	const arrayTenString = LocalStorage.getItem("arrayTen");
	if (arrayTenString) {
		//Ваш код
		const resultElement = document.querySelector(".practicum13");
		for (const key in arrayTen) {
			const value = arrayTen[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
	} else {
		console.log("Массив arrayTen не найден в Local Storage.");
	}
};
*/
//добавьте слушатель события

// Задание №13 из тренажера:
/* 
Функция addLocalStorage записывает массив в localStorage под ключом arrLocal.
Ваша задача создать функцию showTen, которая получит из Local Storage сохраннённый массив.
Найти элемент с классом practicum13 и записать в него все элементы из массива через запятую.
Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для преобразования массива в нужную строку используйте метод join().

<div class="pr"><span class="practicum13"></span></div>
*/

// Моё решение из тренажера:
function addLocalStorage() {
	localStorage.setItem(
		"arrLocal",
		JSON.stringify(["яблоко", "банан", "апельсин"])
	);
}

function showTen() {
	// ваш код
	const array = JSON.parse(localStorage.getItem("arrLocal"));
	document.querySelector(".practicum13").textContent = array.join(", ");
}
addLocalStorage();
showTen();

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.
/*
const showNine = () => {
	const arrayNineString = LocalStorage.getItem("arrayNine");
	if (arrayNineString) {
		//Ваш код
	} else {
		console.log("Массив arrayNine не найден в Local Storage.");
	}
};

document.querySelector(".b-14").addEventListener("click", showNine);
*/

// Моё решение из тренажера:
function addLocalStorage() {
	localStorage.setItem("arrLocal", JSON.stringify([1, 2, 3, 4, 5]));
}
function calcArr() {
	//ваш код
	const array = JSON.parse(localStorage.getItem("arrLocal"));
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	document.querySelector(".practicum14").textContent = sum;
}
addLocalStorage();
calcArr();

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.
/*
const showEight = () => {
	//Ваш код
};

document.querySelector(".b-15").addEventListener("click", showEight);
*/

// Задание №15 из тренажера:
/*
У вас есть функция addLocalStorage, которая записывает обьект в Local Storage под ключом objLoсal
Вам нужно получить этот обьект и вывести строку в тег span с классом practicum15 а таком формате:
name:Cat; age:20; work:ItGirls
Не забываем про методы parse и stringify, для преобразования обьекта в нужную строчку используем цикл for in.

<div class="pr"><span class="practicum15"></span></div>
name: Cat; age: 20; work: ItGirls;
 */

// Моё решение из тренажера:
function addLocalStorageSet() {
	localStorage.setItem(
		"objLoсal",
		JSON.stringify({ name: "Cat", age: 20, work: "ItGirls" })
	);
}

function renderUser() {
	//ваш код
	const object = JSON.parse(localStorage.getItem("objLoсal"));
	let string = "";
	for (let item in object) {
		string += `${item}: ${object[item]}; `;
	}
	document.querySelector(".practicum15").textContent = string;
}

addLocalStorageSet();
renderUser();

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.
/*
const showSeven = () => {
	//Ваш код
};

document.querySelector(".b-16").addEventListener("click", showSeven);
*/

// Задание №16 из тренажера:

/*
У вас есть функция addLocalStorageSixteen, которая запиcывает в localStorage обьект под ключом objLocal.
В функции renderString вам нужно в переменной obj получить обьект из localStorage.
Найти тег span по классу practicum16 и поместить туда такую строку 'Город Лондон имеет население 8900000 человек'
Лондон и 8900000 должны подставляться из обьекта с Local Storage как переменные в строку.
Подсказка: Для склеивания строки лучше всего использоваьть шаблонные строки.

<div class="pr"><span class="practicum16"></span></div>
Тут появится ваш текст после нажатия кнопки
*/

// Моё решение из тренажера:
function addLocalStorageSixteen() {
	localStorage.setItem(
		"objLocal",
		JSON.stringify({
			city: "Лондон",
			country: "Великобритания",
			population: 8900000,
			language: "английский",
		})
	);
}

function renderString() {
	const obj = JSON.parse(localStorage.getItem("objLocal")); /// получение данных из Local Storage
	//ваш код
	document.querySelector(
		".practicum16"
	).textContent = `Город ${obj.city} имеет население ${obj.population} человек`;
}

addLocalStorageSixteen();
renderString();

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.
/*
const showSix = () => {
	//Ваш код
};

document.querySelector(".b-17").addEventListener("click", showSix);
*/

// Задание №17 из тренажера:
/*
У вас есть две функции: createUser, в которой вы должны создать обьект любого пользователя и в нем обязательно должны быть поля: nameUser,ageUser, workUser, emailUser, phoneUser.
Этот объект вы должны записать в localStorage под ключом objLocalUser.
Поля не должны оставаться пустыми, их нужно заполнить рандомной информацией.
И функция renderCardUser, в ней вы должны получить обьект этого пользователя из localStorage.

После чего найти div с классом practicum17 и положить туда с помощью метода innerHTML шаблонную строку.
Шаблонная строка должна содержать в себе верстку, где userName является заголовком первого порядка, а остальные данные должны быть обернуты в тег <p></p>.

Результат, как должно получиться:
Cat
Возраст:30 лет
Место работы:itGirls
Почта:catEmail@gamil.com
Номер телефона:+7946138520

<div class="practicum17"></div>
*/

// Моё решение из тренажера:
function createUser() {
	const object = {
		nameUser: "Cat",
		ageUser: "30 лет",
		workUser: "ITGirls",
		emailUser: "catEmail@gmail.com",
		phoneUser: "+7946138520",
	};

	localStorage.setItem("objLocalUser", JSON.stringify(object));
}

function renderCardUser() {
	const returnedObject = JSON.parse(localStorage.getItem("objLocalUser"));
	document.querySelector(".practicum17").innerHTML = `
	<h1>${returnedObject.nameUser}</h1>
	<p>Возраст: ${returnedObject.ageUser}</p>
	<p>Место работы: ${returnedObject.workUser}</p>
	<p>Почта: ${returnedObject.emailUser}</p>
	<p>Номер телефона: ${returnedObject.phoneUser}</p>
	`;
}
createUser();
renderCardUser();

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.
/*
const clearLocalStorage = () => {
	//Ваш код
	console.log("Local Storage очищен.");
};
*/
//добавьте слушатель события

// Моё решение из тренажера:
function clearLocalStorage() {
	localStorage.clear();
}

clearLocalStorage();

//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?
/*
let numbers = [];

const addToNumbers = () => {
	const numberInput = document.getElementById("numberInput");
	const number = parseInt(numberInput.value);

	//Ваш код
};

document.querySelector(".b-19").addEventListener("click", addToNumbers);
*/

// Задание №19 из тренажера:
/*
Написана функция addToNumbers, которая находит инпут на странице и забирает с него то, что ввел пользователь.
Эти данные она округляет до целого числа с помощью parseInt и записывает в переменную number.
Если данные не были введены, то функция не сработает, для этого там стоит одно из условий.
Для вас написано условие, которое проверяет, есть ли в localStorage массив с числами под ключом task19 или нет.
В переменной arr записывается результат поиска этого массива.
Ваша задача написать условие: если этого массива нет, то создать его, положить туда число, что ввел пользователь и записать в localStorage под ключом task19.
Если этот массив там есть, то нужно обратиться к нему и записать туда новое число, и этот измененный массив с новым числом записать в localStorage.
После того как напишете код, введите в input число и нажмите кнопку проверить.

<div class="practicum19">
	<input type="number" id="numberInput" placeholder="Введите число" />
</div>
*/

// Моё решение из тренажера:
function addToNumbers() {
	const input = document.getElementById("numberInput");
	const number = parseInt(input.value);

	if (number) {
		const arr = JSON.parse(localStorage.getItem("task19"));
		if (arr) {
			arr.push(number);
			localStorage.setItem("task19", JSON.stringify(arr));
		} else {
			const arr = [];
			arr.push(number);
			localStorage.setItem("task19", JSON.stringify(arr));
		}
		input.value = "";
	}
}

addToNumbers();

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.
/*
const removeLastElement = () => {
	if (numbers.length > 0) {
		//Ваш код
		console.log(
			"Последний элемент удален из массива numbers и сохранен в Local Storage."
		);
	} else {
		console.log("Массив numbers пуст.");
	}
};
*/
//добавьте слушатель события

// Задание №20 из тренажера:
/*
Создайте функцию removeLastElement, которая получает массив из localStorage под ключом task19 и записывает его в переменную
После получения массива функция должна удалять последний элемент массива и возвращать обновленный массив в localStorage под тем же ключом
Важно предусмотреть условия, если в массиве больше нет элементов и он пуст, функция не должна сработать, для удаления используйте метод pop.
*/

// Моё решение из тренажера:
function removeLastElement() {
	const arr = JSON.parse(localStorage.getItem("task19")); //получаем данные из localStorage
	if (!arr) {
		//пишем условие, которое проверяет есть ли в массиве элементы.
		console.log("массив пуст");
	} else {
		///удаляем последний элемент из массива.
		arr.pop();
	}
	///записываем данные в localStorage
	localStorage.setItem("task19", JSON.stringify(arr));
}
removeLastElement();

//Задание 21
//Создайте функцию addToCart, которая вызывается при нажатии на кнопку "Задание 21". Эта функция должна извлекать из LocalStorage массив cartItems, сохранённый под ключом cartItems, и добавлять в него новый элемент, представляющий товар, введённый вами в поле ввода. После добавления, обновлённый массив должен быть сохранён обратно в LocalStorage под тем же ключом.

//Подсказка: важно проверить, существует ли значение cartItems в LocalStorage и не является ли оно пустым массивом. Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.
/*
const addToCart = () => {
	const productInput = document.getElementById("productInput");
	const product = productInput.value;

	if (product.trim() !== "") {
		let cartItems = LocalStorage.getItem("cartItems");
		cartItems = cartItems ? JSON.parse(cartItems) : []; //код из подсказки

		//Ваш код

		console.log(
			`Товар "${product}" добавлен в корзину и сохранен в Local Storage.`
		);
	} else {
		console.log("Введите название товара.");
	}
};

document.querySelector(".b-21").addEventListener("click", addToCart);
*/

// Задание №21 из тренажера:
/*
У вас есть функция addToCart, она должна:
- Забрать данные из localStorage и записать их в переменную arr под ключом cartItems.
- Если в localStorage не окажется такого ключа, то нужно вывести в консоль сообщение о том, что такой переменной не существует и остановить функцию.
-После чего нужно найти инпут и также написать условие, если на момент выполнения функции input будет пустым, то вывести в консоль фразу о том что нужно заполнить input и остановить функцию.
- Если все хорошо и все условия соблюдены, то нужно записать те данные, которые ввел пользователь в инпуты нашего массив arr.
- Обновленный массив записать в localStorage под тем же ключом.

Порядок действий проверки задания:
1.Написать рабочую функцию.
2.Заполнить input.
3.Нажать кнопку 'проверить(сохранить)'.
Задание будет считаться выполненым, если не сработало ни одно условие, а в массив записались данные из инпута.
Подсказки :
-добавлять элемент нужно через метод push.
- return останавливает функцию.

<div class='html' >
	<input type="text" id="task21" placeholder="Введите наименование товара" />
</div>
*/

// Моё решение из тренажера:
function addToCart() {
	const arr = JSON.parse(localStorage.getItem("cartItems"));
	// забираем данные из localStorage

	if (!arr) {
		//добавляем проверку переменной arr
		console.log("Такого массива не существует."); //в консоль вывыодим фразу, что такого массива не существует
		return; //останавливаем функцию
	}
	const inputPage = document.getElementById("task21"); //находим инпут
	const inputValue = inputPage.value; //забираем данные из инпута, которые ввел пользователь
	if (inputValue === "") {
		//добавляем проверку пустой инпут или нет
		console.log("Введите наименование товара в поле ввода"); //выводим сообщение в консоль о том, что не были введены данные в инпут
		return; //останавливаем функцию
	}
	arr.push(inputValue); // добавляем элемент в массив
	localStorage.setItem("cartItems", JSON.stringify(arr)); // записываем измененный массив в localStorage
}

addToCart();

// Или:
function addToCart() {
	const arr = JSON.parse(localStorage.getItem("cartItems"));

	if (!arr) {
		console.log("Такого массива не существует.");
		return;
	}

	const input = document.getElementById("task21");
	const inputValue = input.value;

	if (inputValue === "") {
		console.log("Введите название товара");
		return;
	}
	arr.push(inputValue);
	localStorage.setItem("cartItems", JSON.stringify(arr));
}
addToCart();

//Задание 22
//Создайте функцию removeFromCart, которая вызывается при нажатии на кнопку "Задание 22". Эта функция должна извлекать из LocalStorage массив cartItems, сохранённый под тем же ключом cartItems, и удалять из него последний элемент. После удаления, обновлённый массив должен быть сохранён обратно в LocalStorage.

//Подсказка: перед тестированием функции removeFromCart убедитесь, что в массиве cartItems есть элементы, добавленные с помощью функции addToCart из задания 21. Это позволит вам протестировать удаление элементов из массива и убедиться, что обе функции работают корректно вместе.

/*
const removeFromCart = () => {
	//Ваш код
};

document.querySelector(".b-22").addEventListener("click", removeFromCart);
*/

// Задание №22 из тренажера:
/*
У нас есть функция removeToCart, она должна:
-Получать данные из LocalStorage по ключу 'task22'
-Останавливать свою работу, если данных нет по этому ключу.
-После проверки данных, функция должна находить selector по id и забирать его значение.
-Необходимо дописать условие, что если пользователь не выбрал нужный индекс в селекторе, то функцию также нужно остановить.
-Дальше функция с помощью метода filter удаляет элемент согласно выбранному index в селекторе.
-После она должна записать новый масссив под тем же ключом в localStorage.

    <div class="html">
		<select id="task22">
        <option value="" hidden> Укажите нужный индекс для удаление элемента из массива
        </option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
		</select>
    </div>
*/

// Моё решение из тренажера:
function removeToCart() {
	const arr = JSON.parse(localStorage.getItem("task22")); //получаем массив из localStorage
	if (!arr) {
		//пишем условия, при котором функция перестанет работать, если массива нет в localStorage
		console.log("Такого массива нет."); // сообщение о том что массив отсутствует
		return; /// остановка функции
	}
	const valueId = document.querySelector("#task22").value; ///находим нужный селектор и получаем его значение
	if (valueId === "") {
		console.log("Выберите селектор.");
		return;
	} ///проверяем выбрал ли пользователь индекс элемента.
	const newArr = arr.filter((item, index) => index !== +valueId); //логика удаления элемента из массива.
	localStorage.setItem("task22", JSON.stringify(newArr)); ///записываем новый массив в localstorage под тем же ключом.
}

removeToCart();

// Решение авторов:
function removeToCart() {
	const arr = JSON.parse(localStorage.getItem("task22"));
	if (!arr) {
		console.log("такого массива не существует.");
		return;
	}
	const valueId = document.querySelector("#task22").value;
	if (valueId === "") {
		console.log("не выбран index");
		return;
	}
	const newArr = arr.filter((item, index) => index !== +valueId);
	localStorage.setItem("task22", JSON.stringify(newArr));
}
removeToCart();

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.
/*
const showCart = () => {
	//Ваш код
};

document.querySelector(".b-23").addEventListener("click", showCart);
*/

// Задание №23 из тренажера:
/*
У нас есть функция addNewUserLocalStorage, она должна:
-Находить форму с помощью id task23 и записать в переменную myForm
-Забрать из localStorage массив и записать его в переменную arr
- Воспользоваться классом myForm и получить эту форму
-Создать пустой обьект user и с помощью цикла for of перебрать объект, который мы получили от класса FormData
-Внутри цикла написать условие, которое будет заканчивать цикл, если хотя бы одно из полей формы будет не заполнено и выводить в консоль сообщение об этом. Если мы зашли в это условие, функция также должна прекращать свою работу.
- Полученный обьект добавить в конец массива arr и записать arr в localStorage под ключом 'task23'.

    <div class="html">
      <form id="task23">
        <label>User name</label>
        <input type="text" name="user-name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>id</label>
        <input type="number" name="userId" />
      </form>
    </div>
*/

// Моё решение из тренажера:
function addNewUserLocalStorage() {
	const myForm = document.getElementById("task23"); ////получаем форму по айди
	const arr = JSON.parse(localStorage.getItem("task23")); ///получаем данные из localStorage.
	const user = {}; //объект, в который будем складывать данные из формы
	const formData = new FormData(myForm); // получаем обьект формы
	for (let [name, value] of formData) {
		if (value === "") {
			console.log("Не все поля заполнены.");
			return;
		} //создаем условие, при котором цикл и форма должны останавливаться и в случае выполнение условия выводим сообщение в консоль.
		user[name] = value; //заполняем обьект данными из формы
	}
	arr.push(user); //добавляем в полученный массив новый обьект
	localStorage.setItem("task23", JSON.stringify(arr)); //записываем в localStorage
}

addNewUserLocalStorage();

// Решение авторов:
function addNewUserLocalStorage() {
	const myForm = document.querySelector("#task23");
	const arr = JSON.parse(localStorage.getItem("task23"));
	const formData = new FormData(myForm);
	const user = {};
	for (let [name, value] of formData) {
		if (value === "") {
			console.log("не все поля заполнены");
			return;
		}
		user[name] = value;
	}
	arr.push(user);
	localStorage.setItem("task23", JSON.stringify(arr));
}
addNewUserLocalStorage();

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.
/*
const updateCartCount = () => {
	//Ваш код
};

document.querySelector(".b-24").addEventListener("click", updateCartCount);
*/
// Задание №23 из тренажера:
// Создайте функцию clearArr, которая очистит весь массив task23 в Local Storage.

// Моё решение из тренажера:
//ваш код
function clearArr() {
	const array = JSON.parse(localStorage.getItem("task23"));
	array.length = 0;
	localStorage.setItem("task23", JSON.stringify(array));
}
clearArr();

/*
//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
	//Ваш код
	console.log("Корзина очищена.");
};

document.querySelector(".b-25").addEventListener("click", clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

//Ваш код
console.log("Cookie 'username' установлен.");

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
	const cookieContainer = document.querySelector(".practicum27");
	const cookies = document.cookie.split("; ");
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split("=");
		if (cookie[0] === name) {
			const value = cookie[1] || "";
			//Ваш код
		}
	}
	//Ваш код
};

document.querySelector(".b-27").addEventListener("click", () => {
	getCookie("username");
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	//Ваш код
	if (username !== "") {
		//Ваш код
	} else {
		//Ваш код
	}
};

// добавьте слушатель события

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
	document.cookie = `${name}=${value}`;
	//Ваш код
};

document.querySelector(".b-29").addEventListener("click", () => {
	setCookie("testCookie", "Hello");
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	//Ваш код
};

document.querySelector(".b-30").addEventListener("click", () => {
	deleteCookie("testCookie");
});
*/
