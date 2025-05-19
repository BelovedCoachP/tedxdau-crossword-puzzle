/* CSS for the TEDxDAU Crossword Puzzle */

:root {
  --tedx-red: #e62b1e;
  --tedx-dark: #2b2b2b;
  --tedx-light: #f5f5f5;
  --tedx-accent: #ff5a5f;
  --tedx-gray: #666666;
  --tedx-border: #dddddd;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: var(--tedx-dark);
  background-color: var(--tedx-light);
  margin: 0;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: var(--tedx-red);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.header p {
  color: var(--tedx-gray);
  font-size: 1.2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.btn {
  padding: 10px 20px;
  background-color: var(--tedx-red);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #c12018;
}

.btn.secondary {
  background-color: var(--tedx-gray);
}

.btn.secondary:hover {
  background-color: #4d4d4d;
}

.crossword-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media (min-width: 900px) {
  .crossword-container {
    flex-direction: row;
  }
}

.grid-container {
  flex: 3;
  overflow-x: auto;
}

.clues-container {
  flex: 2;
}

.grid {
  border-collapse: collapse;
  margin: 0 auto;
}

.grid td {
  width: 35px;
  height: 35px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid var(--tedx-border);
  position: relative;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
}

.grid td.black {
  background-color: var(--tedx-dark);
}

.grid td .number {
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 9px;
  color: var(--tedx-gray);
}

.grid td[contenteditable="true"] {
  cursor: text;
}

.grid td[contenteditable="true"]:focus {
  background-color: #fffae5;
  outline: 2px solid var(--tedx-accent);
}

.clue-section {
  margin-bottom: 20px;
}

.clue-section h3 {
  color: var(--tedx-red);
  border-bottom: 2px solid var(--tedx-red);
  padding-bottom: 5px;
  margin-top: 0;
}

.clue-list {
  list-style-position: inside;
  padding-left: 10px;
}

.clue-list li {
  margin-bottom: 10px;
  line-height: 1.4;
}

.clue-list li .emoji {
  margin-right: 5px;
}

.footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--tedx-border);
  color: var(--tedx-gray);
}

/* Modal styles for reveal solution popup */
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
  background-color: var(--tedx-dark);
  color: var(--tedx-light);
  margin: 15% auto;
  padding: 25px;
  border: 1px solid var(--tedx-gray);
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  animation: modalFadeIn 0.3s ease-in-out;
}

@keyframes modalFadeIn {
  from {opacity: 0; transform: translateY(-20px);}
  to {opacity: 1; transform: translateY(0);}
}

.close-button {
  color: var(--tedx-gray);
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 15px;
  transition: color 0.2s;
}

.close-button:hover {
  color: var(--tedx-light);
}

.modal-content h3 {
  margin-top: 0;
  color: var(--tedx-light);
  font-size: 1.4rem;
}

.reveal-date {
  font-weight: bold;
  color: var(--tedx-red);
}

/* Print-specific styles */
@media print {
  .controls, .footer, .btn, .modal {
    display: none !important;
  }
  
  body {
    padding: 0;
    font-size: 12pt;
  }
  
  .header h1 {
    font-size: 24pt;
  }
  
  .grid td {
    width: 30px;
    height: 30px;
    font-size: 16pt;
  }
  
  .page-break {
    page-break-before: always;
  }
}
