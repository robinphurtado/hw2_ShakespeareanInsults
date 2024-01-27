//event listeners
document.getElementById("oneInsult").addEventListener("click", generateOne);

document.getElementById("fewInsults").addEventListener("click", generateThree);

//global variables --maybe put the insult arrays in a different file?

//probably a way to store these in a seperate file and then import them for cleanliness
let appearanceInsults = ["You have such a February face, So full of frost, of storm, and cloudiness.", "You lisp and wear strange suits.", "Thou hast the most unsavoury smiles.", "The tartness of your face sours ripe grapes.", "Thou art a very ragged Wart.", "Thou lump of foul deformity!", "How foul and loathsome is thine image!", "They lie deadly that tell you you have good faces .", "Out of my sight! Thou dost infect my eyes.", "Your complexion is perfect for the gallows."];

let characterInsults = ["There’s no more faith in thee than in a stewed prune.", "Thou subtle, perjur’d, false, disloyal man!", "O you faithless coward! O dishonest wretch!", "You sanguine coward!", "What, you egg! Young fry of treachery!", "Most wicked sir, whom to call brother would even infect my mouth.", "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.", "O braggart vile and damned furious wight!", "Heaven truly knows that thou art false as hell.", "Rogue, thou hast liv'd too long."];

let intelligenceInsults = ["Your abilities are too infant-like for doing much alone.", "Your brain is as dry as the remainder biscuit after voyage", "Four of your five wits went halting off, and now your whole person is governed with one: ", "Thou hast no more brain than I have in mine elbows!", "Thou art the cap of all the fools.", "You are not worth another word, else I’d call you knave.", "If you spend word for word with me, I shall make your wit bankrupt.", "You have a plentiful lack of wit.", "You have not so much brain as ear-wax.", "More of your conversation would infect my brain."];

let generalInsults = ["Let's meet as little as we can.", "I desire that we be better strangers.", "Thou damned and luxurious mountain goat.", "Aroint thee: go away, rump-fed runion.", "Thou art a boil, a plague sore, an embossed carbuncle in my corrupted blood", "You have rankest compound of villainous smell that ever offended nostril.", "A plague on both your houses!", "Away! Thou'rt poison to my blood.", "You blocks, you stones, you worse than senseless things!", "Thou art a Castillian King urinal."];

let insult = "";
let fewInsults = "";
let insult2 = "";
document.querySelector("#category").value = "";

//functions
function test() {
  alert("test!");
}

function isCatChosen() {
  let isCatChosen = true;
  if (document.querySelector("#category").value == "") {
    isCatChosen = false;
    document.querySelector("#fdbkImg").innerHTML = "<img src='images/pillory.png' alt='pillory image'>";
    document.querySelector("#errorFdbk").innerHTML = "Please choose a category";
  }
  console.log("is category chosen: " + isCatChosen);
  return isCatChosen;
}

// function to generate insult
function generateInsult(catChosen) {
    let index = generateRandom();
  if (catChosen == "appearance") {
    genInsult = appearanceInsults[index];
  } else if (catChosen == "intelligence") {
    genInsult = intelligenceInsults[index];
  } else if (catChosen == "character") {
    genInsult = characterInsults[index];
  } else if (catChosen == "anything") {
    genInsult = generalInsults[index];
  }
  console.log(genInsult);
  return genInsult; 
}

//generates random number between 0 and 9
function generateRandom() {
  randomNum = Math.floor(Math.random() * 9) + 1;
  console.log("random number: " + randomNum);
  return randomNum;
}

function resetFields() {
  //reset error message
  document.querySelector("#errorFdbk").innerHTML = "";
  //reset error image
  document.querySelector("#fdbkImg").innerHTML = "";
  // reset insult message
  document.querySelector("#insultMsg").innerHTML = "";
}

function generateOne() {
  console.log("Getting user selection...");
  resetFields();
  //check for not category chosen
  if (!isCatChosen()) {
    return;
  } //isCatChosen
  //retrieve category chosen in dropdown
  let catChosen = document.querySelector("#category").value;
  console.log("array name: " + catChosen);
  //generate insult
  insult = generateInsult(catChosen);
  //display in placeholder
  console.log(insult);
  document.querySelector("#fdbkImg").innerHTML = "<img src='images/quill.png' alt='quill image'>";
  document.querySelector("#insultMsg").innerHTML = insult;
} //generateOne


function generateThree() {
  console.log("Getting user selection for few...");
  resetFields();
  //check for category not chosen
  if (!isCatChosen()) {
    return;
  } //isCatChosen
  //retrieve category chosen in dropdown
  let catChosen = document.querySelector("#category").value;
  console.log("array name: " + catChosen);
  //generate 3 insults
  let insult1 = generateInsult(catChosen);
  let insult2 = generateInsult(catChosen);
  while (insult2 === insult1) {
    insult2 = generateInsult(catChosen);
  }
  let insult3 = generateInsult(catChosen);
  while (insult3 === insult2 || insult3 === insult1) {
    insult3 = generateInsult(catChosen);
  }
  // for troubleshooting
  console.log(insult1);
  console.log(insult2);
  console.log(insult3);
  //display in placeholder
  let fewInsults = `<ul id="no-bullets"><li>${insult1}</li><li>${insult2}</li><li>${insult3}</li><ul>`;
  //display quill
  document.querySelector("#fdbkImg").innerHTML = "<img src='images/quill.png' alt='quill image'>";
  // display insults
  document.querySelector("#insultMsg").innerHTML = fewInsults;
  // document.querySelector("#insultMsg").innerHTML = insult2;

} //generateThree