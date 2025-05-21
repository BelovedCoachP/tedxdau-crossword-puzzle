// Crossword puzzle setup for TEDxDAU 2025
const revealDate = new Date("2025-06-04T15:00:00-04:00");
const now = new Date();

const grid = [
  // 21x21 grid layout using null for black cells
  // Numbers correspond to clue numbers where words begin
  [1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [3,  0,  0,  0,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  0,  0,  0,  6,  0,  0,  0,  0,  0,  0,  0],
  [7,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  8,  0,  0,  0,  0,  0,  0,  9,  0],
  [10, 0,  0,  0,  0,  0,  0,  0,  0, 11,  0,  0,  0,  0, 12,  0,  0,  0, 13,  0,  0],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14,  0,  0,  0,  0,  0],
  [15, 0,  0,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0,  0, 17,  0,  0,  0],
  [18, 0,  0,  0,  0,  0,  0,  0, 19,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20,  0,  0],
  [21, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 22],
  [0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 23,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [0,  0,  0,  0,  0,  0,  0, 24,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [25, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
];

const clues = {
  across: [
    "1. Military branch where Tidwell serves",
    "3. The ability to read the room—and the person behind the problem",
    "5. Moore's approach for seeing wholes, not parts",
    "6. Evangelista says these must fly off for change to begin (footwear)",
    "9. The figure who keeps lions, vendors, and contracting officers in sync",
    "11. This natural cycle defines organizational growth and rebirth",
    "12. Naval metaphor for acquisition speed amid resistance",
    "14. Voice-of-the-force app guarantees this submission status",
    "16. Durham's favorite genre of virtual competition",
    "17. Blesse says this inspires agents to succeed like 007",
    "18. What you do when 'Game Over' becomes a call to grow",
    "19. Canady says this type of leadership earns trust",
    "20. Palmieri's group within OSD focused on digital/AI",
    "21. Blesse's innovation story started with a letter about this naval device",
    "24. Jones's generation is often described as this",
    "25. Hilger's submarine story highlights leadership's impact on this",
  ],
  down: [
    "1. Durham's AI teammate: Acquisition's Collaborative Engine",
    "2. Carroll's key to program survival amid challenges",
    "4. Palmieri's approach that pairs tech with real-world ops",
    "7. This 'Bond' speaker equated leadership with 007 flair",
    "8. Moore's '3Ts' include trust, tolerance, and this third word",
    "10. Jones says this quality makes digital natives fearless questioners",
    "13. Palmieri compares DoD transformation to building this while designing the road",
    "15. Tidwell's app that empowers innovation from the ground up",
    "22. Hilger's programs show we deliver more than just products—we deliver ____",
    "23. Carroll's competitive battlefield for acquisition talent",
    "26. The only type of mindset that can wield AI effectively, per Moore",
    "27. Jones built one of these with her uncle in high school",
    "28. What Evangelista says we must 'unlearn' to move forward",
    "29. Carroll compares acquisition's speed to these legendary ocean patterns",
    "30. Canady challenges leaders to go beyond just 'managing' to truly ____"
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
