import { MOVIES_INFO } from "./script.js";

console.log(MOVIES_INFO);
const mainWrapper = document.querySelector(".wrapper");

function renderCards() {}

MOVIES_INFO.forEach(function (item) {
	// Создаём карточки
	const cardDiv = document.createElement("div");
	mainWrapper.appendChild(cardDiv);

	// Создаём заголовки для каждой из них
	const title = document.createElement("h2");
	title.innerHTML = item.name;

	// Создаём внутренние боксы для каждой из них
	const infoBox = document.createElement("div");
	const imageBox = document.createElement("div");
	const rateBox = document.createElement("div");

	cardDiv.append(title, infoBox, imageBox, rateBox);

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

	// Создаём звёздочки
	const star1 = document.createElement("div");
	const star2 = document.createElement("div");
	const star3 = document.createElement("div");
	const star4 = document.createElement("div");
	const star5 = document.createElement("div");

	rateBox.append(star1, star2, star3, star4, star5);
	rateBox.classList.add("rating");
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

	const stars = cardDiv.querySelectorAll(".star");
	stars.forEach((star) => {
		star.addEventListener("click", setRating);
	});
	function setRating(event) {
		const selectedStar = event.currentTarget;
		let rating = selectedStar.getAttribute("data-rating");
		// Установите выбранный рейтинг (например, отправьте на сервер или обновите локальное состояние)
		// Здесь вы можете добавить код для отправки рейтинга на сервер или сохранения его локально.
		// Отобразите выбранный рейтинг
		stars.forEach((star) => {
			if (star.getAttribute("data-rating") <= rating) {
				star.classList.add("selected");
			} else {
				star.classList.remove("selected");
			}
		});

		rateBox.addEventListener("click", function (e) {
			if (e.target.className === "star") {
				return;
			} else if (e.target.className === "rating") {
				stars.forEach((star) => {
					star.classList.remove("selected");
				});
				rating = 0;
			}
		});
	}
});
