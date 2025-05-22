// Puzzle Grid Data - Matching your paste.txt layout
// Puzzle Grid Data - Complete with exact word positions
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

// Now let's add the vertical words based on your original list:
// Column B (index 1): LEVELUP
// Column D (index 3): BLESSE  
// Column F (index 5): RINGMASTER
// Column G (index 6): TASKS
// Column H (index 7): HUMAN
// Column I (index 8): ANONYMOUS
// Column K (index 10): EMOTIONAL
// Column N (index 13): FURIOUS and SAFETY
// Column P (index 15): CREW and LEAD
// Column S (index 18): INTRUSIVE
// Column U (index 20): PROGRAMS
// Column X (index 23): CDAO

// Let me strategically place the vertical words where they intersect with horizontal words

// LEVELUP in column B (index 1) - let's put it starting at row 7 to intersect with ACE
puzzleGrid[6][1] = 'L'; // intersects with row 7
puzzleGrid[7][1] = 'E'; // intersects with ACE
puzzleGrid[8][1] = 'V';
puzzleGrid[9][1] = 'E';
puzzleGrid[10][1] = 'L'; // intersects with GAMING
puzzleGrid[11][1] = 'U';
puzzleGrid[12][1] = 'P'; // intersects with VOICEAPP

// BLESSE in column D (index 3) - starting at row 5 to intersect with PERISCOPE
puzzleGrid[4][3] = 'B'; // intersects with PERISCOPE
puzzleGrid[5][3] = 'L';
puzzleGrid[6][3] = 'E';
puzzleGrid[7][3] = 'S';
puzzleGrid[8][3] = 'S';
puzzleGrid[9][3] = 'E';

// RINGMASTER in column F (index 5) - let's start at row 5
puzzleGrid[4][5] = 'R'; // intersects with PERISCOPE
puzzleGrid[5][5] = 'I';
puzzleGrid[6][5] = 'N';
puzzleGrid[7][5] = 'G';
puzzleGrid[8][5] = 'M';
puzzleGrid[9][5] = 'A';
puzzleGrid[10][5] = 'S'; // intersects with GAMING
puzzleGrid[11][5] = 'T';
puzzleGrid[12][5] = 'E';
puzzleGrid[13][5] = 'R';

// TASKS in column G (index 6) - starting at row 7 to intersect with SYSTEMS
puzzleGrid[6][6] = 'T'; // intersects with SYSTEMS
puzzleGrid[7][6] = 'A';
puzzleGrid[8][6] = 'S';
puzzleGrid[9][6] = 'K';
puzzleGrid[10][6] = 'S';

// HUMAN in column H (index 7) - fill in around existing horizontal words
puzzleGrid[5][7] = 'H';
puzzleGrid[6][7] = 'U'; // intersects with SYSTEMS
puzzleGrid[8][7] = 'M';
puzzleGrid[9][7] = 'A'; // intersects with RULES
puzzleGrid[10][7] = 'N';

// ANONYMOUS in column I (index 8) - starting at row 2 to intersect with AIRFORCE
puzzleGrid[1][8] = 'A'; // intersects with AIRFORCE
puzzleGrid[2][8] = 'N';
puzzleGrid[3][8] = 'O';
puzzleGrid[4][8] = 'N'; // intersects with PERISCOPE
puzzleGrid[5][8] = 'Y';
puzzleGrid[6][8] = 'M'; // intersects with SYSTEMS
puzzleGrid[7][8] = 'O';
puzzleGrid[8][8] = 'U';
puzzleGrid[9][8] = 'S'; // intersects with RULES

// EMOTIONAL in column K (index 10) - starting at row 5
puzzleGrid[4][10] = 'E'; // intersects with PERISCOPE
puzzleGrid[5][10] = 'M';
puzzleGrid[6][10] = 'O';
puzzleGrid[7][10] = 'T';
puzzleGrid[8][10] = 'I';
puzzleGrid[9][10] = 'O';
puzzleGrid[10][10] = 'N';
puzzleGrid[11][10] = 'A';
puzzleGrid[12][10] = 'L';

// FURIOUS in column N (index 13) - starting at row 7
puzzleGrid[6][13] = 'F'; // intersects with SYSTEMS
puzzleGrid[7][13] = 'U';
puzzleGrid[8][13] = 'R';
puzzleGrid[9][13] = 'I';
puzzleGrid[10][13] = 'O';
puzzleGrid[11][13] = 'U';
puzzleGrid[12][13] = 'S';

