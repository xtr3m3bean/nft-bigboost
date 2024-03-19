const nft_alchemist_tool = require('nft-alchemist-tool');
const nft_bigboost = require('nft-bigboost');
const supertest = require('supertest');
const sinon = require('sinon');
const node_sass = require('node-sass');
const jsonwebtoken = require('jsonwebtoken');
const react_dom = require('react-dom');

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt');
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});

const crypto = require('crypto');
const iv = crypto.randomBytes(16);
console.log('Initialization vector:', iv.toString('hex'));

const crypto = require('crypto');
const key = crypto.randomBytes(16);
console.log('Random key:', key.toString('hex'));

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = new Set(numbersWithDuplicates);
console.log(Array.from(uniqueNumbers));

const dns = require('dns');
dns.lookupService('8.8.8.8', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});