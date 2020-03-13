var m1 = [];
var v;
		
for (var i=0; v!=0; i++){
	v = eval( prompt( "Введіть значеня > 0. Якщо хочете закінчити введіть 0: ", "value"));
	if(v<0){
		alert('Ви ввели значення менше 0');
	} else if (v>0 && v!=0){
		m1.push(v);
		document.getElementById('out').innerHTML += " "+v;
		} else{
			break;
		}
	}
document.getElementById('numb').innerHTML += m1.length;
function count() {
    var average = 0;
	for (var i = 0; i < m1.length; i++){
		average += m1[i];
		}
		average /= m1.length;
	    document.getElementById('average').innerHTML += average;
}