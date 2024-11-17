const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener("click", () => {
question.innerHTML = "I miss you too!";
gif.src =
 "https://i.giphy.com/MMH9oqH4hipGDGaAkq.webp"
});

noBtn.addEventListener("click", () => {
question.innerHTML = "Meanie!";
gif.src = 
"https://gifdb.com/images/high/sad-serious-cute-frog-blink-hlwhdkveu800rvxp.gif"

});