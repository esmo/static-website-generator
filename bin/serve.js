const { run_cli } = require("./../lib/helper.js");

run_cli(
  "npm run build && browser-sync start --server ${output} --files html --no-notify"
);
