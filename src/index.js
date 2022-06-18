const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let screenValue = "";
let button;

for (button of buttons) {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    //console.log(buttonText);
    if (buttonText === "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText === "=") {
      try {
        screen.value = eval(screenValue);
      } catch (err) {
        alert(err);
      }
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
