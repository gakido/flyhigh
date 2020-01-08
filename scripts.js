const initialBaseHue = 204;
const initialWidth = window.innerWidth;
let style = document.documentElement.style;
style.setProperty("--baseHue", initialBaseHue);
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
