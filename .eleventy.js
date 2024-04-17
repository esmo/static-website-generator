require('dotenv').config();
const markdownIt = require("markdown-it");
const youtubePlugin = require("./markdown-plugins/youtube.js");
const { addFilters } = require("./extensions/filters.js");
const { addShortcodes } = require("./extensions/shortcodes.js");

module.exports = function (eleventyConfig) {
  // Your other Eleventy configuration...
  let cfg = {
    markdownTemplateEngine: "njk",
    dir: {
      input: process.env.SWG_INPUT_DIRECTORY || "src", // Adjusted to your input directory
      includes: "_includes", // Default includes directory
      output: process.env.SWG_OUTPUT_DIRECTORY || "html", // Adjusted to your output directory
    },
  };

  console.log("reading from", cfg.dir.input);
  console.log("writing to", cfg.dir.output);

  const markdownLib = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(youtubePlugin);

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy(cfg.dir.input + "/assets");
  eleventyConfig.addPassthroughCopy(
    cfg.dir.input+"/**/*.+(png|jpg|jpeg|gif|svg|mp4|webm)"
  );

  addFilters(eleventyConfig);
  addShortcodes(eleventyConfig);

  return cfg;
};
