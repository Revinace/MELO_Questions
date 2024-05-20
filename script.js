// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  'https://source.unsplash.com/random/1000x1000/?sky',
  'https://source.unsplash.com/random/1000x1000/?landscape',
  'https://source.unsplash.com/random/1000x1000/?ocean',
  'https://source.unsplash.com/random/1000x1000/?moutain',
  'https://source.unsplash.com/random/1000x1000/?forest'
];

// variables
let cardCount = 0;
let answers = "";

function updateCards() {
  console.log(cardCount);
  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
  if(cardCount==0){
    console.log("THE END");
    console.log(answers);
    appendNewCard("DU BIST EIN \n " + answers)
  }
  
}

// functions
function appendNewCard(q) {
  const card = new Card({
    question: q,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
      cardCount--;
      answers += "1";
      updateCards();
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
      cardCount--;
      answers += "0";
      updateCards();  
    }
  });
  swiper.append(card.element);
  cardCount++;

  updateCards();
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard("Question " + i);
}

