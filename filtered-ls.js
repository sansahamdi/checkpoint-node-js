let fs=require('fs')
let path=require('path')

let fileName=process.argv[2]
let extension='.'+process.argv[3]

fs.readdir(fileName,(err,files)=>{
    err ? console.error(err) : 
            files.forEach(file => {
                if(path.extname(file)===extension){
                    console.log(file)
                }
            });
})