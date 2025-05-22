// Corrected clues with exact numbering from the file
let clueMap = {
  1: "Moore's '3Ts' include trust, tolerance, and this third word", // TASKS
  2: "Naval metaphor for acquisition speed amid resistance", // FURIOUS  
  3: "Hilger's submarine story highlights leadership's impact on this", // CREW
  4: "Carroll's key to program survival amid challenges", // RESILIENCE
  5: "Canady says this type of leadership earns trust", // INTRUSIVE
  6: "Palmieri's group within OSD focused on digital/AI", // CDAO
  7: "This 'Bond' speaker equated leadership with 007 flair", // BLESSE
  8: "Military branch where Tidwell serves", // AIRFORCE (across)
  "8D": "Voice-of-the-force app guarantees this submission status", // ANONYMOUS (down)
  9: "Blesse's innovation story started with a letter about this naval device", // PERISCOPE
  10: "Moore's approach for seeing wholes, not parts", // SYSTEMS
  11: "Durham's AI teammate: Acquisition's Collaborative Engine", // ACE
  12: "The figure who keeps lions, vendors, and contracting officers in sync", // RINGMASTER
  13: "Jones says this quality makes digital natives fearless questioners", // CURIOSITY
  14: "What Evangelista says we must 'unlearn' to move forward", // RULES
  15: "The ability to read the room—and the person behind the problem", // EMOTIONAL
  17: "Durham Coached a Professional _______ Team", // ESPORTS
  18: "Hilger's programs show we deliver more than just products—we deliver ____", // PROGRAMS
  19: "Durham's favorite genre of virtual competition", // GAMING
  20: "Palmieri compares DoD transformation to building this while designing the road", // CAR
  21: "Tidwell's app that empowers innovation from the ground up", // VOICEAPP
  22: "Jones's generation is often described as this", // DIGITAL
  23: "Canady challenges leaders to go beyond just 'managing' to truly ____", // LEAD
  24: "What you do when 'Game Over' becomes a call to grow", // LEVELUP
  25: "Palmieri's approach that pairs tech with real-world ops", // EXPERIMENT
  26: "The only type of mindset that can wield AI effectively, per Moore", // HUMAN
  "26A": "Evangelista says these must fly off for change to begin (footwear)", // HEELS
  27: "Jones built one of these with her uncle in high school", // PC
  28: "Carroll compares acquisition's speed to these legendary ocean patterns", // WINDS
  29: "This natural cycle defines organizational growth and rebirth", // ADAPTIVE
  30: "Carroll likened acquisition to a three-ring ____", // CIRCUS
  "7S": "Blesse says this inspires agents to succeed like 007" // SAFETY
};// Puzzle Grid Data - Exact positions from Excel file
const puzzleGrid = [
  // Row 1 (index 0)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 2 (index 1) - RESILIENCE starts at column P (index 15)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'R','E','S','I','L','I','E','N','C','E',null,null,null],
  // Row 3 (index 2) - AIRFORCE starts at column I (index 8)
  [null,null,null,null,null,null,null,null,'A','I','R','F','O','R','C','E',null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 4 (index 3)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 5 (index 4) - PERISCOPE starts at column C (index 2)
  [null,null,'P','E','R','I','S','C','O','P','E',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 6 (index 5)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 7 (index 6) - SYSTEMS starts at column H (index 7)
  [null,null,null,null,null,null,null,'S','Y','S','T','E','M','S',null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 8 (index 7) - ACE starts at column B (index 1), CURIOSITY starts at column P (index 15)
  [null,'A','C','E',null,null,null,null,null,null,null,null,null,null,null,'C','U','R','I','O','S','I','T','Y',null,null,null,null],
  // Row 9 (index 8)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 10 (index 9) - RULES starts at column H (index 7), ESPORTS starts at column S (index 18)
  [null,null,null,null,null,null,null,'R','U','L','E','S',null,null,null,null,null,null,'E','S','P','O','R','T','S',null,null,null],
  // Row 11 (index 10) - GAMING starts at column A (index 0)
  ['G','A','M','I','N','G',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 12 (index 11)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 13 (index 12) - VOICEAPP starts at column A (index 0)
  ['V','O','I','C','E','A','P','P',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 14 (index 13) - DIGITAL starts at column J (index 9)
  [null,null,null,null,null,null,null,null,null,'D','I','G','I','T','A','L',null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 15 (index 14) - ADAPTIVE starts at column S (index 18)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'A','D','A','P','T','I','V','E',null,null],
  // Row 16 (index 15) - EXPERIMENT starts at column C (index 2)
  [null,null,'E','X','P','E','R','I','M','E','N','T',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 17 (index 16)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 18 (index 17) - HEELS starts at column H (index 7)
  [null,null,null,null,null,null,null,'H','E','E','L','S',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 19 (index 18)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 20 (index 19)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 21 (index 20) - PC starts at column C (index 2)
  [null,null,'P','C',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 22 (index 21) - WINDS starts at column F (index 5)
  [null,null,null,null,null,'W','I','N','D','S',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 23 (index 22)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
];

// Add vertical words
// HUMAN in column H (index 7) - need to determine start row
let humanStartRow = 4; // Start at row 5 to intersect with PERISCOPE
for (let i = 0; i < "HUMAN".length; i++) {
  if (humanStartRow + i < puzzleGrid.length) {
    puzzleGrid[humanStartRow + i][7] = "HUMAN"[i];
  }
}

// ANONYMOUS in column I (index 8) - start at row 2 to intersect with AIRFORCE
let anonymousStartRow = 1; // Start at row 2 to align with AIRFORCE
for (let i = 0; i < "ANONYMOUS".length; i++) {
  if (anonymousStartRow + i < puzzleGrid.length) {
    puzzleGrid[anonymousStartRow + i][8] = "ANONYMOUS"[i];
  }
}

// EMOTIONAL in column K (index 10) - start around row 4
let emotionalStartRow = 3;
for (let i = 0; i < "EMOTIONAL".length; i++) {
  if (emotionalStartRow + i < puzzleGrid.length) {
    puzzleGrid[emotionalStartRow + i][10] = "EMOTIONAL"[i];
  }
}

// FURIOUS in column N (index 13) - start around row 6
let furiousStartRow = 5;
for (let i = 0; i < "FURIOUS".length; i++) {
  if (furiousStartRow + i < puzzleGrid.length) {
    puzzleGrid[furiousStartRow + i][13] = "FURIOUS"[i];
  }
}

// SAFETY in column N (index 13) - start after FURIOUS (around row 13)
let safetyStartRow = 12;
for (let i = 0; i < "SAFETY".length; i++) {
  if (safetyStartRow + i < puzzleGrid.length) {
    puzzleGrid[safetyStartRow + i][13] = "SAFETY"[i];
  }
}

// CREW in column P (index 15) - start at row 1 (above RESILIENCE)
let crewStartRow = 0;
for (let i = 0; i < "CREW".length; i++) {
  if (crewStartRow + i < puzzleGrid.length) {
    puzzleGrid[crewStartRow + i][15] = "CREW"[i];
  }
}

// LEAD in column P (index 15) - start after CURIOSITY (around row 9)
let leadStartRow = 8;
for (let i = 0; i < "LEAD".length; i++) {
  if (leadStartRow + i < puzzleGrid.length) {
    puzzleGrid[leadStartRow + i][15] = "LEAD"[i];
  }
}

// INTRUSIVE in column S (index 18) - start around row 6
let intrusiveStartRow = 5;
for (let i = 0; i < "INTRUSIVE".length; i++) {
  if (intrusiveStartRow + i < puzzleGrid.length) {
    puzzleGrid[intrusiveStartRow + i][18] = "INTRUSIVE"[i];
  }
}

// PROGRAMS in column U (index 20) - start around row 8
let programsStartRow = 7;
for (let i = 0; i < "PROGRAMS".length; i++) {
  if (programsStartRow + i < puzzleGrid.length) {
    puzzleGrid[programsStartRow + i][20] = "PROGRAMS"[i];
  }
}

// LEVELUP in column C (index 2) - start at row 15
let levelupStartRow = 14; // Row 15 is index 14
for (let i = 0; i < "LEVELUP".length; i++) {
  if (levelupStartRow + i < puzzleGrid.length) {
    puzzleGrid[levelupStartRow + i][2] = "LEVELUP"[i];
  }
}

// RINGMASTER in column F (index 5) - start at row 8
let ringmasterStartRow = 7; // Row 8 is index 7
for (let i = 0; i < "RINGMASTER".length; i++) {
  if (ringmasterStartRow + i < puzzleGrid.length) {
    puzzleGrid[ringmasterStartRow + i][5] = "RINGMASTER"[i];
  }
}

// TASKS in column G (index 6) - start at row 1
let tasksStartRow = 0; // Row 1 is index 0
for (let i = 0; i < "TASKS".length; i++) {
  if (tasksStartRow + i < puzzleGrid.length) {
    puzzleGrid[tasksStartRow + i][6] = "TASKS"[i];
  }
}

// CDAO in column X (index 23) - start around row 2
let cdaoStartRow = 1;
for (let i = 0; i < "CDAO".length; i++) {
  if (cdaoStartRow + i < puzzleGrid.length) {
    puzzleGrid[cdaoStartRow + i][23] = "CDAO"[i];
  }
}

// CIRCUS in column X (index 23) - start at row 14 to intersect with ADAPTIVE at "I"
let circusStartRow = 13; // Row 14 is index 13
for (let i = 0; i < "CIRCUS".length; i++) {
  if (circusStartRow + i < puzzleGrid.length) {
    puzzleGrid[circusStartRow + i][23] = "CIRCUS"[i];
  }
}

// Crossword functionality
const clueNumbers = Array.from({ length: puzzleGrid.length }, () => Array(puzzleGrid[0].length).fill(null));
let clueNumber = 1;

const acrossClues = [];
const downClues = [];

// Corrected clues with proper numbering
clueMap = {
  1: "Moore's '3Ts' include trust, tolerance, and this third word", // TASKS
  2: "Naval metaphor for acquisition speed amid resistance", // FURIOUS  
  3: "Hilger's submarine story highlights leadership's impact on this", // CREW
  4: "Carroll's key to program survival amid challenges", // RESILIENCE
  5: "Canady says this type of leadership earns trust", // INTRUSIVE
  6: "Palmieri's group within OSD focused on digital/AI", // CDAO
  7: "Blesse says this inspires agents to succeed like 007", // SAFETY
  8: "Military branch where Tidwell serves", // AIRFORCE (across)
  "8D": "Voice-of-the-force app guarantees this submission status", // ANONYMOUS (down)
  9: "Blesse's innovation story started with a letter about this naval device", // PERISCOPE
  10: "Moore's approach for seeing wholes, not parts", // SYSTEMS
  11: "Durham's AI teammate: Acquisition's Collaborative Engine", // ACE
  12: "The figure who keeps lions, vendors, and contracting officers in sync", // RINGMASTER
  13: "Jones says this quality makes digital natives fearless questioners", // CURIOSITY
  14: "What Evangelista says we must 'unlearn' to move forward", // RULES
  15: "The ability to read the room—and the person behind the problem", // EMOTIONAL
  17: "Durham Coached a Professional _______ Team", // ESPORTS
  18: "Hilger's programs show we deliver more than just products—we deliver ____", // PROGRAMS
  19: "Durham's favorite genre of virtual competition", // GAMING
  20: "Palmieri compares DoD transformation to building this while designing the road", // CAR
  21: "Tidwell's app that empowers innovation from the ground up", // VOICEAPP
  22: "Jones's generation is often described as this", // DIGITAL
  23: "Canady challenges leaders to go beyond just 'managing' to truly ____", // LEAD
  24: "What you do when 'Game Over' becomes a call to grow", // LEVELUP
  25: "Palmieri's approach that pairs tech with real-world ops", // EXPERIMENT
  26: "Evangelista says these must fly off for change to begin (footwear)", // HEELS
  "26D": "The only type of mindset that can wield AI effectively, per Moore", // HUMAN
  27: "Jones built one of these with her uncle in high school", // PC
  28: "Carroll compares acquisition's speed to these legendary ocean patterns", // WINDS
  29: "This natural cycle defines organizational growth and rebirth", // ADAPTIVE
  30: "Carroll likened acquisition to a three-ring ____" // CIRCUS
};

// We'll populate these arrays during clue number generation
const actualAcrossClues = [];
const actualDownClues = [];

// Generate clue numbers for the grid and use the correct clues
for (let row = 0; row < puzzleGrid.length; row++) {
  for (let col = 0; col < puzzleGrid[row].length; col++) {
    if (puzzleGrid[row][col] === null) continue;
    
    const startsAcross =
      (col === 0 || puzzleGrid[row][col - 1] === null) &&
      col + 1 < puzzleGrid[row].length &&
      puzzleGrid[row][col + 1] !== null;
    
    const startsDown =
      (row === 0 || puzzleGrid[row - 1][col] === null) &&
      row + 1 < puzzleGrid.length &&
      puzzleGrid[row + 1][col] !== null;
    
    if (startsAcross || startsDown) {
      clueNumbers[row][col] = clueNumber;
      
      // Use the correct clues from our clueMap
      if (startsAcross) {
        const clueText = clueMap[clueNumber] || clueMap[`${clueNumber}`] || "Missing across clue";
        acrossClues.push(`${clueNumber}. ${clueText}`);
      }
      if (startsDown) {
        const clueText = clueMap[`${clueNumber}D`] || clueMap[clueNumber] || "Missing down clue";
        downClues.push(`${clueNumber}. ${clueText}`);
      }
      clueNumber++;
    }
  }
}

// Crossword rendering function
function renderCrossword() {
  const crosswordContainer = document.getElementById("crossword-container");
  if (!crosswordContainer) return;
  
  crosswordContainer.innerHTML = "";

  puzzleGrid.forEach((row, rowIndex) => {
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
}

// Clue list rendering function
function renderClues() {
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
}

// Initialize crossword when DOM is ready
function initializeCrossword() {
  console.log('Initializing crossword...');
  renderCrossword();
  renderClues();
  console.log('Crossword initialized successfully!');
}

// Auto-initialize if running in browser
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCrossword);
  } else {
    initializeCrossword();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { puzzleGrid, renderCrossword, renderClues, initializeCrossword };
}

// For browser usage
if (typeof window !== 'undefined') {
  window.puzzleGrid = puzzleGrid;
  window.renderCrossword = renderCrossword;
  window.renderClues = renderClues;
  window.initializeCrossword = initializeCrossword;
}

console.log('Crossword script loaded successfully!');
