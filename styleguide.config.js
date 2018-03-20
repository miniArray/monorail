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
    name: 'Windows',
    components: 'src/components/+(MWindow*|MTitleBar)/*.vue',
  },  {
    name: 'Transitions',
    components: 'src/components/+(MCollapsible)/*.vue',
  }, {
  },  {
    name: 'Navigation',
    components: 'src/components/+(MNavigation*)/*.vue',
  }, {
    name: 'Controls',
    components: 'src/components/+(MCharm)/*.vue',
  }]
}