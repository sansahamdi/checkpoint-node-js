const fs=require('fs')
// let line=fs.readFileSync('baby-steps.js','utf-8').valueOf().split('\n')
// console.log(line.length)
let content=fs.readFileSync(process.argv[2])
let lines=content.toString().split('\n').length-1
console.log(lines)
