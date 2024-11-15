//Calc program

const display = document.getElementById("display");
console.log("Display Value: ", display.value);

const appendToDisplay = (input) => {
  //   Constantly appending the input to a string
  display.value += input;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLastCharacter = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  if (display.value === "") {
    display.value = "0";
  }
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
};
