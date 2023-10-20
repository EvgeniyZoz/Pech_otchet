const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./css/styles.css')
  eleventyConfig.addWatchTarget('./js/script.js')
  eleventyConfig.addPassthroughCopy({
    './js/script.js': './js/script.js'
  })
  eleventyConfig.addShortcode('version', function() {
    return now;
  })
}