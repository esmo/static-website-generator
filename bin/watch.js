// Import required modules
const { exec } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Access an environment variable
const inputDir = process.env.SWG_INPUT_DIRECTORY;

// Prepare your command line command
const command = `onchange '${inputDir}/**/*' -- npm run build`;

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Execution error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
