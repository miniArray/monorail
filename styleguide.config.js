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
  mixins: [
    './build/styleguide/mixin.js'
  ],
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
    name: 'Layout',
    components: 'src/components/+(MContent)/*.vue',
  }, {
    name: 'List',
    components: 'src/components/+(MList*)/*.vue',
  }, {
    name: 'Windows',
    components: 'src/components/+(MWindow*|MTitleBar|MSplitView)/*.vue',
  }, {
    name: 'Navigation',
    components: 'src/components/+(MNavigation|MNavigationView)/*.vue',
  }, {
    name: 'Controls',
    components: 'src/components/+(MCharm)/*.vue',
  }],
  require: [
    path.join(__dirname, 'build/styleguide/index.js'),
    path.join(__dirname, 'build/styleguide/index.css')
  ]
}