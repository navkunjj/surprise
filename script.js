const triangle3 = document.querySelector(".triangle3");
const card = document.querySelector(".card");
const heartBtn = document.getElementById("heartBtn");
const backBtn = document.getElementById("backBtn");

heartBtn.addEventListener("click", () => {
  if (triangle3 && card) {
    triangle3.classList.toggle("open");
    card.style.transform = "translate(-50%, -160%)";
    setTimeout(() => {
      card.classList.toggle("card-open");
      card.style.zIndex = "5";
      card.style.transform = "translate(-50%, -50%) rotateX(360deg)";
    }, 500);
  }
});

backBtn.addEventListener("click", () => {
  if (triangle3 && card) {
    card.classList.toggle("card-open");
    card.style.transform = "translate(-50%, -160%)";
    setTimeout(() => {
      triangle3.classList.toggle("open");
      card.style.zIndex = "1";
    }, 600);
    setTimeout(() => {
      card.style.transform = "translate(-50%, -50%) rotateX(180deg)";
    }, 400);
  }
});

let gameBtn = document.querySelector(".gameBtn");
let gamePage = document.querySelector(".gamePage");
let app = document.querySelector(".app");

gameBtn.addEventListener("click", () => {
    gamePage.style.transform = "translatex(0)";
   
    gamePage.style.transition = "0.5s ease-in-out";
});


const messages = [
  "You're my favorite notification 💌",
  "Every second with you is a heartbeat I never want to miss 💓",
  "You're the missing piece to my heart puzzle 🧩",
  "I smile just thinking about you 😊",
  "You are the love story I’ll always tell 💖"
];

const clicked = Array(messages.length).fill(false);
let foundCount = 0;

const counterEl = document.getElementById("counter");
const messageBox = document.getElementById("messageBox");
const finalPopup = document.getElementById("finalPopup");
const gameArea = document.getElementById("gameArea");

// Create heart buttons
messages.forEach((msg, index) => {
  const btn = document.createElement("button");
  btn.className = "heart-button";
  btn.innerHTML = "❤️";
  btn.style.top = `${Math.random() * 80}%`;
  btn.style.left = `${Math.random() * 85}%`;

  btn.addEventListener("click", () => {
    if (clicked[index]) return;
    clicked[index] = true;
    foundCount++;
    counterEl.textContent = `Notes Found: ${foundCount} / ${messages.length}`;
    messageBox.textContent = messages[index];
    btn.style.opacity = "0.5";
    btn.style.pointerEvents = "none";

    if (foundCount === messages.length) {
      launchConfetti();
      finalPopup.style.display = "flex";
    }
  });

  gameArea.appendChild(btn);
});

// Floating hearts
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  document.body.appendChild(heart);
}

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.width = "8px";
    conf.style.height = "8px";
    conf.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = Math.random() * window.innerHeight + "px";
    conf.style.borderRadius = "50%";
    conf.style.zIndex = 999;
    conf.style.opacity = 0.9;
    conf.style.animation = "fadeout 2s ease forwards";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 2000);
  }
}
