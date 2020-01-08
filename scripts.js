const initialBaseHue = 204;
const initialWidth = window.innerWidth;
// const initialHeight = window.innerHeight;
let style = document.documentElement.style;
style.setProperty("--baseHSL", `hsl(${initialBaseHue}, 100%, 25%)`);

function updateStyle() {
  newWidth = 204 - (initialWidth - window.innerWidth);

  // let size = `Width: ${w}, Height: ${h}`;
  // document.getElementById("result").innerHTML = size;
  // document.getElementsByClassName

  style.setProperty("--baseHSL", `hsl(${newWidth}, 100%, 25%)`);
  // style.setProperty("--h", `${newWidth}px`);
  // console.log(newWidth);
}

window.addEventListener("resize", updateStyle);
