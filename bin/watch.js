const { run_cli } = require("./../lib/helper.js");

run_cli(
  "onchange '${input}/**/*' -- npm run build"
);
