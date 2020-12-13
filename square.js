const arg = process.argv[2]
function square(num){
    let result = ''
    for(let i = 0; i < num; i++){
        result += "#"
    }
    for(let j = 0; j < num; j++){
        console.log(result)
    }
}
square(arg)