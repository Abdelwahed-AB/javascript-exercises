const repeatString = function(str, num) {
    let tmp = '';
    for(let i = 0; i < num; i++)    tmp = tmp.concat(str);
    return tmp;
};

// Do not edit below this line
module.exports = repeatString;
