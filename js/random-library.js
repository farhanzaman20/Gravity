// Library of Random Functions

// Random Decimal
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// Random Integer
function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

// Random Colour
function randomRGB() {
  let r = randomInt(100, 255);
  let g = randomInt(100, 255);
  let b = randomInt(100, 255);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Random Element
function randomElement(anArray) {
  return anArray[randomInt(0, anArray.length)];
}
