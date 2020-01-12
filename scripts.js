// set initial base hue to PANTONE™ 2020 Color of the Year (Classic Blue) #0F4C81
const initialBaseHue = 208
const initialBaseSat = 792
const initialBaseLum = 282
const denominator = 10

// fetch browser window base dimensions
const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

// inject base values as custom properties on the <HTML> element
let style = document.documentElement.style;
updateStyle();

// listen for window resize and adjust values accordingly
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