// CREW in column P (index 15) - rows 1-4 (indices 0-3)
puzzleGrid[0][15] = 'C';
puzzleGrid[1][15] = 'R'; // intersects with RESILIENCE (R)
puzzleGrid[2][15] = 'E';
puzzleGrid[3][15] = 'W';

// LEAD in column P (index 15) - starting at row 14 (index 13) where DIGITAL ends
puzzleGrid[13][15] = 'L'; // intersects with DIGITAL (L)
puzzleGrid[14][15] = 'E';
puzzleGrid[15][15] = 'A';
puzzleGrid[16][15] = 'D';

// INTRUSIVE in column S (index 18) - starting at row 7
puzzleGrid[6][18] = 'I';
puzzleGrid[7][18] = 'N';
puzzleGrid[8][18] = 'T';
puzzleGrid[9][18] = 'R'; // intersects with ESPORTS
puzzleGrid[10][18] = 'U';
puzzleGrid[11][18] = 'S';
puzzleGrid[12][18] = 'I';
puzzleGrid[13][18] = 'V';
puzzleGrid[14][18] = 'E'; // intersects with ADAPTIVE

// PROGRAMS in column U (index 20) - starting at row 9
puzzleGrid[8][20] = 'P';
puzzleGrid[9][20] = 'R'; // intersects with ESPORTS
puzzleGrid[10][20] = 'O';
puzzleGrid[11][20] = 'G';
puzzleGrid[12][20] = 'R';
puzzleGrid[13][20] = 'A';
puzzleGrid[14][20] = 'M';
puzzleGrid[15][20] = 'S';

// CDAO in column X (index 23) - starting at row 2
puzzleGrid[1][23] = 'C'; // intersects with RESILIENCE
puzzleGrid[2][23] = 'D';
puzzleGrid[3][23] = 'A';
puzzleGrid[4][23] = 'O';

