/* libs */
import traverse from 'traverse'
import fs from 'fs'
import path from 'path'

// ========================================

// to traverse all source object and get all values of the key
export function traverseKeyValueByObject(source, key) {
  let traverseResult = []
  traverse(source).forEach(function (e) {
    if (this.key == key) {
      traverseResult.push(e)
    }
  })
  return traverseResult
}

// to export all data
export function fsExport(data, filepath) {
  fs.writeFile(filepath, data, 'utf-8', (err) => {
    if (err) {
      console.log(err)
    }
  })
}

// reformat engine
export function reformatSnippets(source, varName) {
  let prefixList = traverseKeyValueByObject(source, 'prefix')
  let bodyList = traverseKeyValueByObject(source, 'body').map((block) =>
    block.map((e) => `"${e}"`),
  )
  let descriptionList = traverseKeyValueByObject(source, 'description')
  let result = ''
  prefixList.forEach((prefix, index) => {
    result += `
			"${descriptionList[index]}": {
				"prefix": "${prefix}",
				"body": [${bodyList[index]}],
				"description":  "${descriptionList[index]}"
			}${index == prefixList.length - 1 ? '' : ','}
			`
  })
  return `export const ${varName} = {${result}};`
}

// to concat all snippets to one JSON file
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
  const refactorSourceList = (sourceList) => {
    let objRefactored = {}
    sourceList.forEach((source) => {
      objRefactored = { ...objRefactored, ...source }
    })
    return objRefactored
  }
  const JSONexportation = (sourceList, distPath) => {
    fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', (err) => {
      console.log(err ? err : 'The file was saved!')
    })
  }
  const distDirectory = path.dirname(distPath)
  if (!fs.existsSync(distDirectory)) {
    fs.mkdirSync(distDirectory, { recursive: true })
  }
  JSONexportation(refactorSourceList(sourcesList), distPath)
}
