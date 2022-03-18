const palindromes = function (str) {
    let a = str.replace(/[,;! \.:\/\\]/g, "").toLowerCase();
    let n = a.length;
    for(let i in a){
        if(a[i] != a[n-1-i]) return false;
    }
    return true;
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
