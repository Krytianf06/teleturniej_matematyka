// let categoryOne = document.querySelectorAll(".box__item");
// const categoryOneArray = [...categoryOne];

// // console.log(categoryOne);

// let activeCard = "";

// const clickCard = function (ev) {
// 	activeCard = this;
// 	if (ev.target.classList[1] === "hidden") {
// 		activeCard.classList.remove("hidden");
// 	} else {
// 		activeCard.classList.add("color__end");
// 	}
// };

// categoryOneArray.forEach((card) => {
// 	card.addEventListener("click", clickCard);
// });

// setTimeout(() => {
// 	categoryOneArray.forEach((card) => {
// 		card.classList.add("hidden");
// 	});
// }, 10);
const Liczba1 = [1, 3, 5, 7];
const Liczba2 = [3, 4, 5];

const mnozenie = (a, b) => {
	const c = a * b;
	const ones = c % 10; // 6
	const tens = Math.floor(c / 10); // 1
	// const digits = [tens, ones];
	console.log(tens, ones);
	return c;
};

mnozenie(8, 4);
