//NODE ASYNCHRONOUS
const fs = require('fs');

console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');

//ASYNCHRONOUS FILE READ
const fs = require('fs');

console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');
//nested callback
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    processOrders(orders, (err) => {
      if (err) return handleError(err);
      console.log('All done!');
    });
  });
});

//using promises
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => processOrders(orders))
  .then(() => console.log('All done!'))
  .catch(handleError);

  //using asynchronous await
  async function processUser(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    await processOrders(orders);
    console.log('All done!');
  } catch (err) {
    handleError(err);
  }
}

//modern asynchronous patterns
//promises
const fs = require('fs').promises;

console.log('1. Reading file...');
fs.readFile('myfile.txt', 'utf8')
  .then(data => {
    console.log('3. File content:', data);
  })
  .catch(err => console.error('Error:', err));

console.log('2. This runs before file is read!');

//asynchronous/await
async function readFiles() {
  try {
    console.log('1. Starting to read files...');
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('2. Files read successfully!');
    return { data1, data2 };
  } catch (error) {
    console.error('Error reading files:', error);
  }
}
//basic promise creation
/ Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (e.g., API call, file read)
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000); // Simulate delay
});

// Using the Promise
myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));
  
  //Reading a File with Promises
const fs = require('fs').promises;
const promise1 = Promise.resolve('First result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));
const promise3 = fs.readFile('myfile.txt', 'utf8'); // Read local file instead of fetch

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('Results:', results);
    // results[0] is from promise1
    // results[1] is from promise2
    // results[2] is the content of myfile.txt
  })
  .catch(error => {
    console.error('Error in one of the promises:', error);
  });
