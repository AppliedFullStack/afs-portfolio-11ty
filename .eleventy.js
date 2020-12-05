module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets');

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