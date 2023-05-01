const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

box1.addEventListener("click", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "#556699";
});

window.addEventListener("resize", () => {
    //console.log(window.innerWidth);
    box2.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});

window.addEventListener("load", () => {
    //console.log(window.innerWidth);
    box2.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});