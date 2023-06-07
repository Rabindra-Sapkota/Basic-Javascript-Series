// String Objects
var course_name = " Java Script ";
document.write("---------- String -------------<br/>")
document.write("Variable value : "+course_name+"<br/>");
document.write("Variable length : "+course_name.length+"<br/>");
document.write("First index of a : "+course_name.indexOf("a")+"<br/>");
document.write("Last index of a : "+course_name.lastIndexOf("a")+"<br/>");
document.write("Varaible in lowercase : "+course_name.toLowerCase()+"<br/>");
document.write("Varaible in Upper : "+course_name.toUpperCase()+"<br/>");
document.write("Replacing Java with Python : "+course_name.replace("Java", "Python")+"<br/>");
document.write("Trimmed at start : "+course_name.trimStart()+"<br/>");
document.write("Trimmed at end : "+course_name.trimEnd()+"<br/>");
document.write("Trimmed : "+course_name.trim()+"<br/>");
document.write("Ends with pt : "+course_name.endsWith("pt ")+"<br/>");
document.write("Ends with ps: "+course_name.endsWith("ps")+"<br/><br/>");
// includes, slice, split are other functions


// Boolean Object
document.write("---------- Boolean -------------<br/>")
var b1 = new Boolean(0);
var b2 = new Boolean(1);
var b3 = new Boolean("");
var b4 = new Boolean("Test");
var b5 = new Boolean(NaN);
var b6 = new Boolean(null);
document.write(b1+" "+b2+" "+b3+" "+b4+" "+b5+" "+b6+"<br/><br/>");


// Math Object
document.write("---------- Math -------------<br/>");
var num_1 = 9.6456788956;
document.write("Value of PI: "+Math.PI+"<br/>");
document.write("Variable: "+num_1+"<br/>");
document.write("Square Root: "+Math.sqrt(num_1)+"<br/>");
document.write("Cube Root: "+Math.cbrt(num_1)+"<br/>");
document.write("2 power 3: "+Math.pow(2, 3)+"<br/>");
document.write("Floor : "+Math.floor(num_1)+"<br/>");
document.write("Ceiling: "+Math.ceil(num_1)+"<br/>");
document.write("Round: "+Math.round(num_1)+"<br/><br/>");
// Log, Trigonometric, Exponential, Min, Max, ABS


// Array
document.write("---------- Array -------------<br/>");
var array_1 = new Array(2.4, 3, "Rabi");
document.write("Value of Array: "+array_1+"<br/>");
document.write("Length of Array: "+array_1.length+"<br/>");
document.write("Concatenation with Array: "+array_1.concat(9.7, ["JS", 100])+"<br/>");
document.write("Second element of Array: "+array_1[1]+"<br/>");
document.write("Reverse of Array: "+array_1.reverse()+"<br/>");
document.write("Join with -: "+array_1.join("-")+"<br/>");
delete array_1[2];
// After deletion, index holds undefined value
document.write("After deletion of third element: "+array_1+"<br/>");
array_1[1] = "JS"
document.write("After replacement of second element: "+array_1+"<br/></br>");
// push, pop, indexof, filter, find, flat, foreach and other


// Date
document.write("---------- Array -------------<br/>");
var date_1 = new Date();
document.write("Date Time: "+date_1.toLocaleString()+"<br/>")
document.write("Date: "+date_1.toLocaleDateString()+"<br/>")
document.write("Time: "+date_1.toLocaleTimeString()+"<br/>")


// Other Reference: https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
