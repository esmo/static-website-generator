// Import required modules
const { exec } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Access an environment variable
const outputDir = process.env.SWG_OUTPUT_DIRECTORY;

// Prepare your command line command
const command = `npm run build && browser-sync start --server ${outputDir} --files html --no-notify`;

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
