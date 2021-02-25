var wrapperEle = document.querySelector(".wrapper");
var buttonEle = document.querySelector(".button");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var text = "";

function decideText(animalName) {
  if (animalName === "cat") {
    return("I am a cat")
  } else if (animalName === "dog") {
    return("borf borf")
  } else {
    return("I'm an animal")
  }
};

function removeText() {
  while (wrapperEle.firstChild) {
    wrapperEle.removeChild(wrapperEle.lastChild);
  }
};

function firstAdd() {
  for (animalName in animals) {
    text = decideText(animals[animalName]);
    var newText = document.createElement("p");
    newText.innerHTML = text;
    wrapperEle.appendChild(newText);
  }
}

function buttonAdd() {
  for (animalName in animals) {
    text = decideText(animals[animalName]);
    var newText = document.createElement("p");
    newText.innerHTML = text;
    
    var randomNode = Math.floor(Math.random() * (wrapperEle.children.length + 1));
    if (randomNode === wrapperEle.children.length + 1) {
      randomNode === null
    }
    wrapperEle.insertBefore(newText, wrapperEle.childNodes[randomNode]);
  }
};

firstAdd();
buttonEle.addEventListener("click", function() {
  removeText();
  buttonAdd();
});