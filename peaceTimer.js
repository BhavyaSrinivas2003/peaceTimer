function button20Fun() {
    let element = document.getElementById("timerText");
    element.textContent = "";
    let i = 20;
    element.textContent = i + " seconds left";
    let uniqueId1 = setInterval(function() {
        if (i !== 0) {
            i = i - 1;
            element.textContent = i + " seconds left";
        } else if (i === 0) {
            element.textContent = "Your moment is complete";
            clearInterval(uniqueId1);
        }
    }, 1000)
}

function button30Fun() {
    let element = document.getElementById("timerText");
    element.textContent = "";
    let i = 30;
    element.textContent = i + " seconds left";
    let uniqueId2 = setInterval(function() {
        if (i !== 0) {
            i = i - 1;
            element.textContent = i + " seconds left";
        } else if (i === 0) {
            element.textContent = "Your moment is complete";
            clearInterval(uniqueId2);
        }
    }, 1000)
}

function button40Fun() {
    let element = document.getElementById("timerText");
    element.textContent = "";
    let i = 40;
    element.textContent = i + " seconds left";
    let uniqueId3 = setInterval(function() {
        if (i !== 0) {
            i = i - 1;
            element.textContent = i + " seconds left";
        } else if (i === 0) {
            element.textContent = "Your moment is complete";
            clearInterval(uniqueId3);
        }
    }, 1000)
}

function button1Fun() {
    let element = document.getElementById("timerText");
    element.textContent = "";
    let i = 60;
    element.textContent = i + " seconds left";
    let uniqueId4 = setInterval(function() {
        if (i !== 0) {
            i = i - 1;
            element.textContent = i + " seconds left";
        } else if (i === 0) {
            element.textContent = "Your moment is complete";
            clearInterval(uniqueId4);
        }
    }, 1000)
}