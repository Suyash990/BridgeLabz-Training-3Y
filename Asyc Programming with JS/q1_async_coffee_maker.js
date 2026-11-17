function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Water boiled");

            if (Math.random() < 0.2) {
                reject("Failed to boil water");
            } else {
                resolve();
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Coffee brewed");

            if (Math.random() < 0.2) {
                reject("Coffee brewing failed");
            } else {
                resolve();
            }
        }, 2000);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Coffee poured into cup");

            if (Math.random() < 0.2) {
                reject("Failed to pour coffee");
            } else {
                resolve();
            }
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });