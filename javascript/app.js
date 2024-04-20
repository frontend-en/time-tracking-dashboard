import data from '../data.json' assert {type: 'json'};

const cards = document.querySelector('.cards');

const daily = cards.querySelector('button[data-b="1"]');
const weekly = cards.querySelector('button[data-b="2"]');
const monthly = cards.querySelector('button[data-b="3"]');

const getImg = (element) => {
  switch (element.title) {
    case 'Work':
      return { img: '../images/icon-work.svg', bg: 'linear-gradient(180deg, rgba(255,139,96,1) 50%, rgba(14,19,35,1) 50%)' };
    case 'Play':
      return { img: '../images/icon-play.svg', bg: 'linear-gradient(180deg, rgba(85,194,230,1) 50%, rgba(14,19,35,1) 50%)' };
    case 'Study':
      return { img: '../images/icon-study.svg', bg: 'linear-gradient(180deg, rgba(255,94,125,1) 50%, rgba(14,19,35,1) 50%)' };

    case 'Exercise':
      return { img: '../images/icon-exercise.svg', bg: 'linear-gradient(180deg, rgba(75,207,130,1) 50%, rgba(14,19,35,1) 50%)' };

    case 'Social':
      return { img: '../images/icon-social.svg', bg: 'linear-gradient(180deg, rgba(115,53,210,1) 50%, rgba(14,19,35,1) 50%)' };
    case 'Self Care':
      return { img: '../images/icon-self-care.svg', bg: 'linear-gradient(180deg, rgba(241,199,91,1) 50%, rgba(14,19,35,1) 50%)' };

    default:
      return { img: '', bg: '' };
  }
}

const removeChildren = (cards) => {
  while (cards.children.length > 1) {
    cards.removeChild(cards.lastChild);
  }
}

const renderCards = (element, term) => {

  const { img, bg } = getImg(element)

  return `
    <div class="card item2" style="background-image: ${bg}">
  <img src=${img} alt="icon" class="card__decore">
  <div class="card__content" >
    <div class="card__busy">
      <div class="card__type">${element.title}</div>
      <div class="card__dots">...</div>
    </div>
    <div class="card__hours">
      <div class="card__hour">${element.timeframes[term].current}hrs</div>
      <div class="card__last-time">Last ${term[0].toUpperCase() + term.slice(1)} - ${element.timeframes[term].previous}hrs</div>
    </div>
  </div>
</div>
  `
}

const render = (element, term) => cards.insertAdjacentHTML("beforeend", renderCards(element, term));

const renderAll = (callback = render, timefram = "weekly") => {
  data.forEach(
    (element) => {
      callback(element, timefram);
    }
  );
}

window.addEventListener('load', () => {
  renderAll()
  weekly.classList.add('active')
})


cards.addEventListener('click', (e) => {

  const buttonElem = e.target.closest('button')

  if (buttonElem === null) {
    e.stopPropagation()
    return
  }

  if (buttonElem) {

    removeChildren(cards)

    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    buttonElem.classList.add('active')

    const term = buttonElem.textContent.toLowerCase()

    renderAll(render, term)
  }
})