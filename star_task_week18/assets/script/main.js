import { MOVIES_INFO } from "./script.js";

const mainWrapper = document.querySelector(".wrapper");

// Отрисовка страницы исходя из того, что изначально дано
MOVIES_INFO.forEach(function (item) {
	// Создаём карточки
	const cardDiv = document.createElement("div");
	mainWrapper.appendChild(cardDiv);
	cardDiv.classList.add("card-div");

	// Создаём заголовки для каждой из них
	const title = document.createElement("h2");
	title.innerHTML = item.name;
	title.classList.add("title");

	// Создаём внутренние боксы для каждой из них
	const infoBox = document.createElement("div");
	const imageBox = document.createElement("div");
	const rateBox = document.createElement("div");

	cardDiv.append(title, infoBox, imageBox, rateBox);
	infoBox.classList.add("info-box");
	imageBox.classList.add("image-box");
	rateBox.classList.add("rating");

	// Добавляем мелкую инфу с деталями
	const universeParagraph = document.createElement("p");
	universeParagraph.innerHTML = `Вселенная: ${item.universe}`;
	const alteregoParagraph = document.createElement("p");
	alteregoParagraph.innerHTML = `Альтер эго: ${item.alterego}`;
	const occupationParagraph = document.createElement("p");
	occupationParagraph.innerHTML = `Род деятельности: ${item.occupation}`;
	const friendsParagraph = document.createElement("p");
	friendsParagraph.innerHTML = `Друзья: ${item.friends}`;
	const superpowersParagraph = document.createElement("p");
	superpowersParagraph.innerHTML = `Суперсилы: ${item.superpowers}`;

	infoBox.append(
		universeParagraph,
		alteregoParagraph,
		occupationParagraph,
		friendsParagraph,
		superpowersParagraph
	);

	// Добавляем картинку
	const image = document.createElement("img");
	imageBox.appendChild(image);
	image.src = item.url;
	image.classList.add("image");

	// Создаём звёздочки
	const star1 = document.createElement("div");
	const star2 = document.createElement("div");
	const star3 = document.createElement("div");
	const star4 = document.createElement("div");
	const star5 = document.createElement("div");

	rateBox.append(star1, star2, star3, star4, star5);

	star1.classList.add("star");
	star1.setAttribute("data-rating", "1");
	star2.classList.add("star");
	star2.setAttribute("data-rating", "2");
	star3.classList.add("star");
	star3.setAttribute("data-rating", "3");
	star4.classList.add("star");
	star4.setAttribute("data-rating", "4");
	star5.classList.add("star");
	star5.setAttribute("data-rating", "5");
});

// Функции для работы с локальным хранилищем и сохранения рейтинга
function saveData() {
	localStorage.setItem("data", mainWrapper.innerHTML);
}

function showWrapper() {
	const someData = localStorage.getItem("data");
	if (someData) {
		mainWrapper.innerHTML = localStorage.getItem("data");
	}
}

showWrapper();

// Функции для самих кликов по звёздочкам и изменения рейтинга
const rateBoxes = document.querySelectorAll(".rating");

rateBoxes.forEach(function (rateBox) {
	rateBox.addEventListener("click", function (e) {
		const stars = rateBox.querySelectorAll(".star");
		if (e.target.className === "star") {
			stars.forEach((star) => star.addEventListener("click", setRating));
			function setRating(event) {
				const selectedStar = event.currentTarget;
				let rating = selectedStar.getAttribute("data-rating");
				stars.forEach((star) => {
					if (star.getAttribute("data-rating") <= rating) {
						star.classList.add("selected");
					} else {
						star.classList.remove("selected");
					}
				});
				saveData();
			}
		} else if (e.target.className === "rating") {
			stars.forEach((star) => {
				star.classList.remove("selected");
			});
			saveData();
		}
		saveData();
	});
});

// Почему-то звёзды меняют цвет на желтый только после двойного клика по ним. Наверно это из-за "e.target.className === "star"" - наверно проблема с обработчиков события для каждого "rateBox"?

// Вторая проблема - это то, что после того, как я обновляю страницу, рейтинг сохраняется, но - если я хочу снова поменять выставленную оценку, то просто так это не сделать - нужно сначала нажать на пустое пространство рядом со звёздами (внутри этого div), и только потом можно установить новое значение звёздочек. И тоже по-моему только после двойного клика, а не с первого... В общем я до этого возилась долго, пробовала другие варианты, но там вообще нельзя было поменять значение рейтинга после обновления страницы, а в этом варианте кода хотя бы какими-то методами, но поменять можно. Вообще я поняла, что видимо это было уже излешне - добавлять функцию "очищения" рейтинга, просто мне не хотелось оставлять рейтинг на 1 звезде, если например я совсем не хочу оставлять оценку, если пользователь передумал и оставил без оценки, я пыталась сделать это через classList.toggle('selected'), вместо classList.add('selected'), но там поведение было совсем хаотичным, поэтому придумала пока что только так - что можно нажать на пустое пространство совсем рядышком со звёздами и они очистятся. В общем мне кажется, что есть какой-то способ попроще вообще это всё сделать, но я уже совсем не понимаю как( буду очень рада, если вы сможете помочь:)
