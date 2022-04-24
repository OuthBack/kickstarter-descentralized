const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
const compiled = solc.compile(source, 1);

if (compiled.errors?.length) {
  throw new Error(compiled.errors);
}

const output = compiled.contracts;
fs.ensureDirSync(buildPath);

for (let contract in output) {
  const removeCollon = contract.replace(':', '');

  fs.outputJsonSync(path.resolve(buildPath, removeCollon + '.json'), output[contract]);
}
