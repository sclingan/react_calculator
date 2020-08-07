

function calc(current,next,func){
    let cur = parseInt(current);
    let nex = parseInt(next);
    console.log(func);
    console.log(cur);
    console.log(next);
    switch(func){
        case "+":
            return cur + nex;
        case "-":
            return cur - nex;
        case "*":
            return cur * nex;
        case "/":
            return cur / nex;
        default:
            return null;
    }
}

export default calc;