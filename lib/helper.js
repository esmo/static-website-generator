function run_cli(command) {
  const { exec } = require("child_process");
  const dotenv = require("dotenv");

  // Load environment variables
  dotenv.config();

  let variables = {};
  // Check if the user provided an argument
  // load .env otherwise
  if (process.argv[2] !== undefined) {
    const config = require("./../config.json");

    const siteName = process.argv[2];
    if (config["sites"][siteName] !== undefined) {
      variables.input = config["sites"][siteName]["input"];
      variables.output = config["sites"][siteName]["output"];
    } else {
      console.error(`Site ${siteName} not found.`);
    }
  } else {
    variables.input = process.env.SWG_INPUT_DIRECTORY;
    variables.output = process.env.SWG_OUTPUT_DIRECTORY;
  }

  // Prepare your command line command
  const parsedCommand = command.replace(/\${(\w+)}/g, (match, key) => {
    if (typeof variables[key] == "undefined") {
      throw new Error(
        `Variable '${key}'not found! Make sure it is defined in config.json or .env`
      );
    }
    let value = typeof variables[key] !== "undefined" ? variables[key] : match;
    return typeof variables[key] !== "undefined" ? variables[key] : match;
  });
  // const command = `npm run build && browser-sync start --server ${outputDir} --files html --no-notify`;
  console.log("running command " + parsedCommand);
  // Execute the command
  if (variables.input !== undefined && variables.output !== undefined) {
    console.log(
      `Generating output in '${variables.output}' from input directory '${variables.input}'`
    );
    exec(
      parsedCommand,
      {
        env: {
          ...process.env,
          SWG_INPUT_DIRECTORY: variables.input,
          SWG_OUTPUT_DIRECTORY: variables.output,
        },
      },
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Execution error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      }
    );
  } else {
    console.error("No input and / or output directory defined.");
  }
}

module.exports = { run_cli };
