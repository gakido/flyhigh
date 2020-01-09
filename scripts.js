// set initial base hue to PANTONE™ 2020 Color of the Year (Classic Blue)
const initialBaseHue = 204;
const initialBaseLum = 1000;
const initialBaseSat = 250;
const denominator = 10;

// fetch browser window base dimensions
const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

// inject base hue as a custom property on the <HTML> element
let style = document.documentElement.style;
updateStyle();

// listen for window resize
window.addEventListener("resize", updateStyle);

function updateStyle() {
  newHue = initialBaseHue - (initialWidth - window.innerWidth);
  newLum = initialBaseLum + (initialHeight - window.innerHeight);
  newSat = initialBaseSat + (initialHeight - window.innerHeight);
  style.setProperty("--baseHue", newHue);
  style.setProperty("--baseLum", `${Math.round(newLum / denominator)}%`);
  style.setProperty("--baseSat", `${Math.round(newSat / denominator)}%`);
}

// let size = `Width: ${w}, Height: ${h}`;
// document.getElementById("result").innerHTML = size;
// document.getElementsByClassName
// style.setProperty("--h", `${newWidth}px`);
// console.log(newWidth);
