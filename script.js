// DOM
const swiper = document.querySelector('#swiper');
const cards_query = [];
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');
const q_idx = [];
const one_two_eight = "Dein persönlicher Zugang zur Bibel sind Spiele. Durch interaktive und spielerische Erlebnisse entdeckst du die Botschaften der Heiligen Schrift auf eine spannende und unterhaltsame Weise. \n \n Wenn du diese Leidenschaft weiter vertiefen und mehr über die Bibel lernen möchtest, dann schau doch mal bei unserer Gaming Station vorbei! Hier hast du die Möglichkeit, durch verschiedene Spiele und Aktivitäten dein Wissen über die Bibel zu erweitern und dabei jede Menge Spaß zu haben."
const three_four_seven = "Dein ganz persönlicher Zugang zur Bibel ist Musik. Ob durch das Hören oder das Spielen von Liedern – die Klänge und Texte berühren dein Herz und helfen dir, die Botschaften der Heiligen Schrift zu verstehen und zu erleben. \n \n Wenn du deine Leidenschaft für Musik weiter vertiefen und Worship mal auf eine neue Weise erleben möchtest, dann schau doch mal bei unserer Musik Station vorbei! Hier hast du die Möglichkeit, Bibeltexte auf musikalische Weise zu vertiefen, bzw. mit Musik darüber zu meditieren und zu beten. Egal ob du selbst aktiv werden oder einfach nur zuhören möchtest – bei uns findest du genau den richtigen Platz, um deine spirituelle Reise durch Musik fortzusetzen."
const three_four_ten = "Dein persönlicher Zugang zur Bibel ist basteln. Durch kreatives Gestalten und handwerkliche Tätigkeiten bringst du die Botschaften der Heiligen Schrift auf einzigartige Weise zum Ausdruck. \n \n Wenn du diese Leidenschaft weiter vertiefen und Bibeltexte kreativ umsetzen möchtest, dann schau doch mal bei unserer Kreativecke vorbei! Hier hast du die Möglichkeit, mit anderen zusammen zu basteln, zu malen und zu gestalten. In dieser inspirierenden Umgebung kannst du deine künstlerischen Fähigkeiten nutzen, um biblische Geschichten und Lehren lebendig werden zu lassen."
const five_six_eleven = "Dein persönlicher Zugang zur Bibel ist die Natur. Durch die Schönheit und Ruhe der Schöpfung findest du eine tiefe Verbindung zu den Botschaften der Heiligen Schrift. \n \n Wenn du diese Leidenschaft weiter vertiefen und in der Stille Gott begegnen möchtest, dann schau doch mal bei unserem Erlebnisbereich vorbei! Hier hast du die Möglichkeit, gemeinsam mit anderen die Natur zu erkunden, zu meditieren und die biblischen Lehren inmitten der Schöpfung zu erleben. In der Ruhe und Weite der Natur kannst du Gottes Gegenwart und Reden besonders intensiv spüren."
const five_six_twelve = "Dein persönlicher Zugang zur Bibel sind Erlebnisse. Durch praktische Aktivitäten und Erfahrungen verstehst du die Botschaften der Heiligen Schrift besser als durch theoretisches Studium. \n \n Wenn du diese Leidenschaft weiter vertiefen und lieber etwas Praktisches als Theoretisches machen möchtest, dann schau doch mal bei unserem Erlebnisbereich vorbei! Hier hast du die Möglichkeit, biblische Geschichten durch erlebnisorientierte Aktivitäten zum Leben zu erwecken. Indem du aktiv handelst, kannst du die Lehren der Bibel auf eine greifbare und lebendige Weise erfahren."
const all_yes = "Du hast sehr viele Zugänge zur Bibel. Ob durch Musik, Spiele, Austausch mit anderen, Basteln, Natur oder praktische Aktivitäten – du findest auf vielfältige Weise eine tiefe Verbindung zu den Botschaften der Heiligen Schrift. \n \n Um diese Vielseitigkeit weiter zu vertiefen, schau doch mal bei unseren Stationen vorbei! Jede Station bietet dir die Möglichkeit, die Bibel auf unterschiedliche und bereichernde Weise zu erleben."
const all_no = "Du scheinst deinen persönlichen Zugang zur Bibel noch nicht ganz gefunden zu haben. Die Bibel bietet viele Wege, ihre Botschaften zu entdecken und zu erleben. \n \n Um deinen individuellen Zugang zu finden, schau doch mal bei unseren Stationen vorbei und probier dich aus! Jede Station bietet dir eine einzigartige Möglichkeit, die Bibel auf unterschiedliche Weise kennenzulernen und zu erleben."

