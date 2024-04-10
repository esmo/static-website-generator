const markdownIt = require("markdown-it");
const youtubePlugin = require("./markdown-plugins/youtube.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/assets");

  let markdownLib = markdownIt({"html": "true"}).use(youtubePlugin);
  eleventyConfig.setLibrary("md", markdownLib);

  // Your other Eleventy configuration...
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "docs", // Adjusted to your input directory
      includes: "_includes", // Default includes directory
      output: "html", // Adjusted to your output directory
    },
  };
};
