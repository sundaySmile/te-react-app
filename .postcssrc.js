// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('precss'),
    require('postcss-cssnext'),
    require('postcss-custom-properties'),
    require('postcss-import')
    // require('postcss-partial-import'),
    // require('autoprefixer'),
    // require('postcss-nested')
    // require('postcss-mixins')
  ]
}
