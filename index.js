let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");
let img = document.getElementById("image");

const array = ["./images/dice-1.png", "./images/dice-2.png", "./images/dice-3.png", "./images/dice-4.png", "./images/dice-5.png", "./images/dice-6.png"]


btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * 6 + 1)
    img.setAttribute("src", array[random - 1])
    let total = Number(h1.innerText) + random;
    h1.innerText = total
    if (total >= 100) {
        alert("Congrulation! You have reached the maximum LIMIT!")
        h1.innerText = 0
    }
})

