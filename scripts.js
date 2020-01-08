// set initial base hue to PANTONE™ 2020 Color of the Year (Classic Blue)
const initialBaseHue = 204;

// fetch browser window base width
const initialWidth = window.innerWidth;

// inject base hue as a custom property on the <HTML> element
let style = document.documentElement.style;
style.setProperty("--baseHue", initialBaseHue);

// listen for window resize
window.addEventListener("resize", updateStyle);

function updateStyle() {
  newWidth = 204 - (initialWidth - window.innerWidth);
  style.setProperty("--baseHue", newWidth);
}

// const initialHeight = window.innerHeight;
// let size = `Width: ${w}, Height: ${h}`;
// document.getElementById("result").innerHTML = size;
// document.getElementsByClassName
// style.setProperty("--h", `${newWidth}px`);
// console.log(newWidth);
