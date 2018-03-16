const path = require('path')

module.exports = {
  title: 'monorail',
  styleguideDir: 'dist/guide',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: false,
  showUsage: true,
  showCode: true,
  template: 'build/styleguide/index.html',
  highlightTheme: 'material',
  sections: [{
    name: 'Selection',
    components: 'src/components/+(MSwitch)/*.vue',
  }, {
    name: 'Navigation',
    components: 'src/components/+(MNavigation*)/*.vue',
  }]
}