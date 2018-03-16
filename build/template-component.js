const { writeFileSync } = require('fs')
const { sync: touchDir } = require('mkdirp')
const { resolve } = require('path')

const kebabCase = str => str
  .split(/(?=[A-Z])/)
  .map(s => s.toLowerCase())
  .join('-')

const createIndexTemplate = name => `
import ${name} from './${name}.vue'

${name}.install = function install (Vue) {
  Vue.component(${name}.name, ${name})
}

export default ${name}
`.trim()

const createComponentTemplate = name => `
<template>
  <div>

  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: '${name}',

  props: {
    /**
     * Caption of group
     */
    caption: {
      type: String,
      default: ''
    },
  }
}
</script>

<docs>
\`\`\`vue
<template>
  <${kebabCase(name)} />
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
\`\`\`
</docs>
`.trim()
const getDir = path => require('path').parse(path).dir

const write = (path, data) => {
  touchDir(getDir(path))
  writeFileSync(path, data)
}

const create = name => {
  const root = resolve(__dirname, '../src/components', name)
  const index = resolve(root, 'index.js')
  const component = resolve(root, `${name}.vue`)

  write(component, createComponentTemplate(name))
  write(index, createIndexTemplate(name))
}

module.exports = create(process.argv[2])