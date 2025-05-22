// Puzzle Grid Data - Built from Excel screenshot
// Creating a 25-row by 30-column grid to match Excel
const puzzleGrid = Array.from({ length: 25 }, () => Array(30).fill(null));

// Add horizontal words based on Excel layout
// Row 2: RESILIENCE (columns P-X, indices 15-23)
const resilience = "RESILIENCE";
for (let i = 0; i < resilience.length; i++) {
  puzzleGrid[1][15 + i] = resilience[i]; // Row 2 is index 1
}

// Row 3: AIRFORCE (columns I-P, indices 8-15)  
const airforce = "AIRFORCE";
for (let i = 0; i < airforce.length; i++) {
  puzzleGrid[2][8 + i] = airforce[i]; // Row 3 is index 2
}

// Row 5: PERISCOPE (columns C-K, indices 2-10)
const periscope = "PERISCOPE";
for (let i = 0; i < periscope.length; i++) {
  puzzleGrid[4][2 + i] = periscope[i]; // Row 5 is index 4
}

// Row 7: SYSTEMS (columns H-N, indices 7-13)
const systems = "SYSTEMS";
for (let i = 0; i < systems.length; i++) {
  puzzleGrid[6][7 + i] = systems[i]; // Row 7 is index 6
}

// Row 8: ACE (columns B-D, indices 1-3)
const ace = "ACE";
for (let i = 0; i < ace.length; i++) {
  puzzleGrid[7][1 + i] = ace[i]; // Row 8 is index 7
}

// Row 8: CURIOSITY (columns P-X, indices 15-23)
const curiosity = "CURIOSITY";
for (let i = 0; i < curiosity.length; i++) {
  puzzleGrid[7][15 + i] = curiosity[i]; // Row 8 is index 7
}

// Row 10: RULES (columns H-L, indices 7-11)
const rules = "RULES";
for (let i = 0; i < rules.length; i++) {
  puzzleGrid[9][7 + i] = rules[i]; // Row 10 is index 9
}

// Row 10: ESPORTS (columns S-X, indices 18-23)
const esports = "ESPORTS";
for (let i = 0; i < esports.length; i++) {
  puzzleGrid[9][18 + i] = esports[i]; // Row 10 is index 9
}

// Row 11: GAMING (columns B-G, indices 1-6)
const gaming = "GAMING";
for (let i = 0; i < gaming.length; i++) {
  puzzleGrid[10][1 + i] = gaming[i]; // Row 11 is index 10
}

// Row 13: VOICEAPP (columns A-H, indices 0-7)
const voiceapp = "VOICEAPP";
for (let i = 0; i < voiceapp.length; i++) {
  puzzleGrid[12][0 + i] = voiceapp[i]; // Row 13 is index 12
}

// Row 14: DIGITAL (columns J-O, indices 9-14)
const digital = "DIGITAL";
for (let i = 0; i < digital.length; i++) {
  puzzleGrid[13][9 + i] = digital[i]; // Row 14 is index 13
}

// Row 15: ADAPTIVE (columns S-Y, indices 18-24)
const adaptive = "ADAPTIVE";
for (let i = 0; i < adaptive.length; i++) {
  puzzleGrid[14][18 + i] = adaptive[i]; // Row 15 is index 14
}

// Row 16: EXPERIMENT (columns C-M, indices 2-12)
const experiment = "EXPERIMENT";
for (let i = 0; i < experiment.length; i++) {
  puzzleGrid[15][2 + i] = experiment[i]; // Row 16 is index 15
}

// Row 18: HEELS (columns H-L, indices 7-11)
const heels = "HEELS";
for (let i = 0; i < heels.length; i++) {
  puzzleGrid[17][7 + i] = heels[i]; // Row 18 is index 17
}

// Row 21: PC (columns C-D, indices 2-3)
const pc = "PC";
for (let i = 0; i < pc.length; i++) {
  puzzleGrid[20][2 + i] = pc[i]; // Row 21 is index 20
}

// Row 22: WINDS (columns F-J, indices 5-9)
const winds = "WINDS";
for (let i = 0; i < winds.length; i++) {
  puzzleGrid[21][5 + i] = winds[i]; // Row 22 is index 21
}

// Add vertical words based on Excel layout
// Column C: LEVELUP (starting row 15, index 14)
const levelup = "LEVELUP";
for (let i = 0; i < levelup.length; i++) {
  if (14 + i < puzzleGrid.length) {
    puzzleGrid[14 + i][2] = levelup[i]; // Column C is index 2
  }
}

// Column F: RINGMASTER (starting row 7, index 6)
const ringmaster = "RINGMASTER";
for (let i = 0; i < ringmaster.length; i++) {
  if (6 + i < puzzleGrid.length) {
    puzzleGrid[6 + i][5] = ringmaster[i]; // Column F is index 5
  }
}

// Column G: TASKS (starting row 1, index 0)
const tasks = "TASKS";
for (let i = 0; i < tasks.length; i++) {
  if (0 + i < puzzleGrid.length) {
    puzzleGrid[0 + i][6] = tasks[i]; // Column G is index 6
  }
}

// Column H: HUMAN (starting row 5, index 4)
const human = "HUMAN";
for (let i = 0; i < human.length; i++) {
  if (4 + i < puzzleGrid.length) {
    puzzleGrid[4 + i][7] = human[i]; // Column H is index 7
  }
}

