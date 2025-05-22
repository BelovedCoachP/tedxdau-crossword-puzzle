// Puzzle Grid Data - Built from numbered Excel screenshot
// Creating a 25-row by 30-column grid to match Excel
const puzzleGrid = Array.from({ length: 25 }, () => Array(30).fill(null));

// Manually set clue numbers based on Excel layout
const clueNumbers = Array.from({ length: 25 }, () => Array(30).fill(null));

// Add horizontal words with their clue numbers from Excel
// 1.T TASKS (Column G, Row 1) - but this appears to be vertical
// 2.F FURIOUS (Column N, Row 2) - but this appears to be vertical  
// 3.C CREW (Column P, Row 1) - but this appears to be vertical
// 4.R RESILIENCE (Row 2, Column P-X)
const resilience = "RESILIENCE";
clueNumbers[1][15] = 4; // Row 2, Column P
for (let i = 0; i < resilience.length; i++) {
  puzzleGrid[1][15 + i] = resilience[i];
}

// 5.I INTRUSIVE (Column S, Row 2) - but this appears to be vertical
// 6.C CDAO (Column X, Row 2) - but this appears to be vertical
// 7.B BLESSE (Column B, Row 3) - but this appears to be vertical
// 8.A AIRFORCE (Row 3, Column I-P)
const airforce = "AIRFORCE";
clueNumbers[2][8] = 8; // Row 3, Column I
for (let i = 0; i < airforce.length; i++) {
  puzzleGrid[2][8 + i] = airforce[i];
}

// 9.P PERISCOPE (Row 5, Column C-K)
const periscope = "PERISCOPE";
clueNumbers[4][2] = 9; // Row 5, Column C
for (let i = 0; i < periscope.length; i++) {
  puzzleGrid[4][2 + i] = periscope[i];
}

// 10.S SYSTEMS (Row 7, Column H-N)
const systems = "SYSTEMS";
clueNumbers[6][7] = 10; // Row 7, Column H
for (let i = 0; i < systems.length; i++) {
  puzzleGrid[6][7 + i] = systems[i];
}

// 11.A ACE (Row 8, Column B-D)
const ace = "ACE";
clueNumbers[7][1] = 11; // Row 8, Column B
for (let i = 0; i < ace.length; i++) {
  puzzleGrid[7][1 + i] = ace[i];
}

// 13.C CURIOSITY (Row 8, Column P-X)
const curiosity = "CURIOSITY";
clueNumbers[7][15] = 13; // Row 8, Column P
for (let i = 0; i < curiosity.length; i++) {
  puzzleGrid[7][15 + i] = curiosity[i];
}

// 14.R RULES (Row 10, Column H-L)
const rules = "RULES";
clueNumbers[9][7] = 14; // Row 10, Column H
for (let i = 0; i < rules.length; i++) {
  puzzleGrid[9][7 + i] = rules[i];
}

// 17.E ESPORTS (Row 10, Column S-X)
const esports = "ESPORTS";
clueNumbers[9][18] = 17; // Row 10, Column S
for (let i = 0; i < esports.length; i++) {
  puzzleGrid[9][18 + i] = esports[i];
}

// 19.G GAMING (Row 11, Column B-G) - though number shows as 19.G
const gaming = "GAMING";
clueNumbers[10][1] = 19; // Row 11, Column B
for (let i = 0; i < gaming.length; i++) {
  puzzleGrid[10][1 + i] = gaming[i];
}

// 21.V VOICEAPP (Row 13, Column A-H)
const voiceapp = "VOICEAPP";
clueNumbers[12][0] = 21; // Row 13, Column A
for (let i = 0; i < voiceapp.length; i++) {
  puzzleGrid[12][0 + i] = voiceapp[i];
}

// 22.D DIGITAL (Row 14, Column J-O)
const digital = "DIGITAL";
clueNumbers[13][9] = 22; // Row 14, Column J
for (let i = 0; i < digital.length; i++) {
  puzzleGrid[13][9 + i] = digital[i];
}

