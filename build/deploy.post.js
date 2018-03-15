const { resolve } = require('path')
const { renameSync } = require('fs')

const path = resolve(__dirname, '..', '.git', 'hooks_disabled')
const newPath = `${path}`.replace('_disabled', '')

renameSync(path, newPath)