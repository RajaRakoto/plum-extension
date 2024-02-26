/* libs */
import fs from 'fs'
import path from 'path'

// ========================================

// to get all ES6 modules syntax from the source directory
function getES6moduleSyntaxBySource(source, extension) {
  const fixVarName = (varName) => varName.replace(/-/g, '_')
  const dropRight = (arr, n = 1) => arr.slice(0, -n)
  function exploreDirectory(currentDir) {
    let files = fs.readdirSync(currentDir)
    let sourceES6 = []
    files.forEach((file) => {
      const filePath = path.join(currentDir, file)
      const stats = fs.statSync(filePath)
      if (stats.isDirectory()) {
        sourceES6 = sourceES6.concat(exploreDirectory(filePath))
      } else if (stats.isFile() && file.endsWith(extension)) {
        const fileNameWithoutExtension = dropRight(file, extension.length)
        sourceES6.push(
          `import { ${fixVarName(fileNameWithoutExtension)} } from './${path.relative(source, filePath)}';`,
        )
      }
    })
    return sourceES6.join('\n')
  }
  return exploreDirectory(source)
}

console.log(getES6moduleSyntaxBySource('../src', '.js'))
