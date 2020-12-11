const fs=require('fs')


const callback=(err,data)=>{
    err ? console.error(err) : 
    console.log(data.split('\n').length-1)
}
fs.readFile(process.argv[2],'utf-8',callback)

// fs.readFile(process.argv[2],'utf-8',callback)

// const callback=(err,data)=>{
//     err ? console.error(err) : 
//     console.log(data.split('\n').length-1)
// }