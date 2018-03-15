const path = require('path')

module.exports = {
  title: 'monorail',
  styleguideDir: 'dist/guide',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: true,
  showUsage: true,
  showCode: true,
  highlightTheme: 'material',
  sections: [{
    name: 'Selection',
    components: 'src/components/+(MSwitch)/*.vue',
  }, {
    name: 'Navigation',
    components: 'src/components/+(MNavigation)/*.vue',
  }],
  require: [
    path.join(__dirname, './node_modules/metro4/build/css/metro.css')
  ]
};
