var numbers = [];

while (true) {

  var value = prompt("Введіть число масиву (якщо хочте закінчити введіть будь-яке слово або букву", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}
 alert( numbers);

var arr = numbers;
var x = prompt("Введіть число з яким порівнювати", 0);
var newArr = arr.filter(function(number) {
  return number > x;
});

alert( newArr[0] );