const board = document.querySelector(".board");
const boardHeight = 50;
const boardWidth = 50;
const cols = Math.floor(board.clientWidth / boardWidth);
const rows = Math.floor(board.clientHeight / boardHeight);
const blocks = [];
const startButton = document.querySelector(".btn-start");
const restartButton = document.querySelector(".btn-restart");
const modal = document.querySelector(".modal");
const startGameModal = document.querySelector(".start-game");
const gameOverModal = document.querySelector(".game-over");
const timeElement = document.querySelector("#time");
let snake = [{ x: 1, y: 4 }];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let intervalId = null;
let timeIntervalId = null;
let direction = "down";
let score = 0;
let highScore = 0;
let time = `00:00`;
for (let row = 0; row < rows; row++) {
  const arr = [];
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    arr.push(block);
  }
  blocks.push(arr);
}

function getFood() {
  blocks[food["x"]][food["y"]].classList.remove("food");
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
}

function isCollision(head, snake) {
  snake.forEach((segment) => {
    if (head.x == segment.x && head.y == segment.y) {
      gameOver();
    }
  });
}
function render() {
  let head = null;
  highScore = localStorage.getItem("high-score");
  document.getElementById("score").innerText = score;
  document.getElementById("high-score").innerText =
    highScore != null ? (highScore > score ? highScore : score) : 0;
  blocks[food["x"]][food["y"]].classList.add("food");
  if (direction == "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction == "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction == "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction == "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }
  if (
    head.x < 0 ||
    head.x >= rows ||
    head.y < 0 ||
    head.y >= cols ||
    isCollision(head, snake)
  ) {
    gameOver();
  }

  if (head.x == food.x && head.y == food.y) {
    score += 10;
    snake.push(food);
    getFood();
    document.getElementById("score").innerText = score;
    document.getElementById("high-score").innerText =
      highScore != null ? (highScore > score ? highScore : score) : 0;
  }
  snake.forEach((segment) => {
    blocks[segment["x"]][segment["y"]].classList.remove("filler");
  });
  snake.unshift(head);
  snake.pop();
  snake.forEach((segment) => {
    blocks[segment["x"]][segment["y"]].classList.add("filler");
  });
}

//  intervalId=setInterval(()=>{
//     render();
//  },500)

addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    direction = "up";
  } else if (event.key == "ArrowLeft") {
    direction = "left";
  } else if (event.key == "ArrowRight") {
    direction = "right";
  } else if (event.key == "ArrowDown") {
    direction = "down";
  }
});

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 300);
  timeIntervalId = setInterval(() => {
    let [min, sec] = time.split(":").map(Number);
    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    time = `${min}:${sec}`;
    document.getElementById("time").innerText = time;
  }, 1000);
});
restartButton.addEventListener("click", restartGame);
function restartGame() {
  modal.style.display = "none";
  snake.forEach((segment) => {
    blocks[segment["x"]][segment["y"]].classList.remove("filler");
  });
  snake = [{ x: 1, y: 3 }];
  direction = "left";
  let score = 0;
  let time = "00:00";
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = time;
  getFood();
  intervalId = setInterval(() => {
    render();
  }, 300);
  timeIntervalId = setInterval(() => {
    let [min, sec] = time.split(":").map(Number);
    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    time = `${min}:${sec}`;
    document.getElementById("time").innerText = time;
  }, 1000);
}

function gameOver() {
  localStorage.setItem("high-score", highScore < score ? score : highScore);
  score = 0;
  clearInterval(intervalId);
  clearInterval(timeIntervalId);
  modal.style.display = "flex";
  startGameModal.style.display = "none";
  gameOverModal.style.display = "flex";
  return;
}
