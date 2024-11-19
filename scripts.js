box1 = document.querySelector(".box1");
box2 = document.querySelector(".box2");
box3 = document.querySelector(".box3");
box4 = document.querySelector(".box4");
box5 = document.querySelector(".box5");
box6 = document.querySelector(".box6");
box7 = document.querySelector(".box7");
box8 = document.querySelector(".box8");
box9 = document.querySelector(".box9");
restartButton = document.querySelector(".restartButton");
currentTurn = 0
boxStatus = {
    "box1": "",
    "box2": "",
    "box3": "",
    "box4": "",
    "box5": "",
    "box6": "",
    "box7": "",
    "box8": "",
    "box9": ""
}


//Functions
let checkTurn = (currentBox, boxNum) => {
    if (boxStatus[boxNum] === "") {
        if (currentTurn % 2 === 0) {
            boxStatus[boxNum] = "x";
            currentBox.innerHTML = "<img src='images/redx.png' alt=''>"
        } else {
            boxStatus[boxNum] = "o";
            currentBox.innerHTML = "<img src='images/blueo.png' alt=''>"
        }
    } else {
        alert('Pick a different box.');
    }
    currentTurn++;
}

function checkWin(boxStatus, boxNum) {
    const winningCombinations = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"]
    ]
    winningCombinations.forEach(function(combination) {
        console.log(boxStatus[combination[0]], boxStatus[combination[1]], boxStatus[combination[2]])
        if (boxStatus[combination[0]] !== "") {
            if (boxStatus[combination[0]] == boxStatus[combination[1]] &&  boxStatus[combination[1]] == boxStatus[combination[2]]) {
                restartButton.style.display = "block";
                if (boxStatus[combination[0]] = "x") {
                    alert('You win!');
                } else {
                    
                }

            }
        }
    })
}

box1.addEventListener('click', () => {
    checkTurn(box1, "box1");
    checkWin(boxStatus, "box1");
});
box2.addEventListener('click', () => {
    checkTurn(box2, "box2");
    checkWin(boxStatus, "box2");
});
box3.addEventListener('click', () => {
    checkTurn(box3, "box3");
    checkWin(boxStatus, "box3");
});
box4.addEventListener('click', () => {
    checkTurn(box4, "box4");
    checkWin(boxStatus, "box4");
});
box5.addEventListener('click', () => {
    checkTurn(box5, "box5");
    checkWin(boxStatus, "box5");
});
box6.addEventListener('click', () => {
    checkTurn(box6, "box6");
    checkWin(boxStatus, "box6");
});
box7.addEventListener('click', () => {
    checkTurn(box7, "box7");
    checkWin(boxStatus, "box7");
});
box8.addEventListener('click', () => {
    checkTurn(box8, "box8");
    checkWin(boxStatus, "box8");
});
box9.addEventListener('click', () => {
    checkTurn(box9, "box9");
    checkWin(boxStatus, "box9");
});
restartButton.addEventListener('click', () => {
    boxStatus["box1"] = "";
    boxStatus["box2"] = "";
    boxStatus["box3"] = "";
    boxStatus["box4"] = "";
    boxStatus["box5"] = "";
    boxStatus["box6"] = "";
    boxStatus["box7"] = "";
    boxStatus["box8"] = "";
    boxStatus["box9"] = "";
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
});