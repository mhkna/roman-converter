//create roman hash table
let romanHash = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

//number converter logic
var numeralConverter = function(numStr) {
  let roman = [];
  for (var key in romanHash) {
    roman.push(key.repeat(Number(numString) / romanHash[key]));
    numString = Number(numString) % romanHash[key];
  }
  return roman.join('');
}
