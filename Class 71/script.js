// Navigation Logic
    function toggleMenu() {
        document.getElementById('sidebar').classList.toggle('active');
    }

    function switchMode(mode) {
        document.querySelectorAll('.screen-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(mode).classList.add('active');
        document.getElementById('current-mode').innerText = mode.charAt(0).toUpperCase() + mode.slice(1);
        toggleMenu();
    }

    // Calculator Logic
    const screen = document.getElementById('calc-screen');
    function appendChar(c) { screen.value === "0" ? screen.value = c : screen.value += c; }
    function clearScreen() { screen.value = "0"; }
    function calculate() {
        try { screen.value = eval(screen.value); } 
        catch { screen.value = "Error"; setTimeout(clearScreen, 1500); }
    }

    // Temperature Logic
    function convertTemp(unit) {
        const c = document.getElementById('celsius');
        const f = document.getElementById('fahrenheit');
        if (unit === 'C') f.value = (c.value * 9/5 + 32).toFixed(2);
        else c.value = ((f.value - 32) * 5/9).toFixed(2);
    }

    // Weight Logic
    function convertWeight(unit) {
        const kg = document.getElementById('kg');
        const lbs = document.getElementById('lbs');
        if (unit === 'KG') lbs.value = (kg.value * 2.20462).toFixed(2);
        else kg.value = (lbs.value / 2.20462).toFixed(2);
    }

    function convertArea() {
    const feet = parseFloat(document.getElementById('sq-feet').value);
    const metresDisplay = document.getElementById('sq-metres-res');
    
    // Comparison Elements
    const compYards = document.getElementById('comp-yards');
    const compInches = document.getElementById('comp-inches');
    const compPaper = document.getElementById('comp-paper');

    if (isNaN(feet) || feet === 0) {
        metresDisplay.innerText = "0";
        compYards.innerText = "0";
        compInches.innerText = "0";
        compPaper.innerText = "0";
        return;
    }

    // Main Conversion: 1 sq ft = 0.09290304 sq m
    const m2 = feet * 0.09290304;
    metresDisplay.innerText = m2.toFixed(6);

    // Equivalents
    // 1 sq ft = 0.111111 sq yards
    compYards.innerText = (feet * 0.111111).toFixed(2);
    
    // 1 sq ft = 144 sq inches
    compInches.innerText = (feet * 144).toLocaleString();
    
    // 1 sq ft is approx 1.54 sheets of A4 paper (just for the fun Windows detail)
    compPaper.innerText = Math.round(feet * 1.54);
}

let history = [];

function toggleHistory() {
    document.getElementById('history-sidebar').classList.toggle('active');
}

function calculate() {
    try {
        const expression = screen.value;
        const result = eval(expression);
        
        // Save to history
        addToHistory(expression, result);
        
        screen.value = result;
    } catch {
        screen.value = "Error";
        setTimeout(clearScreen, 1500);
    }
}

function addToHistory(expression, result) {
    // Add new operation to the beginning of the array
    history.unshift({ exp: expression, res: result });

    // Keep only the last 10 items
    if (history.length > 10) {
        history.pop();
    }
    
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    if (history.length === 0) {
        list.innerHTML = '<p style="color: #666; text-align: center; margin-top: 20px;">There\'s no history yet</p>';
        return;
    }

    list.innerHTML = history.map((item, index) => `
        <div class="history-item" onclick="reuseHistory(${item.res})">
            <div class="history-exp">${item.exp} =</div>
            <div class="history-res">${item.res}</div>
        </div>
    `).join('');
}

function clearHistory() {
    history = [];
    renderHistory();
}

// Optional: Click a history item to put the result back on the screen
function reuseHistory(value) {
    screen.value = value;
    toggleHistory();
}
