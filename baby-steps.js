let rsl=0

for(let i=2;i<process.argv.length;i++){
    rsl+=Number(process.argv[i])
}

console.log(rsl)