// 23.L LEAD (Column P, Row 14) - appears to be vertical
// 24.L LEVELUP (Column C, Row 15) - appears to be vertical
// 25.E EXPERIMENT (Row 16, Column C-M)
const experiment = "EXPERIMENT";
clueNumbers[15][2] = 25; // Row 16, Column C
for (let i = 0; i < experiment.length; i++) {
  puzzleGrid[15][2 + i] = experiment[i];
}

// 26.H HEELS (Row 18, Column H-L)
const heels = "HEELS";
clueNumbers[17][7] = 26; // Row 18, Column H
for (let i = 0; i < heels.length; i++) {
  puzzleGrid[17][7 + i] = heels[i];
}

// 27.P PC (Row 21, Column C-D)
const pc = "PC";
clueNumbers[20][2] = 27; // Row 21, Column C
for (let i = 0; i < pc.length; i++) {
  puzzleGrid[20][2 + i] = pc[i];
}

// 28.W WINDS (Row 22, Column F-J)
const winds = "WINDS";
clueNumbers[21][5] = 28; // Row 22, Column F
for (let i = 0; i < winds.length; i++) {
  puzzleGrid[21][5 + i] = winds[i];
}

// 29.A ADAPTIVE (Row 15, Column S-Y)
const adaptive = "ADAPTIVE";
clueNumbers[14][18] = 29; // Row 15, Column S
for (let i = 0; i < adaptive.length; i++) {
  puzzleGrid[14][18 + i] = adaptive[i];
}

// 30.C CIRCUS (Column X, Row 15) - appears to be vertical

// Now add vertical words with their numbers
// 1.T TASKS (Column G, starting Row 1)
const tasks = "TASKS";
clueNumbers[0][6] = 1; // Row 1, Column G
for (let i = 0; i < tasks.length; i++) {
  if (0 + i < puzzleGrid.length) {
    puzzleGrid[0 + i][6] = tasks[i];
  }
}

// 2.F FURIOUS (Column N, starting Row 2)
const furious = "FURIOUS";
clueNumbers[1][13] = 2; // Row 2, Column N
for (let i = 0; i < furious.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][13] = furious[i];
  }
}

// 3.C CREW (Column P, starting Row 1)
const crew = "CREW";
clueNumbers[0][15] = 3; // Row 1, Column P
for (let i = 0; i < crew.length; i++) {
  if (0 + i < puzzleGrid.length) {
    puzzleGrid[0 + i][15] = crew[i];
  }
}

// 5.I INTRUSIVE (Column S, starting Row 2)
const intrusive = "INTRUSIVE";
clueNumbers[1][18] = 5; // Row 2, Column S
for (let i = 0; i < intrusive.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][18] = intrusive[i];
  }
}

// 6.C CDAO (Column X, starting Row 2)
const cdao = "CDAO";
clueNumbers[1][23] = 6; // Row 2, Column X
for (let i = 0; i < cdao.length; i++) {
  if (1 + i < puzzleGrid.length) {
    puzzleGrid[1 + i][23] = cdao[i];
  }
}

// 7.B BLESSE (Column B, starting Row 3)
const blesse = "BLESSE";
clueNumbers[2][1] = 7; // Row 3, Column B
for (let i = 0; i < blesse.length; i++) {
  if (2 + i < puzzleGrid.length) {
    puzzleGrid[2 + i][1] = blesse[i];
  }
}

// 12.R RINGMASTER (Column F, starting Row 7)
const ringmaster = "RINGMASTER";
clueNumbers[6][5] = 12; // Row 7, Column F
for (let i = 0; i < ringmaster.length; i++) {
  if (6 + i < puzzleGrid.length) {
    puzzleGrid[6 + i][5] = ringmaster[i];
  }
}