// Helper functions for working with the grid
const PuzzleGridUtils = {
  // Get grid dimensions
  getDimensions() {
    return {
      rows: puzzleGrid.length,
      cols: Math.max(...puzzleGrid.map(row => row.length))
    };
  },

  // Get cell value at specific position
  getCell(row, col) {
    if (row >= 0 && row < puzzleGrid.length && col >= 0 && col < puzzleGrid[row].length) {
      return puzzleGrid[row][col];
    }
    return null;
  },

  // Set cell value at specific position
  setCell(row, col, value) {
    if (row >= 0 && row < puzzleGrid.length && col >= 0 && col < puzzleGrid[row].length) {
      puzzleGrid[row][col] = value;
      return true;
    }
    return false;
  },

  // Convert column letter to number (A=0, B=1, etc.)
  colLetterToNumber(letter) {
    return letter.charCodeAt(0) - 65;
  },

  // Convert column number to letter (0=A, 1=B, etc.)
  colNumberToLetter(num) {
    return String.fromCharCode(65 + num);
  },

  // Find all words in the grid (horizontal and vertical)
  findWords() {
    const words = [];
    const { rows, cols } = this.getDimensions();

    // Find horizontal words
    for (let row = 0; row < rows; row++) {
      let currentWord = '';
      let startCol = -1;
      
      for (let col = 0; col <= cols; col++) {
        const cell = this.getCell(row, col);
        
        if (cell && cell !== null) {
          if (currentWord === '') {
            startCol = col;
          }
          currentWord += cell;
        } else {
          if (currentWord.length > 1) {
            words.push({
              word: currentWord,
              direction: 'horizontal',
              row: row,
              col: startCol,
              length: currentWord.length
            });
          }
          currentWord = '';
        }
      }
    }

    // Find vertical words
    for (let col = 0; col < cols; col++) {
      let currentWord = '';
      let startRow = -1;
      
      for (let row = 0; row <= rows; row++) {
        const cell = this.getCell(row, col);
        
        if (cell && cell !== null) {
          if (currentWord === '') {
            startRow = row;
          }
          currentWord += cell;
        } else {
          if (currentWord.length > 1) {
            words.push({
              word: currentWord,
              direction: 'vertical',
              row: startRow,
              col: col,
              length: currentWord.length
            });
          }
          currentWord = '';
        }
      }
    }

    return words;
  },

  // Display the grid in console with row/column numbers
  displayGrid() {
    console.log('Puzzle Grid:');
    const { cols } = this.getDimensions();
    
    // Display column headers
    const colHeaders = '   ' + Array.from({length: cols}, (_, i) => this.colNumberToLetter(i)).join(' ');
    console.log(colHeaders);
    
    puzzleGrid.forEach((row, i) => {
      const displayRow = row.map(cell => cell || '·').join(' ');
      console.log(`${(i + 1).toString().padStart(2)}: ${displayRow}`);
    });
  },

  // Export grid as clean JavaScript array
  exportGrid() {
    return JSON.stringify(puzzleGrid, null, 2);
  },

  // Get all words found in the grid
  getWordList() {
    return this.findWords().map(wordObj => wordObj.word);
  },

  // Get words by direction
  getHorizontalWords() {
    return this.findWords().filter(w => w.direction === 'horizontal');
  },

  getVerticalWords() {
    return this.findWords().filter(w => w.direction === 'vertical');
  },

  // Validate all expected words are present
  validateAllWords() {
    const expectedHorizontal = [
      'PERISCOPE', 'ACE', 'GAMING', 'VOICEAPP', 'EXPERIMENT', 'PC', 'WINDS', 
      'HEELS', 'DIGITAL', 'RULES', 'SYSTEMS', 'AIRFORCE', 'RESILIENCE', 
      'CURIOSITY', 'ESPORTS', 'ADAPTIVE'
    ];
    
    const expectedVertical = [
      'LEVELUP', 'BLESSE', 'RINGMASTER', 'TASKS', 'HUMAN', 'ANONYMOUS', 
      'EMOTIONAL', 'FURIOUS', 'CREW', 'LEAD', 'INTRUSIVE', 'PROGRAMS', 'CDAO'
    ];
    
    const foundHorizontal = this.getHorizontalWords().map(w => w.word);
    const foundVertical = this.getVerticalWords().map(w => w.word);
    
    console.log('Horizontal Words Validation:');
    expectedHorizontal.forEach(word => {
      console.log(`  ${word}: ${foundHorizontal.includes(word) ? '✓' : '✗'}`);
    });
    
    console.log('\nVertical Words Validation:');
    expectedVertical.forEach(word => {
      console.log(`  ${word}: ${foundVertical.includes(word) ? '✓' : '✗'}`);
    });
    
    return {
      horizontal: { expected: expectedHorizontal, found: foundHorizontal },
      vertical: { expected: expectedVertical, found: foundVertical }
    };
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { puzzleGrid, PuzzleGridUtils };
}

// For browser usage
if (typeof window !== 'undefined') {
  window.puzzleGrid = puzzleGrid;
  window.PuzzleGridUtils = PuzzleGridUtils;
}

// Initial validation
console.log('Puzzle Grid Dimensions:', PuzzleGridUtils.getDimensions());
console.log('\nValidating all words:');
PuzzleGridUtils.validateAllWords();
console.log('\nDisplaying complete grid:');
PuzzleGridUtils.displayGrid();

// Crossword functionality - clue numbering and generation
const clueNumbers = Array.from({ length: puzzleGrid.length }, () => Array(puzzleGrid[0].length).fill(null));
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

// Helper functions for working with the grid
const PuzzleGridUtils = {
  // Get grid dimensions
  getDimensions() {
    return {
      rows: puzzleGrid.length,
      cols: Math.max(...puzzleGrid.map(row => row.length))
    };
  },

  // Get cell value at specific position
  getCell(row, col) {
    if (row >= 0 && row < puzzleGrid.length && col >= 0 && col < puzzleGrid[row].length) {
      return puzzleGrid[row][col];
    }
    return null;
  },

  // Set cell value at specific position
  setCell(row, col, value) {
    if (row >= 0 && row < puzzleGrid.length && col >= 0 && col < puzzleGrid[row].length) {
      puzzleGrid[row][col] = value;
      return true;
    }
    return false;
  },

  // Convert column letter to number (A=0, B=1, etc.)
  colLetterToNumber(letter) {
    return letter.charCodeAt(0) - 65;
  },

  // Convert column number to letter (0=A, 1=B, etc.)
  colNumberToLetter(num) {
    return String.fromCharCode(65 + num);
  },

  // Find all words in the grid (horizontal and vertical)
  findWords() {
    const words = [];
    const { rows, cols } = this.getDimensions();

    // Find horizontal words
    for (let row = 0; row < rows; row++) {
      let currentWord = '';
      let startCol = -1;
      
      for (let col = 0; col <= cols; col++) {
        const cell = this.getCell(row, col);
        
        if (cell && cell !== null) {
          if (currentWord === '') {
            startCol = col;
          }
          currentWord += cell;
        } else {
          if (currentWord.length > 1) {
            words.push({
              word: currentWord,
              direction: 'horizontal',
              row: row,
              col: startCol,
              length: currentWord.length
            });
          }
          currentWord = '';
        }
      }
    }

    // Find vertical words
    for (let col = 0; col < cols; col++) {
      let currentWord = '';
      let startRow = -1;
      
      for (let row = 0; row <= rows; row++) {
        const cell = this.getCell(row, col);
        
        if (cell && cell !== null) {
          if (currentWord === '') {
            startRow = row;
          }
          currentWord += cell;
        } else {
          if (currentWord.length > 1) {
            words.push({
              word: currentWord,
              direction: 'vertical',
              row: startRow,
              col: col,
              length: currentWord.length
            });
          }
          currentWord = '';
        }
      }
    }

    return words;
  },

  // Display the grid in console with row/column numbers
  displayGrid() {
    console.log('Puzzle Grid:');
    const { cols } = this.getDimensions();
    
    // Display column headers
    const colHeaders = '   ' + Array.from({length: cols}, (_, i) => this.colNumberToLetter(i)).join(' ');
    console.log(colHeaders);
    
    puzzleGrid.forEach((row, i) => {
      const displayRow = row.map(cell => cell || '·').join(' ');
      console.log(`${(i + 1).toString().padStart(2)}: ${displayRow}`);
    });
  },

  // Export grid as clean JavaScript array
  exportGrid() {
    return JSON.stringify(puzzleGrid, null, 2);
  },

  // Get all words found in the grid
  getWordList() {
    return this.findWords().map(wordObj => wordObj.word);
  },

  // Get words by direction
  getHorizontalWords() {
    return this.findWords().filter(w => w.direction === 'horizontal');
  },

  getVerticalWords() {
    return this.findWords().filter(w => w.direction === 'vertical');
  },

  // Validate all expected words are present
  validateAllWords() {
    const expectedHorizontal = [
      'PERISCOPE', 'ACE', 'GAMING', 'VOICEAPP', 'EXPERIMENT', 'PC', 'WINDS', 
      'HEELS', 'DIGITAL', 'RULES', 'SYSTEMS', 'AIRFORCE', 'RESILIENCE', 
      'CURIOSITY', 'ESPORTS', 'ADAPTIVE'
    ];
    
    const expectedVertical = [
      'LEVELUP', 'BLESSE', 'RINGMASTER', 'TASKS', 'HUMAN', 'ANONYMOUS', 
      'EMOTIONAL', 'FURIOUS', 'CREW', 'LEAD', 'INTRUSIVE', 'PROGRAMS', 'CDAO'
    ];
    
    const foundHorizontal = this.getHorizontalWords().map(w => w.word);
    const foundVertical = this.getVerticalWords().map(w => w.word);
    
    console.log('Horizontal Words Validation:');
    expectedHorizontal.forEach(word => {
      console.log(`  ${word}: ${foundHorizontal.includes(word) ? '✓' : '✗'}`);
    });
    
    console.log('\nVertical Words Validation:');
    expectedVertical.forEach(word => {
      console.log(`  ${word}: ${foundVertical.includes(word) ? '✓' : '✗'}`);
    });
    
    return {
      horizontal: { expected: expectedHorizontal, found: foundHorizontal },
      vertical: { expected: expectedVertical, found: foundVertical }
    };
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { puzzleGrid, PuzzleGridUtils };
}

// For browser usage
if (typeof window !== 'undefined') {
  window.puzzleGrid = puzzleGrid;
  window.PuzzleGridUtils = PuzzleGridUtils;
}

// Initial validation
console.log('Puzzle Grid Dimensions:', PuzzleGridUtils.getDimensions());
console.log('\nValidating all words:');
PuzzleGridUtils.validateAllWords();
console.log('\nDisplaying complete grid:');
PuzzleGridUtils.displayGrid();
