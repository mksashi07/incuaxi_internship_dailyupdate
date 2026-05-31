//Node.js Process Management
//Process management in Node.js is about controlling your application's lifecycle.
//accessing process information
// Process identification
console.log('Process ID (PID):', process.pid);

// Platform information
console.log('Platform:', process.platform);
console.log('Node.js version:', process.version);

// Memory usage (in bytes)
console.log('Memory usage:', process.memoryUsage());

// Command line arguments
console.log('Arguments:', process.argv);

//exit a process
//1.normal exit
// Exit with success (status code 0)
process.exit();

// Or explicitly
process.exit(0);
//2.exit with error
// Exit with error (status code 1)
process.exit(1);

//3. Before Exit Event
// Run cleanup before exiting
process.on('beforeExit', (code) => {
  console.log('About to exit with code:', code);
});

//Handling Process Events
// Handle Ctrl+C
process.on('SIGINT', () => {
console.log('\nGot SIGINT. Press Control-D to exit.');
// Perform cleanup if needed
process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Cleaning up...');
  // Perform cleanup if needed
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Cleaning up...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup if needed
  process.exit(1); // Exit with error
});

//Environment Variables
//Accessing Environment Variables
// Get a specific environment variable
const apiKey = process.env.API_KEY;

// Set a default value if not defined
const port = process.env.PORT || 3000;

// Check if running in production
const isProduction = process.env.NODE_ENV === 'production';

// List all environment variables
console.log('Environment variables:', process.env);

//Process Monitoring and Performance
//1.Memory Usage
// Get memory usage in MB
function getMemoryUsage() {
  const used = process.memoryUsage();
  return {
    rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
    external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
  };
}

// Monitor memory usage every 5 seconds
setInterval(() => {
  console.log('Memory usage:', getMemoryUsage());
}, 5000);

//CPU Usage
const startUsage = process.cpuUsage();

// Do some CPU-intensive work
for (let i = 0; i < 1000000000; i++) {}

const endUsage = process.cpuUsage(startUsage);
console.log('CPU usage (user):', endUsage.user / 1000, 'ms');
console.log('CPU usage (system):', endUsage.system / 1000, 'ms');
