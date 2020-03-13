function insert(num){
  document.form.textview.value = document.form.textview.value+num;
}

function equal(){
  var exp = document.form.textview.value;
  if(exp){
  document.form.textview.value = eval(exp);
  }
}

function clean(){
  document.form.textview.value = "";
}

function back(){
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}
// function plus(){
//   var num1, num2, result;
//
//   num1 = document.getElementById('n1').value;
//   num1 = parseInt(num1);
//
//   num2 = document.getElementById('n2').value;
//   num2 = parseInt(num2);
//
//   result = num1 + num2 ;
//
//   document.getElementById('out').innerHTML = result ;
// }
