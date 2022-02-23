const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    let tmp = '';
    for(let i = 0; i < num; i++)    tmp = tmp.concat(str);
    return tmp;
};

// Do not edit below this line
module.exports = repeatString;