let cardCount = 0;
let answers = [];

function map(idx){
  return q_idx.indexOf(idx-1);
}

function ret_message(answers) {
  if(answers.every(element => element === true))
    return all_yes
  if(answers.every(element => element === false))
    return all_no
  if(answers[map(3)] && answers[map(4)] && answers[map(7)])
    return three_four_seven
  if(answers[map(1)] && answers[map(2)] && answers[map(8)])
    return one_two_eight
  if(answers[map(3)] && answers[map(4)] && answers[map(10)])
    return three_four_ten
  if(answers[map(5)] && answers[map(6)] && answers[map(11)])
    return five_six_eleven
  if(answers[map(5)] && answers[map(6)] && answers[map(12)])
    return five_six_twelve
  return "Kein passender Typ"
}

function updateCards() {
  const cards = swiper.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', parseInt(card.style.cssText.slice(5).slice(0, -1)) - 1);
  });

  cards_query.forEach((card, index) => {
    if(card.element.style.cssText[5]==0) card.button_addEventListener();
  });

  if(cardCount==0){
    appendNewCard(ret_message(answers), addAnswer=false);
  }
}

function appendNewCard(q, addAnswer=true) {
  const card = new Card({
    question: q,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
      cardCount--;
      if(addAnswer) answers.push(true);
      updateCards();
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
      cardCount--;
      if(addAnswer) answers.push(false);
      updateCards();  
    },
  });
  if(!addAnswer) card.element.style.fontSize = "42%";
  swiper.append(card.element);
  cards_query.push(card);
  cardCount++;
}

function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

questions = [];
questions.push("Ich kenne mich gut in der Bibel aus und kann z.B. grob die geschichtlichen Ereignisse in ihrer Reihenfolge benennen");
questions.push("Wenn mich eine Frage zu einem Bibelvers interessiert, weiß ich, wo ich eine Antwort finden könnte oder wen ich fragen kann");
questions.push("Ich liebe es, Zeit mit meiner Bibel zu verbringen und mich in einzelne Texte zu vertiefen");
questions.push("Ich liebe es, einzelne Bibelverse oder Texte kreativ umzusetzen");
questions.push("In der Stille kann ich Gott gut begegnen und mich für sein Reden öffnen");
questions.push("Etwas Praktisches zu tun hilft mir besser etwas zu verstehen als etwas Theoretisches");
questions.push("Ich liebe Musik");
questions.push("Ich spiele gerne");
questions.push("Ich tausche mich gerne mit anderen aus");
questions.push("Ich bastel gerne");
questions.push("Ich bin gerne in der Natur");
questions.push("Ich erlebe gerne Dinge");

for (let i = 0; i < questions.length; i++) {
  q_idx.push(i);
}
shuffleArray(q_idx);

for (let i = 0; i < questions.length; i++) {
  appendNewCard(questions[q_idx[i]]);
}
const cards = swiper.querySelectorAll('.card:not(.dismissing)');
cards.forEach((card, index) => {
  card.style.setProperty('--i', index);
});

cards_query.forEach((card, index) => {
  if(index==0) card.button_addEventListener();
});