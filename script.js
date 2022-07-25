const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 40 && cactoLeft < 120 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Sua pontuação foi de: ${count}. Você precisa de 100 pontos`);
    count = 0;
  }
  if(count >= 100) {
    alert(`Parabéns Você está convidado para o nosso chá da Aurora!`);
    window.location= "https://ge.globo.com";
  }
  
  if(count < 30) {
    score.style.color = "red";
  }
  if(count > 30 && count < 70) {
    score.style.color = "orange";
  }
  if(count > 70) {
    score.style.color = "green";
  }

  count++;
  score.innerHTML = `Pontos: ${count}`;
}, 200);