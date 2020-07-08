/*Calling out items from DOM*/
//randomized querent discription HTML
let querent = document.getElementById('person');
//random request HTML
let question = document.getElementById('question');
//random Cards divs as list
let cards = document.getElementsByClassName('card');
let newClientButton = document.getElementById('newQuerent');
/*----Stuff for random person generator*/

let presentation = ["woman", "man", "androgenous person", "cat", "friend", "rabbit", "horse", "duck"];

let lifeStage = [ "young", "elderly", "seniorly", "middle-aged"];

let personality = ["bubbly", "nervous", "timid", "proud", "lost", "confused", "caring", "sensitive", "uninterested", "sad", "hopeful"];

/*-----Stuff for question generator*/

let timing = [ "reconciling past", "an upcoming", "possible"];
let category = ["relationships", "property", "finances", "employment", "family", "opportunities"];
/*----Stuff for pulling cards-*/
const deck = [
  '../mysteryMortal/images/10cups.jpg',    '../mysteryMortal/images/6cups.jpg',      '../mysteryMortal/images/chariot.jpg',        '../mysteryMortal/images/lovers.jpg',
'../mysteryMortal/images/10pent.jpg',    '../mysteryMortal/images/6pent.jpg',      '../mysteryMortal/images/death.jpg',          '../mysteryMortal/images/magician.jpg',
'../mysteryMortal/images/10swords.jpg',  '../mysteryMortal/images/6swords.jpg',    '../mysteryMortal/images/devil.jpg',          '../mysteryMortal/images/moon.jpg',
'../mysteryMortal/images/10wands.jpg',   '../mysteryMortal/images/6wands.jpg',     '../mysteryMortal/images/emperor.jpg',        '../mysteryMortal/images/pagecups.jpg',
'../mysteryMortal/images/2cups.jpg',     '../mysteryMortal/images/7cups.jpg',      '../mysteryMortal/images/empress.jpg',        '../mysteryMortal/images/pagepent.jpg',
'../mysteryMortal/images/2pent.jpg',    '../mysteryMortal/images/7pent.jpg',      '../mysteryMortal/images/fool.jpg',           '../mysteryMortal/images/pageswords.jpg',
'../mysteryMortal/images/2swords.jpg',   '../mysteryMortal/images/7swords.jpg',    '../mysteryMortal/images/hangedman.jpg',      '../mysteryMortal/images/pagewands.jpg',
'../mysteryMortal/images/2wands.jpg',    '../mysteryMortal/images/7wands.jpg',     '../mysteryMortal/images/heirophant.jpg',     '../mysteryMortal/images/queencups.jpg',
'../mysteryMortal/images/3cups.jpg',     '../mysteryMortal/images/8cups.jpg',      '../mysteryMortal/images/hermit.jpg',         '../mysteryMortal/images/queenpent.jpg',
'../mysteryMortal/images/3swords.jpg',   '../mysteryMortal/images/8swords.jpg',    '../mysteryMortal/images/judgment.jpg',       '../mysteryMortal/images/queenwands.jpg',
'../mysteryMortal/images/3wands.jpg',    '../mysteryMortal/images/8wands.jpg',     '../mysteryMortal/images/justice.jpg',        '../mysteryMortal/images/star.jpg',
'../mysteryMortal/images/3pent.jpg',     '../mysteryMortal/images/8pent.jpg',      '../mysteryMortal/images/highpriestess.jpg',  '../mysteryMortal/images/queenswords.jpg',
'../mysteryMortal/images/4cups.jpg',     '../mysteryMortal/images/9cups.jpg',      '../mysteryMortal/images/kingcups.jpg',       '../mysteryMortal/images/strength.jpg',
'../mysteryMortal/images/4pent.jpg',     '../mysteryMortal/images/9pent.jpg',      '../mysteryMortal/images/kingpent.jpg',       '../mysteryMortal/images/sun.jpg',
'../mysteryMortal/images/4swords.jpg',   '../mysteryMortal/images/9swords.jpg',    '../mysteryMortal/images/kingswords.jpg',     '../mysteryMortal/images/temperance.jpg',
'../mysteryMortal/images/4wands.jpg',    '../mysteryMortal/images/9wands.jpg',     '../mysteryMortal/images/kingwands.jpg',      '../mysteryMortal/images/tower.jpg',
'../mysteryMortal/images/5cups.jpg',     '../mysteryMortal/images/acecups.jpg',    '../mysteryMortal/images/knightcups.jpg',     '../mysteryMortal/images/wheeloffortune.jpg',
'../mysteryMortal/images/5pent.jpg',     '../mysteryMortal/images/acepent.jpg',    '../mysteryMortal/images/knightpent.jpg',     '../mysteryMortal/images/world.jpg',
'../mysteryMortal/images/5swords.jpg',   '../mysteryMortal/images/aceswords.jpg',  '../mysteryMortal/images/knightswords.jpg',
'../mysteryMortal/images/5wands.jpg',    '../mysteryMortal/images/acewands.jpg',   '../mysteryMortal/images/knightwands.jpg',
];
/*----actual randomizers*/
function refreshCards(){
  let first = Math.floor(Math.random()*deck.length);
  let second = Math.floor(Math.random()*deck.length);
  let third = Math.floor(Math.random()*deck.length);
  while( first == second){
    second = Math.floor(Math.random()*deck.length);
  }//after this first and second are now distinct

  while((third == first)||(third ==second)){
    third = Math.floor(Math.random()*deck.length);
  }
  let hand = [first, second, third]
  for(var i = 0; i < cards.length; i++){
    cards[i].innerHTML = `<img src = ${deck[hand[i]]}>`;
  }
}

function refreshPerson(){
  let personalAdj =" "+ personality[Math.floor(Math.random()*personality.length)];
  let ageAdj =" "+ lifeStage[Math.floor(Math.random()*lifeStage.length)];
  let beingType =" "+ presentation[Math.floor(Math.random()*presentation.length)];
  let flip = Math.floor(Math.random()*100);
  let thePerson = "A";
  if(flip%2 == 0){
    thePerson = ageAdj + "," + personalAdj + beingType;
  } else{
    thePerson = beingType + " who appears quite" + ageAdj +" and" + personalAdj;
  }
  querent.innerHTML = thePerson;
}

function refreshQuestion(){
  let topic =" "+ category[Math.floor(Math.random()*category.length)];
  let time =" " + timing[Math.floor(Math.random()*timing.length)];
  let concern = "guidance for" + time + topic;
  question.innerHTML = concern;
}

function refreshAll(){
  refreshPerson();
  refreshQuestion();
  refreshCards();
}

refreshAll();
newClientButton.addEventListener("click", refreshAll);
