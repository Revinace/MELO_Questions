// DOM
const swiper = document.querySelector('#swiper');
const cards_query = [];
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// variables
let cardCount = 0;
let answers = "";

function updateCards() {
  const cards = swiper.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', parseInt(card.style.cssText[5]) - 1);
  });

  cards_query.forEach((card, index) => {
    if(card.element.style.cssText[5]==0) card.button_addEventListener();
  });

  if(cardCount==0){
    appendNewCard("DU BIST EIN \n " + answers, addAnswer=false);
  }
}

// functions
function appendNewCard(q, addAnswer=true) {
  const card = new Card({
    question: q,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
      cardCount--;
      if(addAnswer) answers += "1";
      updateCards();
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
      cardCount--;
      if(addAnswer) answers += "0";
      updateCards();  
    },
  });
  swiper.append(card.element);
  cards_query.push(card);
  cardCount++;
}

const questions = [];
questions.push("Ich kenne mich gut in der Bibel aus und kann z.B. grob die geschichtlichen Ereignisse in ihrer Reihenfolge bennen.");
questions.push("Wenn mich eine Frage zu einem Bibelvers interessiert, weiß ich, wo ich eine Antwort finden könnte oder wen ich fragen kann.");
questions.push("Ich liebe Musik");
questions.push("Ich tausche mich gerne mit anderen aus");

// first 5 cards
for (let i = 0; i < questions.length; i++) {
  appendNewCard(questions[i]);
}
const cards = swiper.querySelectorAll('.card:not(.dismissing)');
cards.forEach((card, index) => {
  card.style.setProperty('--i', index);
});

cards_query.forEach((card, index) => {
  if(index==0) card.button_addEventListener();
});

