const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(b)!="number" || typeof(a)!="number") return 'ERROR';
    if (b < a){
        let c = a;
        a = b;
        b = c;
    }
    let sum = 0;

    for(; a <= b; a++){
        sum += a;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
