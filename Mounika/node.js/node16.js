

// NODE.JS TESTING DEMO

function add(a, b) {
    if (typeof a != "number" || typeof b != "number")
        throw new Error("Arguments must be numbers");
    return a + b;
}

function subtract(a, b) {
    if (typeof a != "number" || typeof b != "number")
        throw new Error("Arguments must be numbers");
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0)
        throw new Error("Cannot divide by zero");
    return a / b;
}

function validatePassword(password) {
    if (password.length < 8) return false;
    if (!/\d/.test(password)) return false;
    return true;
}

class UserService {
    constructor(database) {
        this.database = database;
    }

    async getUserById(id) {
        const user = await this.database.findById(id);

        if (!user)
            throw new Error("User not found");

        return user;
    }
}

class AsyncService {
    async fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: "success",
                    data: [1, 2, 3]
                });
            }, 500);
        });
    }

    async processData() {
        const result = await this.fetchData();
        return result.data.map(n => n * 2);
    }
}

function runCalculatorTests() {
    console.log("Running Calculator Tests");

    assert.strictEqual(add(10, 5), 15);
    assert.strictEqual(subtract(20, 5), 15);
    assert.strictEqual(multiply(4, 5), 20);
    assert.strictEqual(divide(20, 4), 5);

    console.log("Calculator Tests Passed\n");
}

function runPasswordTests() {
    console.log("Running Password Tests");

    assert.strictEqual(validatePassword("abc"), false);
    assert.strictEqual(validatePassword("abcdefgh"), false);
    assert.strictEqual(validatePassword("abcd1234"), true);

    console.log("Password Tests Passed\n");
}

async function runUserTests() {
    console.log("Running User Service Tests");

    const mockDatabase = {
        findById: async id => {
            if (id == 1)
                return {
                    id: 1,
                    name: "Alice"
                };

            return null;
        }
    };

    const service =
        new UserService(mockDatabase);

    const user =
        await service.getUserById(1);

    assert.strictEqual(
        user.name,
        "Alice"
    );

    try {
        await service.getUserById(99);
        assert.fail("Expected Error");
    } catch (err) {
        assert.strictEqual(
            err.message,
            "User not found"
        );
    }

    console.log(
        "User Service Tests Passed\n"
    );
}

async function runAsyncTests() {
    console.log("Running Async Tests");

    const service =
        new AsyncService();

    const result =
        await service.fetchData();

    assert.strictEqual(
        result.status,
        "success"
    );

    const processed =
        await service.processData();

    assert.deepStrictEqual(
        processed,
        [2, 4, 6]
    );

    console.log(
        "Async Tests Passed\n"
    );
}

async function runAllTests() {
    console.log(
        "Starting Test Suite\n"
    );

    runCalculatorTests();
    runPasswordTests();

    await runUserTests();
    await runAsyncTests();

    console.log(
        "All Tests Passed Successfully"
    );
}

runAllTests().catch(err => {
    console.error("Test Failed");
    console.error(err);
});
