const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: "src",
      output: "_site" // _site is the default output folder, public might be another appropriate folder name
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk', // allows the use of nunjucks templating language in markdown files
    htmlTemplateEngine: 'njk', // allows the use of nunjucks templating language in HTML files
    dataTemplateEngine: 'njk',
  }
}