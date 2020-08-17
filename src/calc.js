

function calc(current,next,func){
    let cur = parseInt(current);
    let nex = parseInt(next);
    console.log(func);
    console.log(cur);
    console.log(next);
    switch(func){
        case "add":
            return cur + nex;
        case "subtract":
            return cur - nex;
        case "multiply":
            return cur * nex;
        case "divide":
            return cur / nex;
        default:
            return null;
    }
}

export default calc;