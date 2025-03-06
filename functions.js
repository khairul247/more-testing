function sum(a, b) {
    return a + b;
  }

function capitalize(word){
  return word[0].toUpperCase()+word.substring(1);
}

function reverseString(word){
  return word.split("").reverse().join("");
}

const calculator = {
  add: function (a,b){
    return a+b;
  },
  substract: function (a,b){
    return a-b;
  },
  divide: function (a,b){
    return a/b;
  },
  multiply: function (a,b){
    return a*b;
  }
}

module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator
};