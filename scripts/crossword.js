// Crossword puzzle setup for TEDxDAU 2025
const revealDate = new Date("2025-06-04T15:00:00-04:00");
const now = new Date();

const grid = [
  [1, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [2, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', 3, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', 4, '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [5, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 6, '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [7, '', '', '', '', '', '', '', '', 8, '', '', '', '', '', '', '', 9, '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [10, '', '', '', '', '', '', '', 11, '', '', '', '', '', '', '', '', '', 12, '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [13, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 14, '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  [15, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
];

const clues = {
  across: [
    { number: 1, clue: "Military branch where Tidwell serves" },
    { number: 2, clue: "The ability to read the room—and the person behind the problem" },
    { number: 3, clue: "Moore's approach for seeing wholes, not parts" },
    { number: 4, clue: "Evangelista says these must fly off for change to begin (footwear)" },
    { number: 5, clue: "The figure who keeps lions, vendors, and contracting officers in sync" },
    { number: 6, clue: "Naval metaphor for acquisition speed amid resistance" },
    { number: 7, clue: "Voice-of-the-force app guarantees this submission status" },
    { number: 8, clue: "Durham's favorite genre of virtual competition" },
    { number: 9, clue: "Blesse says this inspires agents to succeed like 007" },
    { number: 10, clue: "What you do when 'Game Over' becomes a call to grow" },
    { number: 11, clue: "Canady says this type of leadership earns trust" },
    { number: 12, clue: "Palmieri's group within OSD focused on digital/AI" },
    { number: 13, clue: "Blesse's innovation story started with a letter about this naval device" },
    { number: 14, clue: "Jones's generation is often described as this" },
    { number: 15, clue: "Hilger's submarine story highlights leadership's impact on this" },
  ],
  down: [
    { number: 1, clue: "Durham's AI teammate: Acquisition's Collaborative Engine" },
    { number: 2, clue: "Carroll's key to program survival amid challenges" },
    { number: 3, clue: "Palmieri's approach that pairs tech with real-world ops" },
    { number: 4, clue: "This 'Bond' speaker equated leadership with 007 flair" },
    { number: 5, clue: "Moore's '3Ts' include trust, tolerance, and this third word" },
    { number: 6, clue: "Jones says this quality makes digital natives fearless questioners" },
    { number: 7, clue: "Palmieri compares DoD transformation to building this while designing the road" },
    { number: 8, clue: "Tidwell's app that empowers innovation from the ground up" },
    { number: 9, clue: "Hilger's programs show we deliver more than just products—we deliver ____" },
    { number: 10, clue: "Carroll's competitive battlefield for acquisition talent" },
    { number: 11, clue: "The only type of mindset that can wield AI effectively, per Moore" },
    { number: 12, clue: "Jones built one of these with her uncle in high school" },
    { number: 13, clue: "What Evangelista says we must 'unlearn' to move forward" },
    { number: 14, clue: "Carroll compares acquisition's speed to these legendary ocean patterns" },
    { number: 15, clue: "Canady challenges leaders to go beyond just 'managing' to truly ____" }
  ]
};

window.onload = () => {
  const crosswordContainer = document.getElementById("crossword-container");
  const revealButton = document.querySelector("button:nth-child(2)");

  if (now < revealDate) {
    revealButton.style.display = "none";
  }

  // Render grid based on layout
  grid.forEach(row => {
    row.forEach(cell => {
      const div = document.createElement("div");
      div.className = cell === null ? "cell black-cell" : "cell";
      if (cell !== null && cell !== '') {
        const input = document.createElement("input");
        input.maxLength = 1;
        div.appendChild(input);
        const number = document.createElement("span");
        number.className = "cell-number";
        number.innerText = cell;
        div.appendChild(number);
      } else if (cell !== null) {
        const input = document.createElement("input");
        input.maxLength = 1;
        div.appendChild(input);
      }
      crosswordContainer.appendChild(div);
    });
  });

  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");
  clues.across.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = `${clue.number}. ${clue.clue}`;
    acrossList.appendChild(li);
  });
  clues.down.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = `${clue.number}. ${clue.clue}`;
    downList.appendChild(li);
  });
};

function checkAnswers() {
  alert("Check logic goes here.");
}

function revealAnswers() {
  alert("Revealing the correct answers!");
}

function resetPuzzle() {
  const inputs = document.querySelectorAll(".cell input");
  inputs.forEach(input => {
    input.value = "";
    input.style.backgroundColor = "white";
  });
  document.getElementById("completion-message").classList.add("hidden");
}
