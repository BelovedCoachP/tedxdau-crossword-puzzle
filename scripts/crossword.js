const revealDate = new Date("2025-06-04T15:00:00-04:00");
const now = new Date();

const puzzle = [
  [null, null, 'T', 'A', 'S', 'K', 'S', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
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

const clueNumbers = Array.from({ length: puzzle.length }, () => Array(puzzle[0].length).fill(null));
let clueNumber = 1;

const acrossClues = [];
const downClues = [];

const actualAcrossClues = [
  "1. Moore's '3Ts' include trust, tolerance, and this third word",
  "3. Military branch where Tidwell serves",
  "6. Blesse's innovation story started with a letter about this naval device",
  "7. Moore's approach for seeing wholes, not parts",
  "8. Durham's AI teammate: Acquisition's Collaborative Engine",
  "9. The figure who keeps lions, vendors, and contracting officers in sync",
  "10. Durham's favorite genre of virtual competition",
  "11. Tidwell's app that empowers innovation from the ground up",
  "12. What Evangelista says we must 'unlearn' to move forward",
  "13. Carroll's key to program survival amid challenges",
  "14. Jones says this quality makes digital natives fearless questioners",
  "15. Evangelista says these must fly off for change to begin (footwear)",
  "16. Carroll's competitive battlefield for acquisition talent",
  "17. Jones built one of these with her uncle in high school",
  "18. Hilger's programs show we deliver more than just products—we deliver ____",
  "19. Canady challenges leaders to go beyond just 'managing' to truly ____"
];

const actualDownClues = [
  "1. Carroll's key to program survival amid challenges",
  "2. Blesse's innovation story started with a letter about this naval device",
  "4. Durham's AI teammate: Acquisition's Collaborative Engine",
  "5. Jones says this quality makes digital natives fearless questioners",
  "6. What Evangelista says we must 'unlearn' to move forward",
  "7. Carroll compares acquisition's speed to these legendary ocean patterns",
  "8. Durham's favorite genre of virtual competition",
  "9. Moore's approach for seeing wholes, not parts",
  "10. Evangelista says these must fly off for change to begin (footwear)",
  "11. Palmieri's approach that pairs tech with real-world ops",
  "12. Jones built one of these with her uncle in high school",
  "13. The only type of mindset that can wield AI effectively, per Moore",
  "14. Palmieri compares DoD transformation to building this while designing the road",
  "15. Canady says this type of leadership earns trust",
  "16. Palmieri's group within OSD focused on digital/AI"
];

for (let row = 0; row < puzzle.length; row++) {
  for (let col = 0; col < puzzle[row].length; col++) {
    if (puzzle[row][col] === null) continue;
    const startsAcross =
      (col === 0 || puzzle[row][col - 1] === null) &&
      col + 1 < puzzle[row].length &&
      puzzle[row][col + 1] !== null;
    const startsDown =
      (row === 0 || puzzle[row - 1][col] === null) &&
      row + 1 < puzzle.length &&
      puzzle[row + 1][col] !== null;
    if (startsAcross || startsDown) {
      clueNumbers[row][col] = clueNumber;
      if (startsAcross) acrossClues.push(`${clueNumber}. ${actualAcrossClues[acrossClues.length] || "(Missing across clue)"}`);
      if (startsDown) downClues.push(`${clueNumber}. ${actualDownClues[downClues.length] || "(Missing down clue)"}`);
      clueNumber++;
    }
  }
}

const crosswordContainer = document.getElementById("crossword-container");
crosswordContainer.innerHTML = "";

puzzle.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    const div = document.createElement("div");
    if (cell === null) {
      div.className = "cell black-cell";
    } else {
      div.className = "cell";
      const input = document.createElement("input");
      input.maxLength = 1;
      input.dataset.answer = cell;
      div.appendChild(input);
      const clueNum = clueNumbers[rowIndex][colIndex];
      if (clueNum) {
        const number = document.createElement("span");
        number.className = "cell-number";
        number.innerText = clueNum;
        div.appendChild(number);
      }
    }
    crosswordContainer.appendChild(div);
  });
});

const acrossList = document.getElementById("across-clues");
const downList = document.getElementById("down-clues");

if (acrossList && downList) {
  acrossList.innerHTML = "";
  downList.innerHTML = "";
  acrossClues.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = clue;
    acrossList.appendChild(li);
  });
  downClues.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = clue;
    downList.appendChild(li);
  });
}
