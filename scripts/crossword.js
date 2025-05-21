// Crossword puzzle setup for TEDxDAU 2025
const revealDate = new Date("2025-06-04T15:00:00-04:00");
const now = new Date();

const grid = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 9, 0],
  [10, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0],
  [15, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0],
  [18, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0],
  [21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const clues = {
  across: [
    "Military branch where Tidwell serves",
    "The ability to read the room—and the person behind the problem",
    "Moore's approach for seeing wholes, not parts",
    "Evangelista says these must fly off for change to begin (footwear)",
    "The figure who keeps lions, vendors, and contracting officers in sync",
    "This natural cycle defines organizational growth and rebirth",
    "Naval metaphor for acquisition speed amid resistance",
    "Voice-of-the-force app guarantees this submission status",
    "Durham's favorite genre of virtual competition",
    "Blesse says this inspires agents to succeed like 007",
    "What you do when 'Game Over' becomes a call to grow",
    "Canady says this type of leadership earns trust",
    "Palmieri's group within OSD focused on digital/AI",
    "Blesse's innovation story started with a letter about this naval device",
    "Jones's generation is often described as this",
    "Hilger's submarine story highlights leadership's impact on this",
  ],
  down: [
    "Durham's AI teammate: Acquisition's Collaborative Engine",
    "Carroll's key to program survival amid challenges",
    "Palmieri's approach that pairs tech with real-world ops",
    "This 'Bond' speaker equated leadership with 007 flair",
    "Moore's '3Ts' include trust, tolerance, and this third word",
    "Jones says this quality makes digital natives fearless questioners",
    "Palmieri compares DoD transformation to building this while designing the road",
    "Tidwell's app that empowers innovation from the ground up",
    "Hilger's programs show we deliver more than just products—we deliver ____",
    "Carroll's competitive battlefield for acquisition talent",
    "The only type of mindset that can wield AI effectively, per Moore",
    "Jones built one of these with her uncle in high school",
    "What Evangelista says we must 'unlearn' to move forward",
    "Carroll compares acquisition's speed to these legendary ocean patterns",
    "Canady challenges leaders to go beyond just 'managing' to truly ____"
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
      if (cell !== null) {
        const input = document.createElement("input");
        input.maxLength = 1;
        div.appendChild(input);
        if (cell > 0) {
          const number = document.createElement("span");
          number.className = "cell-number";
          number.innerText = cell;
          div.appendChild(number);
        }
      }
      crosswordContainer.appendChild(div);
    });
  });

  const acrossList = document.getElementById("across-clues");
  const downList = document.getElementById("down-clues");
  clues.across.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = clue;
    acrossList.appendChild(li);
  });
  clues.down.forEach(clue => {
    const li = document.createElement("li");
    li.innerText = clue;
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