// 15.E EMOTIONAL (Column K, starting Row 10)
const emotional = "EMOTIONAL";
clueNumbers[9][10] = 15; // Row 10, Column K
for (let i = 0; i < emotional.length; i++) {
  if (9 + i < puzzleGrid.length) {
    puzzleGrid[9 + i][10] = emotional[i];
  }
}

// 18.P PROGRAMS (Column U, starting Row 10)
const programs = "PROGRAMS";
clueNumbers[9][20] = 18; // Row 10, Column U
for (let i = 0; i < programs.length; i++) {
  if (9 + i < puzzleGrid.length) {
    puzzleGrid[9 + i][20] = programs[i];
  }
}

// 20.C CAR (appears to be a short horizontal word)
// Need to determine position

// 23.L LEAD (Column P, starting Row 14)
const lead = "LEAD";
clueNumbers[13][15] = 23; // Row 14, Column P
for (let i = 0; i < lead.length; i++) {
  if (13 + i < puzzleGrid.length) {
    puzzleGrid[13 + i][15] = lead[i];
  }
}

// 24.L LEVELUP (Column C, starting Row 15)
const levelup = "LEVELUP";
clueNumbers[14][2] = 24; // Row 15, Column C
for (let i = 0; i < levelup.length; i++) {
  if (14 + i < puzzleGrid.length) {
    puzzleGrid[14 + i][2] = levelup[i];
  }
}

// 30.C CIRCUS (Column X, starting Row 15)
const circus = "CIRCUS";
clueNumbers[14][23] = 30; // Row 15, Column X
for (let i = 0; i < circus.length; i++) {
  if (14 + i < puzzleGrid.length) {
    puzzleGrid[14 + i][23] = circus[i];
  }
}

// Add missing words that I can see in the grid
// HUMAN (Column H) - need to add number
const human = "HUMAN";
for (let i = 0; i < human.length; i++) {
  if (4 + i < puzzleGrid.length) {
    puzzleGrid[4 + i][7] = human[i];
  }
}

// ANONYMOUS (Column I) - need to add number  
const anonymous = "ANONYMOUS";
for (let i = 0; i < anonymous.length; i++) {
  if (2 + i < puzzleGrid.length) {
    puzzleGrid[2 + i][8] = anonymous[i];
  }
}

// SAFETY (Column N, lower part) - need to add number
const safety = "SAFETY";
for (let i = 0; i < safety.length; i++) {
  if (13 + i < puzzleGrid.length) {
    puzzleGrid[13 + i][13] = safety[i];
  }
}

// Clues mapped to numbers from your reference file
const clueMap = {
  1: "Moore's '3Ts' include trust, tolerance, and this third word", // TASKS
  2: "Naval metaphor for acquisition speed amid resistance", // FURIOUS  
  3: "Hilger's submarine story highlights leadership's impact on this", // CREW
  4: "Carroll's key to program survival amid challenges", // RESILIENCE
  5: "Canady says this type of leadership earns trust", // INTRUSIVE
  6: "Palmieri's group within OSD focused on digital/AI", // CDAO
  7: "This 'Bond' speaker equated leadership with 007 flair", // BLESSE
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
  20: "Palmieri compares DoD transformation to building this while designing the road", // CAR
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

// Organize clues by across and down
const acrossClues = [];
const downClues = [];

// Manually organize based on the layout
// Across clues (horizontal words)
const acrossNumbers = [4, 8, 9, 10, 11, 13, 14, 17, 19, 20, 21, 22, 25, 26, 27, 28, 29];
const downNumbers = [1, 2, 3, 5, 6, 7, 12, 15, 18, 23, 24, 30];

acrossNumbers.forEach(num => {
  if (clueMap[num]) {
    acrossClues.push(`${num}. ${clueMap[num]}`);
  }
});

downNumbers.forEach(num => {
  if (clueMap[num]) {
    downClues.push(`${num}. ${clueMap[num]}`);
  }
});

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
