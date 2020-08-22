function calc(value1,value2,func){
    let val1 = parseFloat(value1);
    let val2 = parseFloat(value2);
    switch(func){
        case "add":
            return val1 + val2;
        case "subtract":
            return val1 - val2;
        case "multiply":
            return val1 * val2;
        case "divide":
            return val1 / val2;
        default:
            return 'error';
    }
}

export default calc;