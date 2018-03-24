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
    content: './README.md'
  }, {
    content: './docs/CONTRIBUTING.md'
  }, {
    content: './docs/donate.md'
  }, {
    name: 'Selection',
    components: 'src/components/+(MSwitch)/*.vue',
  }, {
    name: 'Windows',
    components: 'src/components/+(MWindow*|MTitleBar|MSplitView)/*.vue',
  }, {
    name: 'Navigation',
    components: 'src/components/+(MNavigation*)/*.vue',
  }, {
    name: 'Controls',
    components: 'src/components/+(MCharm)/*.vue',
  }],
  require: [
    path.join(__dirname, 'build/styleguide/index.js'),
    path.join(__dirname, 'build/styleguide/index.css')
  ]
}