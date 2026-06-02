console.log("Program Started");

// ====================================
// 1. CALLBACK
// ====================================

function fetchUserCallback(callback) {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "MSK"
        };

        callback(user);
    }, 2000);
}

fetchUserCallback((user) => {
    console.log("Callback Result:");
    console.log(user);
});

// ====================================
// 2. PROMISE
// ====================================

function fetchUserPromise() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = true;

            if (success) {
                resolve({
                    id: 2,
                    name: "hemanth"
                });
            } else {
                reject("Failed to fetch user");
            }

        }, 3000);

    });
}

fetchUserPromise()
    .then((user) => {
        console.log("Promise Result:");
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });

// ====================================
// 3. ASYNC / AWAIT
// ====================================

function fetchUserAsync() {
    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 3,
                name: "putty"
            });

        }, 4000);

    });
}

async function getUser() {

    try {

        const user = await fetchUserAsync();

        console.log("Async/Await Result:");
        console.log(user);

    } catch (error) {

        console.log(error);

    }

}

getUser();

console.log("Program Finished");