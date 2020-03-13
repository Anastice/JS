  var x = prompt ("Введіть координату Х точки, яка буде центром симетрії","");
  var y = prompt ("Введіть координату Y точки, яка буде центром симетрії","");
  
  var x1 = prompt ("Введіть координату Х вершини A трикутника","");
  var y1 = prompt ("Введіть координату Y вершини A трикутника","");
  
  var x2 = prompt ("Введіть координату Х вершини B трикутника","");
  var y2 = prompt ("Введіть координату Y вершини B трикутника","");
  
  var x3 = prompt ("Введіть координату Х вершини C трикутника","");
  var y3 = prompt ("Введіть координату Y вершини C трикутника","");
  
  
function newCoord (a,c) {
	return c-a;
 }
var x22, y22, x4, y4, x6, y6
x22 = newCoord (x1,x); 
y22 = newCoord (y1,y);

x4 = newCoord (x2,x); 
y4 = newCoord (y2,y);

x6 = newCoord (x3,x); 
y6 = newCoord (y3,y); 

function newCoord2 (a,c) {
	var z = Number(a) + Number(c);
	return z;
 }
var x33, y33, x5, y5, x7, y7
x33 = newCoord2 (x22,x);
y33 = newCoord2 (y22,y);

x5 = newCoord2 (x4,x); 
y5 = newCoord2 (y4,y);

x7 = newCoord2 (x6,x); 
y7 = newCoord2 (y6,y); 

alert ("Нові координати точки відображенної відносно центру симетрії :\nA"+"["+x33+";"+y33+"]"+"\nB"+"["+x5+";"+y5+"]"+"\nC"+"["+x7+";"+y7+"]");