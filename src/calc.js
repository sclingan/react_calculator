

function calc(current,next,func){
    let cur = parseFloat(current);
    let nex = parseFloat(next);
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