const revealDate = new Date("2025-06-04T15:00:00-04:00");
const now = new Date();

const grid = [
  [null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'T', 'A', 'S', 'K', 'S', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'F', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [2, 'A', 'I', 'R', 'F', 'O', 'R', 'C', 'E', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [3, 'P', 'E', 'R', 'I', 'S', 'C', 'O', 'P', 'E', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [4, 'S', 'Y', 'S', 'T', 'E', 'M', 'S', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [5, 'R', 'I', 'N', 'G', 'M', 'A', 'S', 'T', 'E', 'R', null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [6, 'G', 'A', 'M', 'I', 'N', 'G', null, null, 7, 'R', 'U', 'L', 'E', 'S', null, null, null, null, null, null, null, null, null, null],
  [8, 'V', 'O', 'I', 'C', 'E', 'A', 'P', 'P', null, 'C', 'A', 'R', null, null, null, null, null, null, null, null, null, null, null, null],
  [9, 'L', 'E', 'V', 'E', 'L', 'U', 'P', null, null, 10, 'E', 'X', 'P', 'E', 'R', 'I', 'M', 'E', 'N', 'T', null, null, null, null],
  [11, 'A', 'C', 'E', null, null, null, null, null, null, 12, 'C', 'U', 'R', 'I', 'O', 'S', 'I', 'T', 'Y', null, null, null, null],
  [13, 'W', 'I', 'N', 'D', 'S', null, null, null, null, 14, 'D', 'I', 'G', 'I', 'T', 'A', 'L', null, null, null, null, null, null, null],
  [15, 'H', 'E', 'E', 'L', 'S', null, null, null, null, 16, 'E', 'S', 'P', 'O', 'R', 'T', 'S', null, null, null, null, null, null, null],
  [17, 'P', 'C', null, null, null, null, null, null, null, 18, 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'S', null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, 19, 'L', 'E', 'A', 'D', null, null, null, null, null, null, null, null, null, null]
];

const answersMap = [
  [null, null, 'T', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'A', 'S', 'K', 'S', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  [null, null, 'F', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ['A', 'I', 'R', 'F', 'O', 'R', 'C', 'E', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ['P', 'E', 'R', 'I', 'S', 'C', 'O', 'P', 'E', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ['S', 'Y', 'S', 'T', 'E', 'M', 'S', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ['R', 'I', 'N', 'G', 'M', 'A', 'S', 'T', 'E', 'R', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  ['G', 'A', 'M', 'I', 'N', 'G', null, null, 'R', 'U', 'L', 'E', 'S', null, null, null, null, null, null, null, null, null, null, null, null],
  ['V', 'O', 'I', 'C', 'E', 'A', 'P', 'P', null, 'C', 'A', 'R', null, null, null, null, null, null, null, null, null, null, null, null],
  ['L', 'E', 'V', 'E', 'L', 'U', 'P', null, null, 'E', 'X', 'P', 'E', 'R', 'I', 'M', 'E', 'N', 'T', null, null, null, null, null, null],
  ['A', 'C', 'E', null, null, null, null, null, null, 'C', 'U', 'R', 'I', 'O', 'S', 'I', 'T', 'Y', null, null, null, null, null, null],
  ['W', 'I', 'N', 'D', 'S', null, null, null, null, 'D', 'I', 'G', 'I', 'T', 'A', 'L', null, null, null, null, null, null, null, null, null],
  ['H', 'E', 'E', 'L', 'S', null, null, null, null, 'E', 'S', 'P', 'O', 'R', 'T', 'S', null, null, null, null, null, null, null, null, null],
  ['P', 'C', null, null, null, null, null, null, null, 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'S', null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, 'L', 'E', 'A', 'D', null, null, null, null, null, null, null, null, null, null, null, null]
];

window.onload = () => {
  const crosswordContainer = document.getElementById("crossword-container");
  const revealButton = document.querySelector("button:nth-child(2)");

  if (now < revealDate) {
    revealButton.style.display = "none";
  }

  crosswordContainer.innerHTML = '';

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const div = document.createElement("div");
      if (cell === null) {
        div.className = "cell black-cell";
      } else if (typeof cell === 'number') {
        div.className = "cell";
        const input = document.createElement("input");
        input.maxLength = 1;
        input.dataset.row = rowIndex;
        input.dataset.col = colIndex;
        const correctChar = answersMap[rowIndex]?.[colIndex];
        if (correctChar) input.dataset.answer = correctChar;
        div.appendChild(input);
        const number = document.createElement("span");
        number.className = "cell-number";
        number.innerText = cell;
        div.appendChild(number);
      } else {
        div.className = "cell";
        const input = document.createElement("input");
        input.maxLength = 1;
        input.dataset.row = rowIndex;
        input.dataset.col = colIndex;
        const correctChar = answersMap[rowIndex]?.[colIndex];
        if (correctChar) input.dataset.answer = correctChar;
        div.appendChild(input);
      }
      crosswordContainer.appendChild(div);
    });
  });
};
