//linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at end
    insert(data) {

        const newNode = new Node(data);

        // If list is empty
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Traverse to last node
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        // Connect last node to new node
        current.next = newNode;
    }

    // Print linked list
    print() {

        let current = this.head;

        while (current !== null) {

            process.stdout.write(current.data + " -> ");

            current = current.next;
        }

        console.log("null");
    }
}

// Create linked list
const list = new LinkedList();

// Insert values
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

// Print list
list.print();
//hashmap
const hashMap = {};

// Add data
hashMap.name = "Mouni";
hashMap.age = 22;
hashMap.city = "Anantapur";

// Access data
console.log(hashMap.name);

// Update data
hashMap.age = 23;

// Delete data
delete hashMap.city;

// Print all data
console.log(hashMap);
//graph
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};

// 1. Add a node
graph.E = [];
console.log("Added node E");

// 2. Add edges
graph.E.push("A");
graph.A.push("E");
console.log("Added edge A ↔ E");

// 3. Remove an edge (A-B)
graph.A = graph.A.filter(n => n !== "B");
graph.B = graph.B.filter(n => n !== "A");
console.log("Removed edge A ↔ B");

// 4. Remove a node (C)
delete graph.C;

// 5. BFS (Breadth First Search)
function bfs(start) {
    const queue = [start];
    const visited = new Set();

    visited.add(start);

    console.log("\nBFS Traversal:");

    while (queue.length) {
        const node = queue.shift();
        console.log(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// 6. DFS (Depth First Search)
function dfs(node, visited = new Set()) {
    if (!node || visited.has(node)) return;

    visited.add(node);
    console.log(node);

    for (let neighbor of graph[node] || []) {
        dfs(neighbor, visited);
    }
}

// Print final graph
console.log("\nFinal Graph:", graph);

// Run traversals
bfs("A");

console.log("\nDFS Traversal:");
dfs("A");
//tree
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];   // general tree
        this.left = null;     // binary tree
        this.right = null;    // binary tree
    }
}

// ------------------------
// 1. GENERAL TREE
// ------------------------

const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

root.children.push(b, c);
b.children.push(d, e);

// ------------------------
// DFS (General Tree)
// ------------------------
function dfs(node) {
    if (!node) return;

    console.log(node.value);

    for (let child of node.children) {
        dfs(child);
    }
}

// ------------------------
// BFS (General Tree)
// ------------------------
function bfs(root) {
    const queue = [root];

    console.log("\nBFS Traversal:");

    while (queue.length) {
        const node = queue.shift();

        console.log(node.value);

        for (let child of node.children) {
            queue.push(child);
        }
    }
}

// ------------------------
// SEARCH (General Tree)
// ------------------------
function search(node, target) {
    if (!node) return false;

    if (node.value === target) return true;

    for (let child of node.children) {
        if (search(child, target)) return true;
    }

    return false;
}

// ------------------------
// HEIGHT (General Tree)
// ------------------------
function height(node) {
    if (!node) return 0;

    let max = 0;

    for (let child of node.children) {
        max = Math.max(max, height(child));
    }

    return max + 1;
}

// ------------------------
// BINARY TREE (example)
// ------------------------
const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);

// BFS for binary tree
function bfsBinary(root) {
    const queue = [root];

    console.log("\nBFS (Binary Tree):");

    while (queue.length) {
        const node = queue.shift();

        console.log(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}

// ------------------------
// RUN CODE
// ------------------------

console.log("DFS Traversal:");
dfs(root);

bfs(root);

console.log("\nSearch D:", search(root, "D"));

console.log("\nHeight:", height(root));

bfsBinary(root2);