// Column I: ANONYMOUS (starting row 3, index 2)
const anonymous = "ANONYMOUS";
for (let i = 0; i < anonymous.length; i++) {
  if (2 + i < puzzleGrid.length) {
    puzzleGrid[2 + i][8] = anonymous[i]; // Column I is index 8
  }
}

// Column K: EMOTIONAL (starting row 4, index 3)
const emotional = "EMOTIONAL";
for (let i = 0; i < emotional.length; i++) {
  if (3 + i < puzzleGrid.length) {
    puzzleGrid[3 + i][10] = emotional[i]; // Column K is index 10
  }
}

// Column N: FURIOUS (starting row 2, index 1)
const furious = "FURIOUS";
for (let i = 0; i < furious.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][13] = furious[i]; // Column N is index 13
  }
}

// Column N: SAFETY (starting row 14, index 13)
const safety = "SAFETY";
for (let i = 0; i < safety.length; i++) {
  if (13 + i < puzzleGrid.length) {
    puzzleGrid[13 + i][13] = safety[i]; // Column N is index 13
  }
}

// Column P: CREW (starting row 1, index 0)
const crew = "CREW";
for (let i = 0; i < crew.length; i++) {
  if (0 + i < puzzleGrid.length) {
    puzzleGrid[0 + i][15] = crew[i]; // Column P is index 15
  }
}

// Column P: LEAD (starting row 14, index 13)
const lead = "LEAD";
for (let i = 0; i < lead.length; i++) {
  if (13 + i < puzzleGrid.length) {
    puzzleGrid[13 + i][15] = lead[i]; // Column P is index 15
  }
}

// Column S: INTRUSIVE (starting row 2, index 1)
const intrusive = "INTRUSIVE";
for (let i = 0; i < intrusive.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][18] = intrusive[i]; // Column S is index 18
  }
}

// Column U: PROGRAMS (starting row 10, index 9)
const programs = "PROGRAMS";
for (let i = 0; i < programs.length; i++) {
  if (9 + i < puzzleGrid.length) {
    puzzleGrid[9 + i][20] = programs[i]; // Column U is index 20
  }
}

// Column X: CDAO (starting row 2, index 1)
const cdao = "CDAO";
for (let i = 0; i < cdao.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][23] = cdao[i]; // Column X is index 23
  }
}

// Column X: CIRCUS (starting row 15, index 14)
const circus = "CIRCUS";
for (let i = 0; i < circus.length; i++) {
  if (14 + i < puzzleGrid.length) {
    puzzleGrid[14 + i][23] = circus[i]; // Column X is index 23
  }
}

// Clues with exact numbering from your file
const clueMap = {
  1: "Moore's '3Ts' include trust, tolerance, and this third word", // TASKS
  2: "Naval metaphor for acquisition speed amid resistance", // FURIOUS  
  3: "Hilger's submarine story highlights leadership's impact on this", // CREW
  4: "Carroll's key to program survival amid challenges", // RESILIENCE
  5: "Canady says this type of leadership earns trust", // INTRUSIVE
  6: "Palmieri's group within OSD focused on digital/AI", // CDAO
  7: "This 'Bond' speaker equated leadership with 007 flair", // (need to determine)
  8: "Military branch where Tidwell serves", // AIRFORCE
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
  20: "Palmieri compares DoD transformation to building this while designing the road", // (need to determine)
  21: "Tidwell's app that empowers innovation from the ground up", // VOICEAPP
  22: "Jones's generation is often described as this", // DIGITAL
  23: "Canady challenges leaders to go beyond just 'managing' to truly ____", // LEAD
  24: "What you do when 'Game Over' becomes a call to grow", // LEVELUP
  25: "Palmieri's approach that pairs tech with real-world ops", // EXPERIMENT
  26: "Evangelista says these must fly off for change to begin (footwear)", // HEELS
  27: "Jones built one of these with her uncle in high school", // PC
  28: "Carroll compares acquisition's speed to these legendary ocean patterns", // WINDS
  29: "This natural cycle defines organizational growth and rebirth", // ADAPTIVE
  30: "Carroll likened acquisition to a three-ring ____" // CIRCUS
};

// Generate clue numbers and organize clues
const clueNumbers = Array.from({ length: puzzleGrid.length }, () => Array(30).fill(null));
let clueNumber = 1;
const acrossClues = [];
const downClues = [];

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
      
      if (startsAcross) {
        const clueText = clueMap[clueNumber] || "Missing across clue";
        acrossClues.push(`${clueNumber}. ${clueText}`);
      }
      if (startsDown) {
        const clueText = clueMap[clueNumber] || "Missing down clue";
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

// Initialize crossword
function initializeCrossword() {
  console.log('Initializing crossword...');
  renderCrossword();
  renderClues();
  console.log('Crossword initialized successfully!');
}

// Auto-initialize
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCrossword);
  } else {
    initializeCrossword();
  }
}

// Exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { puzzleGrid, renderCrossword, renderClues, initializeCrossword };
}

if (typeof window !== 'undefined') {
  window.puzzleGrid = puzzleGrid;
  window.renderCrossword = renderCrossword;
  window.renderClues = renderClues;
  window.initializeCrossword = initializeCrossword;
}

console.log('Crossword script loaded successfully!');
