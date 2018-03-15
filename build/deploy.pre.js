const { resolve } = require('path')
const { renameSync } = require('fs')

const path = resolve(__dirname, '..', '.git', 'hooks')
const newPath = `${path}_disabled`

renameSync(path, newPath)