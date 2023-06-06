// Arithmetic  +, - , * , / , %, **
var a = 5;
var b = 2;
document.write("Arithmetic Operators (+, -, /, %, *, **) <br/>")
document.write("Variables are "+a+", "+b+"<br/>")
document.write("The sum is "+(a+b)+"<br/>")
document.write("The difference is "+(a-b)+"<br/>")
document.write("The product is "+(a*b)+"<br/>")
document.write("The Division is "+(a/b)+"<br/>")
document.write("The Modulo is "+(a%b)+"<br/>")
document.write("The Exponent is "+(a**b)+"<br/>")

var c = '10';
var d = '6';
document.write("The difference of "+c+" and "+d+" is "+(c-d)+"<br/>")
document.write("The sum of "+c+" and "+d+" is "+(c+d)+"<br/>")
/*
- Numeric calculation will be done even if variables are string as long as they hold numeric data
- If any of the string holds non-numeric value, the result will be NaN
- This case holds for all arithmetic operators other than +. In case of + result will be concatenation
*/


// Comparision Operator
document.write("<br/><br/>")
document.write("Comparision Operators (==, ===, !=, !==, >, >=, <, <=) <br/>")
var p = '10'
var q = 10
document.write("Variables are "+p+" and "+q+"<br/>")
document.write("== Operator: " + (p==q) + "<br/>")  // Checks if value of p and q are equal
document.write("=== Operator: " + (p===q) + "<br/>")  // Checks if value and datatype of p and q are equal
document.write("!= Operator: " + (p!=q) + "<br/>")  // Checks if value of p and q are unequal
document.write("!== Operator: " + (p!==q) + "<br/>")  // Checks if value and datatype of p and q are unequal
document.write("> Operator: " + (p>q) + "<br/>")  // Checks if value of p is greater than q
document.write(">= Operator: " + (p>q) + "<br/>")  // Checks if value of p is greater or equal than q


// Logical Operator
document.write("<br/><br/>")
document.write("Comparision Operators (&& , ||, !) <br/>")
var r = true;
var s = false;
document.write("Variables are "+r+" and "+s+"<br/>")
document.write("&& Operator: " + (r && s) + "<br/>")  // Logical AND
document.write("|| Operator: " + (r || s) + "<br/>")  // Logical OR
document.write("! Operator for first variable: " + (!r) + "<br/>")  // Logical NOT


// Assignment (++a, a++, +=, -=, *=, =)
document.write("<br/><br/>")
var a = 2   // = assignment is done here
document.write("Initial Value: "+a+"<br/>")
a += 1
document.write("Increment by 1 : "+a+"<br/>")
