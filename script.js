let r = 0;
let g = 0;
let b = 0;

// Gera os números
function numberGenerator() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}
numberGenerator();
let rgbColorRight = `rgb(${r}, ${g}, ${b})`;

// Altera o RGB no titulo
const rgbTitle = document.getElementById('rgb-color');
rgbTitle.innerHTML = `(${r}, ${g}, ${b})`;

// Criar placar
const score = document.getElementById('score');
let points = 0;
let correctAnswer = 0;
const answer = document.getElementById('answer');
const scoreCalculator = () => {
  if (answer.innerHTML === 'Acertou!') {
    if (correctAnswer === 0) {
      points += 3;
      correctAnswer += 1;
      score.innerText = points;
    }
  } else {
    points -= 1;
    score.innerText = points;
  }
};

// Acertou ou errou a cor
function check(event) {
  if (event.target.style.backgroundColor === rgbColorRight) {
    answer.innerHTML = 'Acertou!';
    scoreCalculator();
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    scoreCalculator();
  }
}

// Cria as 6 bolas
const ballsCase = document.getElementById('ballsCase');
function createBalls() {
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.addEventListener('click', check);
    ballsCase.appendChild(ball);
  }
}
createBalls();

// Colore as 6 bolas
const ball = document.getElementsByClassName('ball');
function color() {
  let rgbColor = `rgb(${r}, ${g}, ${b})`;
  for (let i = 0; i < ball.length; i += 1) {
    numberGenerator();
    rgbColor = `rgb(${r}, ${g}, ${b})`;
    ball[i].style.backgroundColor = rgbColor;
  }
}
color();

// Colore a bola certa
const colorRight = () => {
  const position = Math.floor(Math.random() * 5);
  ball[position].style.backgroundColor = rgbColorRight;
};
colorRight();

// Botão de resetar
const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', function () {
  numberGenerator();
  rgbColorRight = `rgb(${r}, ${g}, ${b})`;
  rgbTitle.innerHTML = `(${r}, ${g}, ${b})`;
  color();
  colorRight();
  answer.innerHTML = 'Escolha uma cor"';
  correctAnswer = 0;
});
