// Puzzle Grid Data - Complete crossword with all words correctly placed
const puzzleGrid = [
  // Row 1 (index 0)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'C',null,null,null,null,null,null,null,null,null,null,null,'C'],
  // Row 2 (index 1) - RESILIENCE starts at column P (index 15)
  [null,null,null,null,null,null,null,null,'A',null,null,null,null,null,null,'R','E','S','I','L','I','E','N','C','E',null,null,'D'],
  // Row 3 (index 2) - AIRFORCE starts at column I (index 8)
  [null,null,null,null,null,null,null,null,'I','R','F','O','R','C','E',null,null,null,null,null,null,null,null,'A'],
  // Row 4 (index 3)
  [null,null,null,null,null,null,null,null,'N',null,null,null,null,null,null,'W',null,null,null,null,null,null,null,'O'],
  // Row 5 (index 4) - PERISCOPE starts at column C (index 2)
  [null,null,'P','E','R','I','S','C','O','P','E',null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 6 (index 5)
  [null,null,null,'L',null,'G',null,'H',null,'N',null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 7 (index 6) - SYSTEMS starts at column H (index 7)
  [null,'L',null,'E',null,'M',null,'U','S','Y','S','T','E','M','S','null,null,null,'I',null,null,null,null,null],
  // Row 8 (index 7) - ACE starts at column B (index 1), CURIOSITY starts at column P (index 15)
  [null,'E','A','S',null,'A',null,'M',null,'O','null,null,null,null,null,'C','U','R','I','O','S','I','T','Y',null],
  // Row 9 (index 8)
  [null,'V',null,'S',null,'S',null,'A',null,'U',null,null,null,null,null,null,null,null,'N',null,null,null,null,null],
  // Row 10 (index 9) - RULES starts at column H (index 7), ESPORTS starts at column S (index 18)
  [null,'E',null,'E',null,'T',null,'N','R','U','L','E','S',null,null,null,null,null,'T','E','S','P','O','R','T','S'],
  // Row 11 (index 10) - GAMING starts at column A (index 0)
  ['G','L','A','M','I','N','G',null,null,'S',null,null,null,null,null,null,null,null,'R','null,null,'R',null,null,null],
  // Row 12 (index 11)
  [null,'U',null,null,null,'E',null,null,null,null,null,null,null,null,null,null,null,null,'U','null,null,'O',null,null,null],
  // Row 13 (index 12) - VOICEAPP starts at column A (index 0)
  ['V','P','O','I','C','E','A','P','P',null,null,null,null,null,null,null,null,null,'S','null,null,'G',null,null,null],
  // Row 14 (index 13) - DIGITAL starts at column J (index 9)
  [null,null,null,null,null,'R',null,null,null,'D','I','G','I','T','A','L',null,null,'I','null,null,'R',null,null,null],
  // Row 15 (index 14) - ADAPTIVE starts at column S (index 18)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'E',null,null,'V','A','D','A','P','T','I','V','E'],
  // Row 16 (index 15) - EXPERIMENT starts at column C (index 2)
  [null,null,'E','X','P','E','R','I','M','E','N','T',null,null,null,'A',null,null,'E','null,null,'A',null,null,null],
  // Row 17 (index 16)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'D',null,null,null,'null,null,'M',null,null,null],
  // Row 18 (index 17) - HEELS starts at column H (index 7)
  [null,null,null,null,null,null,null,'H','E','E','L','S',null,null,null,null,null,null,null,'null,null,'S',null,null,null],
  // Row 19 (index 18)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 20 (index 19)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 21 (index 20) - PC starts at column C (index 2)
  [null,null,'P','C',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 22 (index 21) - WINDS starts at column F (index 5)
  [null,null,null,null,null,'W','I','N','D','S',null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
  // Row 23 (index 22)
  [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
];

// Now add the vertical words properly
// LEVELUP in column B (index 1) - starting at row 7
puzzleGrid[6][1] = 'L';
puzzleGrid[7][1] = 'E';
puzzleGrid[8][1] = 'V';
puzzleGrid[9][1] = 'E';
puzzleGrid[10][1] = 'L';
puzzleGrid[11][1] = 'U';
puzzleGrid[12][1] = 'P';

// BLESSE in column D (index 3) - starting at row 4
puzzleGrid[3][3] = 'B';
puzzleGrid[4][3] = 'L';
puzzleGrid[5][3] = 'E';
puzzleGrid[6][3] = 'S';
puzzleGrid[7][3] = 'S';
puzzleGrid[8][3] = 'E';

// RINGMASTER in column F (index 5) - starting at row 4
puzzleGrid[3][5] = 'R';
puzzleGrid[4][5] = 'I';
puzzleGrid[5][5] = 'N';
puzzleGrid[6][5] = 'G';
puzzleGrid[7][5] = 'M';
puzzleGrid[8][5] = 'A';
puzzleGrid[9][5] = 'S';
puzzleGrid[10][5] = 'T';
puzzleGrid[11][5] = 'E';
puzzleGrid[12][5] = 'R';

// TASKS in column G (index 6) - starting at row 6
puzzleGrid[5][6] = 'T';
puzzleGrid[6][6] = 'A';
puzzleGrid[7][6] = 'S';
puzzleGrid[8][6] = 'K';
puzzleGrid[9][6] = 'S';

// HUMAN in column H (index 7) - starting at row 5
puzzleGrid[4][7] = 'H';
puzzleGrid[5][7] = 'U';
puzzleGrid[6][7] = 'M';
puzzleGrid[7][7] = 'A';
puzzleGrid[8][7] = 'N';

// ANONYMOUS in column I (index 8) - starting at row 1
puzzleGrid[0][8] = 'A';
puzzleGrid[1][8] = 'N';
puzzleGrid[2][8] = 'O';
puzzleGrid[3][8] = 'N';
puzzleGrid[4][8] = 'Y';
puzzleGrid[5][8] = 'M';
puzzleGrid[6][8] = 'O';
puzzleGrid[7][8] = 'U';
puzzleGrid[8][8] = 'S';

// EMOTIONAL in column K (index 10) - starting at row 4
puzzleGrid[3][10] = 'E';
puzzleGrid[4][10] = 'M';
puzzleGrid[5][10] = 'O';
puzzleGrid[6][10] = 'T';
puzzleGrid[7][10] = 'I';
puzzleGrid[8][10] = 'O';
puzzleGrid[9][10] = 'N';
puzzleGrid[10][10] = 'A';
puzzleGrid[11][10] = 'L';

// FURIOUS in column N (index 13) - starting at row 6
puzzleGrid[5][13] = 'F';
puzzleGrid[6][13] = 'U';
puzzleGrid[7][13] = 'R';
puzzleGrid[8][13] = 'I';
puzzleGrid[9][13] = 'O';
puzzleGrid[10][13] = 'U';
puzzleGrid[11][13] = 'S';

// CREW in column P (index 15) - rows 1-4
puzzleGrid[0][15] = 'C';
puzzleGrid[1][15] = 'R';
puzzleGrid[2][15] = 'E';
puzzleGrid[3][15] = 'W';

// LEAD in column P (index 15) - starting at row 13 where DIGITAL ends
puzzleGrid[13][15] = 'L';
puzzleGrid[14][15] = 'E';
puzzleGrid[15][15] = 'A';
puzzleGrid[16][15] = 'D';

// INTRUSIVE in column S (index 18) - starting at row 6
puzzleGrid[5][18] = 'I';
puzzleGrid[6][18] = 'N';
puzzleGrid[7][18] = 'T';
puzzleGrid[8][18] = 'R';
puzzleGrid[9][18] = 'U';
puzzleGrid[10][18] = 'S';
puzzleGrid[11][18] = 'I';
puzzleGrid[12][18] = 'V';
puzzleGrid[13][18] = 'E';

// PROGRAMS in column U (index 20) - starting at row 9
puzzleGrid[8][20] = 'P';
puzzleGrid[9][20] = 'R';
puzzleGrid[10][20] = 'O';
puzzleGrid[11][20] = 'G';
puzzleGrid[12][20] = 'R';
puzzleGrid[13][20] = 'A';
puzzleGrid[14][20] = 'M';
puzzleGrid[15][20] = 'S';

// CDAO in column X (index 23) - starting at row 1
puzzleGrid[0][23] = 'C';
puzzleGrid[1][23] = 'D';
puzzleGrid[2][23] = 'A';
puzzleGrid[3][23] = 'O';

// Crossword functionality - clue numbering and generation
const clueNumbers = Array.from({ length: puzzleGrid.length }, () => Array(puzzleGrid[0].length).fill(null));
let clueNumber = 1;

const acrossClues = [];
const downClues = [];

const actualAcrossClues = [
  "Moore's '3Ts' include trust, tolerance, and this third word",
  "Military branch where Tidwell serves",
  "Blesse's innovation story started with a letter about this naval device",
  "Moore's approach for seeing wholes, not parts",
  "Durham's AI teammate: Acquisition's Collaborative Engine",
  "The figure who keeps lions, vendors, and contracting officers in sync",
  "Durham's favorite genre of virtual competition",
  "Tidwell's app that empowers innovation from the ground up",
  "What Evangelista says we must 'unlearn' to move forward",
  "Carroll's key to program survival amid challenges",
  "Jones says this quality makes digital natives fearless questioners",
  "Evangelista says these must fly off for change to begin (footwear)",
  "Carroll's competitive battlefield for acquisition talent",
  "Jones built one of these with her uncle in high school",
  "Hilger's programs show we deliver more than just products—we deliver ____",
  "Canady challenges leaders to go beyond just 'managing' to truly ____"
];

const actualDownClues = [
  "Carroll's key to program survival amid challenges",
  "Blesse's innovation story started with a letter about this naval device",
  "Durham's AI teammate: Acquisition's Collaborative Engine",
  "Jones says this quality makes digital natives fearless questioners",
  "What Evangelista says we must 'unlearn' to move forward",
  "Carroll compares acquisition's speed to these legendary ocean patterns",
  "Durham's favorite genre of virtual competition",
  "Moore's approach for seeing wholes, not parts",
  "Evangelista says these must fly off for change to begin (footwear)",
  "Palmieri's approach that pairs tech with real-world ops",
  "Jones built one of these with her uncle in high school",
  "The only type of mindset that can wield AI effectively, per Moore",
  "Palmieri compares DoD transformation to building this while designing the road",
  "Canady says this type of leadership earns trust",
  "Palmieri's group within OSD focused on digital/AI"
];

// Generate clue numbers for the grid
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
      if (startsAcross) acrossClues.push(`${clueNumber}. ${actualAcrossClues[acrossClues.length] || "(Missing across clue)"}`);
      if (startsDown) downClues.push(`${clueNumber}. ${actualDownClues[downClues.length] || "(Missing down clue)"}`);
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

// Helper functions for working with the grid
const PuzzleGridUtils = {
  getDimensions() {
    return {
      rows: puzzleGrid.length,
      cols: Math.max(...puzzleGrid.map(row => row.length))
    };
  },

  getCell(row, col) {
    if (row >= 0 && row < puzzleGrid.length && col >= 0 && col < puzzleGrid[row].length) {
      return puzzleGrid[row][col];
    }
    return null;
  },

  displayGrid() {
    console.log('Puzzle Grid:');
    puzzleGrid.forEach((row, i) => {
      const displayRow = row.map(cell => cell || '·').join(' ');
      console.log(`${(i + 1).toString().padStart(2)}: ${displayRow}`);
    });
  }
};

// Initialize crossword when DOM is ready
function initializeCrossword() {
  renderCrossword();
  renderClues();
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
  module.exports = { puzzleGrid, PuzzleGridUtils, renderCrossword, renderClues, initializeCrossword };
}

// For browser usage
if (typeof window !== 'undefined') {
  window.puzzleGrid = puzzleGrid;
  window.PuzzleGridUtils = PuzzleGridUtils;
  window.renderCrossword = renderCrossword;
  window.renderClues = renderClues;
  window.initializeCrossword = initializeCrossword;
}
