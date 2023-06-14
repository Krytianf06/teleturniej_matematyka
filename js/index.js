let categoryOne = document.querySelectorAll('.box__item');
const categoryOneArray = [...categoryOne];

console.log(categoryOne);

let activeCard = '';

const clickCard = function (ev) {
  activeCard = this;
  if (ev.target.classList[1] === 'hidden') {
    activeCard.classList.remove('hidden');
  } else {
    activeCard.classList.add('color__end');
  }
};

categoryOneArray.forEach(card => {
  card.addEventListener('click', clickCard);
});

setTimeout(() => {
  categoryOneArray.forEach(card => {
    card.classList.add('hidden');
  });
}, 10);
