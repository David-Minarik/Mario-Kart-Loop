function runFiveTimes() {
    // get a random number between 1 and 100
    let num = Math.floor(Math.random() * 100) + 1;
    let prize = document.getElementById("prize");
    let allPrizes = document.getElementById("allPrizes");
    let count = 0;
    for (let i =0; i < 5; i++) {
        count = i+1;
        if (num >= 1 && num <= 25) { // 25% chance
            prize.innerHTML = "Bannana";
        } else if (num >= 26 && num <= 50) { // 25% chance
            prize.innerHTML = "Green shell";
        } else if (num >= 51 && num <= 65) { // 15% chance
            prize.innerHTML = "Star";
        } else if (num >= 66 && num <= 80) { // 15% chance
            prize.innerHTML = "Golden Mushroom";
        } else if (num >=81 && num <=100){ // 20% chance
            prize.innerHTML = "Bullet";
        }
    }

    allPrizes.innerHTML = count;

    return false;
}

function runBulletBills() {

    // get a random number between 1 and 100

    let prize = document.getElementById("prize");
    let allPrizes = document.getElementById("allPrizes");
    let count = 0;
    let bulletBills = 0;
    while (bulletBills < 10) {
        let num = Math.floor(Math.random() * 100) + 1;
        count = count+1;
        if (num >= 1 && num <= 25) { // 25% chance
        } else if (num >= 26 && num <= 50) { // 25% chance
        } else if (num >= 51 && num <= 65) { // 15% chance
        } else if (num >= 66 && num <= 80) { // 15% chance
        } else if (num >=81 && num <=100){ // 20% chance
            prize.innerHTML = "Bullet";
            bulletBills = bulletBills + 1;
        }
    }

    allPrizes.innerHTML = count + " times until 10 bullet bills";

    return false;
}

function runNumberOfTimes() {
    let numberOfRuns = document.getElementById("numberOfRuns").value;
        // get a random number between 1 and 100
        let num = Math.floor(Math.random() * 100) + 1;
        let prize = document.getElementById("prize");
        let allPrizes = document.getElementById("allPrizes");
        let count = 0;
        for (let i =0; i < numberOfRuns; i++) {
            count = i+1;
            if (num >= 1 && num <= 25) { // 25% chance
                prize.innerHTML = "Bannana";
            } else if (num >= 26 && num <= 50) { // 25% chance
                prize.innerHTML = "Green shell";
            } else if (num >= 51 && num <= 65) { // 15% chance
                prize.innerHTML = "Star";
            } else if (num >= 66 && num <= 80) { // 15% chance
                prize.innerHTML = "Golden Mushroom";
            } else if (num >=81 && num <=100){ // 20% chance
                prize.innerHTML = "Bullet";
            }
        }
    
        allPrizes.innerHTML = count;
    
        return false;
}
