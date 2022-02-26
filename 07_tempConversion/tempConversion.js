const ftoc = function(temp) {
  let c = (temp - 32) * 5/9;
  c = Math.round(c * 10) / 10;
  return c;
};

const ctof = function(temp) {
  let f = temp * (9/5) + 32;
  f = Math.round(f*10)/10;
  return f; 
};

console.log(ftoc(100));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
