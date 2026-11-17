function getBugs() {
    return new Promise((resolve, reject) => {

        const apiFails = Math.random() < 0.5;

        setTimeout(() => {

            if (apiFails) {
                reject("API timeout");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure",
                    "Database error"
                ]);
            }

        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error fetching bugs:", error);
    });