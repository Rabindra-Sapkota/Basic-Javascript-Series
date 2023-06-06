// Question:  Prompt user to get two numbers as input and display its sum
var x = prompt("Enter First Number")
var y = prompt("Enter Second Number")
document.write("Sum of "+x+" and "+y+" is "+(x+y)+"<br/>") // Displays concat value as input are stored as string

// Convert inputs to Int before calculating sum
document.write("Sum after int conversion "+x+" and "+y+" is "+(parseInt(x)+parseInt(y))+"<br/>")

// Convert inputs to float if number are float
document.write("Sum after float conversion "+x+" and "+y+" is "+(parseFloat(x)+parseFloat(y))+"<br/>")
