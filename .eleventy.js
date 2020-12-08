require('dotenv').config()
const pluginSass = require("eleventy-plugin-sass");
const { minify } = require("terser");

module.exports = (eleventyConfig) => {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('CNAME');

  eleventyConfig.addPlugin(
    pluginSass,
    {
      sourcemaps: true
    }
  );

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function(code, callback) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

  eleventyConfig.addNunjucksAsyncFilter("uniqueProjectTags", async function(projectsDataObject, callback) {
    try {
      let allFilters = projectsDataObject.map((project) => project.tags).flat();
      // Remove Duplicates
      allFilters = allFilters.filter((filter, index) => allFilters.indexOf(filter) === index);

      callback(null, allFilters);
    } catch (err) {
      console.error("Projects filtering error: ", err);
      // Fail gracefully.
      callback(null, code);
    }
  });

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