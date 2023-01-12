const copy = document.getElementById("copy");
const input = document.getElementById("input");
const showResult = document.getElementById("showResult");
const showError = document.getElementById("showError");

// hex color generate function
const hexColor = () => {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
};


 input.onkeyup=(e)=>{
const value= e.target.value;
if (patternCheck(value)) {
  document.querySelector("body").style.backgroundColor = value;
} else {
  showError.classList.remove("hidden");
  showError.innerHTML = `Wrong Hex code`;
}
}


const change = () => {
  const hexColorCode=hexColor()
document.querySelector("body").style.backgroundColor = hexColorCode;
input.value=hexColorCode

};

// pattern check function
function patternCheck(data) {
  const pattern = /^#[0-9abcdef]{3,6}$/i;
  const result = pattern.test(data);
  return result;
}

// set setInterval for show limited time output
setInterval(() => {
  showError.classList.add("hidden");
  showResult.classList.add("hidden");
}, 2000);

// code copy
copy.onclick = () => {
  const value = input.value;
  if (patternCheck(value)) {
    showResult.classList.remove("hidden");
    showResult.innerHTML = `${value ? value : "#bae6fd"} copied`;
  }
};
