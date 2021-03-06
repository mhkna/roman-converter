//create roman hash table
const romanHash = {
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
let numeralConverter = function(numStr) {
  let roman = [];
  for (var key in romanHash) {
    roman.push(key.repeat(Number(numStr) / romanHash[key]));
    numStr = Number(numStr) % romanHash[key];
  }
  return roman.join('');
}

//DOM logic
window.onload = function() {
  const form = document.querySelector('.input-form');
  form.addEventListener('submit', printConverted);
}

//print output to DOM
let printConverted = function(event) {
  event.preventDefault();
  // console.log(this)
  let num = this.xnum.value;
  const outputDiv = document.querySelector('.output-div');
  outputDiv.innerText = numeralConverter(num);
}
