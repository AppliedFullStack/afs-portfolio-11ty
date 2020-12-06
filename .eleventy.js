require('dotenv').config()
const pluginSass = require("eleventy-plugin-sass");

module.exports = (eleventyConfig) => {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPlugin(
    pluginSass,
    {
      sourcemaps: true
    }
  );

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      data: "../_data",
      output: "docs"
    },
    passthroughFileCopy: true
  }
}