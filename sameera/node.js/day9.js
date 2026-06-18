//Basic DNS Lookup
const dns = require('dns');

// Look up a domain name
dns.lookup('example.com', (err, address, family) => {
  if (err) {
    console.error('Lookup error:', err);
    return;
  }
  console.log(`IP address: ${address}`);
  console.log(`IP version: IPv${family}`);
});

//Callback-based API
// Import the DNS module
const dns = require('dns');

// Example usage
dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
  console.log(`Resolved: ${address} (IPv${family})`);
});
//promise based API
// Import the promises API
const { promises: dns } = require('dns');
// Or: const dns = require('dns').promises;
// Example with async/await
async function lookupDomain(domain) {
  try {
    const address = await dns.lookup(domain);
    console.log(`Resolved: ${address.address} (IPv${address.family})`);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}
lookupDomain('example.com');
//Resolving Domain Names to IP Addresses

const dns = require('dns');

// Callback-based API
dns.lookup('www.example.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP address: %s', address);
  console.log('IP version: IPv%s', family);
});
