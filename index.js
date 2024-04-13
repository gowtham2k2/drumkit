var drumKit = document.querySelectorAll(".set>.drum");

//make sound when clicked
drumKit.forEach((element) => {
  element.addEventListener("click", () => {
    buttonAnimation(element.innerHTML);
    makeSound(element.innerHTML);
  });
});

//make sound when key is pressed
document.addEventListener("keydown", (event) => {
  buttonAnimation(event.key);
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      {
        let audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
      }
      break;

    case "a":
      {
        let audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
      }
      break;
    case "s":
      {
        let audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
      }
      break;
    case "d":
      {
        let audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
      }
      break;
    case "j":
      {
        let audio = new Audio("./sounds/snare.mp3");
        audio.play();
      }
      break;
    case "k":
      {
        let audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
      }
      break;
    case "l":
      {
        let audio = new Audio("./sounds/crash.mp3");
        audio.play();
      }
      break;
  }
}

function buttonAnimation(key) {
  let activeElement = document.querySelector(`.${key}`);
  activeElement.classList.add("pressed");
  setTimeout(() => {
    activeElement.classList.remove("pressed");
  }, 150);
}
