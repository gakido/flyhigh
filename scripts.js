// set initial base hue to PANTONE™ 2020 Color of the Year (Classic Blue)
const initialBaseHue = 204;
const initialBaseLum = "100%";
const initialBaseSat = "25%";

// fetch browser window base dimensions
const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;

// inject base hue as a custom property on the <HTML> element
let style = document.documentElement.style;
style.setProperty("--baseHue", initialBaseHue);
style.setProperty("--baseLum", initialBaseLum);
style.setProperty("--baseSat", initialBaseSat);

// listen for window resize
window.addEventListener("resize", updateStyle);

function updateStyle() {
  newWidth = initialBaseHue - (initialWidth - window.innerWidth);
  style.setProperty("--baseHue", newWidth);
}

// let size = `Width: ${w}, Height: ${h}`;
// document.getElementById("result").innerHTML = size;
// document.getElementsByClassName
// style.setProperty("--h", `${newWidth}px`);
// console.log(newWidth);
