function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Server A failed");
            } else {
                resolve("Server A completed in 2 seconds");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Server B failed");
            } else {
                resolve("Server B completed in 3 seconds");
            }
        }, 3000);
    });
}

const promiseA = serverA();
const promiseB = serverB();

Promise.all([promiseA, promiseB])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch((error) => {
        console.log("Deployment Error:", error);
    });

Promise.race([promiseA, promiseB])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });