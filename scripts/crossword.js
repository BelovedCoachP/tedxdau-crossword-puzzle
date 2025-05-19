// This JavaScript file contains the functionality for the interactive crossword puzzle

document.addEventListener('DOMContentLoaded', function() {
  const puzzleGrid = document.getElementById('puzzle-grid');
  const answerGrid = document.getElementById('answer-grid');
  const showAnswersBtn = document.getElementById('show-answers-btn');
  const checkAnswersBtn = document.getElementById('check-answers-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  // Define crossword grid layout
  // 0 = empty cell, 1 = filled cell, numbers = numbered cells
  const gridLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 7, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 8, 0, 9, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 14, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0],
    [13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 1, 0],
    [17, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 18],
    [19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 20, 0, 0, 0, 1],
    [21, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 22, 0, 0, 0, 0, 0, 23, 0, 1, 0, 0, 0, 1],
    [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [27, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [28, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 26, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [30, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 29, 0, 0, 0, 0],
  ];

  // Define answer data
  const answers = {
    1: {word: "SYSTEMSTHINKING", orientation: "across"},
    2: {word: "DIGITALNATIVE", orientation: "down"},
    3: {word: "PROGRAMRESILIENCE", orientation: "down"},
    4: {word: "NUCLEARANSWER", orientation: "across"},
    5: {word: "UNLEARNINGRULES", orientation: "down"},
    6: {word: "ACETRAINER", orientation: "across"},
    7: {word: "INTRUSIVELEADERSHIP", orientation: "across"},
    8: {word: "FURIOUSFIFTIES", orientation: "down"},
    9: {word: "LEVELUP", orientation: "down"},
    10: {word: "TRADEWINDSMARKETPLACE", orientation: "across"},
    11: {word: "AREYOUOKAY", orientation: "down"},
    12: {word: "DUMBQUESTIONS", orientation: "down"},
    13: {word: "PIPELINETOBRICKWALL", orientation: "across"},
    14: {word: "AIPARTNERSHIP", orientation: "down"},
    15: {word: "ACQUISITIONSUPERAGENT", orientation: "across"},
    16: {word: "SPEEDOVERPROCESS", orientation: "down"},
    17: {word: "BLUESHARKPROJECT", orientation: "across"},
    18: {word: "LEADERSHIPOPERATINGSYSTEM", orientation: "down"},
    19: {word: "EMOTIONALINTELLIGENCE", orientation: "across"},
    20: {word: "GAMERMINDSET", orientation: "down"},
    21: {word: "DELIVERPROGRAMS", orientation: "across"},
    22: {word: "ADAPTIVECYCLE", orientation: "down"},
    23: {word: "ANDONSYSTEM", orientation: "down"},
    24: {word: "EXPERIENCEPARADOX", orientation: "across"},
    25: {word: "THREERINGMODEL", orientation: "across"},
    26: {word: "TECHSOLUTIONS", orientation: "down"},
    27: {word: "CYBERWORKFORCEGAP", orientation: "across"},
    28: {word: "RINGMASTER", orientation: "across"},
    29: {word: "ACQUISITIONSPEEDMANIFESTO", orientation: "down"},
    30: {word: "COMPLEXSYSTEMS", orientation: "across"},
  };

  // Generate coordinated letter map for the grid
  const letterMap = generateLetterMap();

  // Initialize the grids
  initializeGrid(puzzleGrid, false);
  initializeGrid(answerGrid, true);
  
  // Initially hide the answer grid
  answerGrid.parentElement.style.display = 'none';
  
  // Create the reveal modal if it doesn't exist
  createRevealModal();
  
  // Event listeners for buttons
  if (showAnswersBtn) {
    // Check if reveals are allowed before showing answers
    showAnswersBtn.addEventListener('click', function() {
      const unlockDate = new Date(2025, 5, 4, 15, 0, 0); // June 4, 2025 at 3:00 PM
      if (new Date() < unlockDate) {
        showRevealModal();
      } else {
        toggleAnswers();
      }
    });
  }
  
  if (checkAnswersBtn) {
    checkAnswersBtn.addEventListener('click', checkAnswers);
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', resetPuzzle);
  }
  
  // Create the reveal solution modal
  function createRevealModal() {
    // Only create if it doesn't already exist
    if (!document.getElementById('reveal-modal')) {
      // Create modal elements
      const modal = document.createElement('div');
      modal.id = 'reveal-modal';
      modal.className = 'modal';
      
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
      
      const closeButton = document.createElement('span');
      closeButton.className = 'close-button';
      closeButton.innerHTML = '&times;';
      closeButton.onclick = function() {
        modal.style.display = 'none';
      };
      
      const title = document.createElement('h3');
      title.textContent = 'Solution Not Available Yet';
      
      const message = document.createElement('p');
      message.innerHTML = 'The solution will be revealed after <span class="reveal-date">June 4, 2025 at 3:00 PM</span>.';
      
      const additionalInfo = document.createElement('p');
      additionalInfo.textContent = 'Check back after this date to view the complete solution!';
      
      // Assemble the modal
      modalContent.appendChild(closeButton);
      modalContent.appendChild(title);
      modalContent.appendChild(message);
      modalContent.appendChild(additionalInfo);
      modal.appendChild(modalContent);
      
      // Add modal styles
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .modal {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.7);
        }
        
        .modal-content {
          background-color: #333;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #555;
          border-radius: 5px;
          width: 80%;
          max-width: 500px;
          color: white;
          text-align: center;
          position: relative;
        }
        
        .close-button {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          position: absolute;
          top: 5px;
          right: 15px;
        }
        
        .close-button:hover {
          color: white;
        }
        
        .reveal-date {
          font-weight: bold;
          color: #e62b1e;
        }
      `;
      
      // Add modal and styles to the document
      document.head.appendChild(styleElement);
      document.body.appendChild(modal);
      
      // Close the modal when clicking outside of it
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      };
    }
  }
  
  // Show the reveal modal
  function showRevealModal() {
    const modal = document.getElementById('reveal-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
  
  // Function to generate the letter map
  function generateLetterMap() {
    // This would create a data structure mapping coordinates to letters
    // For simplicity in this example, we'll return a placeholder
    return {}; // In a real implementation, this would be populated
  }
  
  // Function to initialize a grid
  function initializeGrid(gridElement, showAnswers) {
    if (!gridElement) return;
    
    gridElement.innerHTML = '';
    
    for (let rowIndex = 0; rowIndex < gridLayout.length; rowIndex++) {
      const row = document.createElement('tr');
      
      for (let colIndex = 0; colIndex < gridLayout[rowIndex].length; colIndex++) {
        const cell = document.createElement('td');
        const cellValue = gridLayout[rowIndex][colIndex];
        
        if (cellValue === 0) {
          cell.className = 'black';
        } else {
          // If the cell has a number
          if (cellValue > 1) {
            const numberSpan = document.createElement('span');
            numberSpan.className = 'number';
            numberSpan.textContent = cellValue;
            cell.appendChild(numberSpan);
          }
          
          if (showAnswers) {
            // This would show the correct letter in answer mode
            const letter = getLetterForCell(rowIndex, colIndex);
            if (letter) {
              cell.textContent = letter;
            }
          } else {
            // Make the cell editable for the puzzle
            cell.contentEditable = true;
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;
            cell.addEventListener('input', function(e) {
              handleCellInput(e, this);
            });
            cell.addEventListener('keydown', function(e) {
              handleCellNavigation(e, this);
            });
          }
        }
        
        row.appendChild(cell);
      }
      
      gridElement.appendChild(row);
    }
  }
  
  // Function to get the letter for a cell
  function getLetterForCell(row, col) {
    // In a real implementation, this would use the letterMap
    // For this example, returning placeholder letters
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[(row + col) % 26];
  }
  
  // Function to handle cell input
  function handleCellInput(event, cell) {
    // Only allow one letter per cell
    if (cell.textContent.length > 1) {
      cell.textContent = cell.textContent.charAt(cell.textContent.length - 1).toUpperCase();
    } else if (cell.textContent.length === 1) {
      cell.textContent = cell.textContent.toUpperCase();
    }
  }
  
  // Function to handle cell navigation with arrow keys
  function handleCellNavigation(event, cell) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    
    // Navigate with arrow keys
    switch (event.key) {
      case 'ArrowRight':
        moveFocus(row, col + 1);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        moveFocus(row, col - 1);
        event.preventDefault();
        break;
      case 'ArrowDown':
        moveFocus(row + 1, col);
        event.preventDefault();
        break;
      case 'ArrowUp':
        moveFocus(row - 1, col);
        event.preventDefault();
        break;
    }
  }
  
  // Function to move focus to a cell
  function moveFocus(row, col) {
    // Find the next valid cell
    const nextCell = findNextCell(row, col);
    if (nextCell) {
      nextCell.focus();
    }
  }
  
  // Function to find the next valid cell
  function findNextCell(row, col) {
    const selector = `td[data-row="${row}"][data-col="${col}"]`;
    const cell = document.querySelector(selector);
    
    if (cell && cell.contentEditable === 'true') {
      return cell;
    }
    
    return null;
  }
  
  // Function to toggle showing answers
  function toggleAnswers() {
    const puzzleSection = document.getElementById('puzzle-section');
    const answerSection = document.getElementById('answers-section');
    
    if (puzzleSection.style.display !== 'none') {
      puzzleSection.style.display = 'none';
      answerSection.style.display = 'block';
      showAnswersBtn.textContent = 'Show Puzzle';
    } else {
      puzzleSection.style.display = 'block';
      answerSection.style.display = 'none';
      showAnswersBtn.textContent = 'Show Answers';
    }
  }
  
  // Function to check answers
  function checkAnswers() {
    // This would compare the user's input with the correct answers
    alert('Answer checking functionality would be implemented here');
  }
  
  // Function to reset the puzzle
  function resetPuzzle() {
    // Clear all user input cells
    const cells = document.querySelectorAll('#puzzle-grid td[contenteditable="true"]');
    cells.forEach(cell => {
      cell.textContent = '';
    });
  }
});
