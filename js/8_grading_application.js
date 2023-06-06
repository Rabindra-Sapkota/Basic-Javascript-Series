aws_mark = parseInt(prompt("Enter Marks in AWS"))
python_mark = parseInt(prompt("Enter Marks in Python"))
js_mark = parseInt(prompt("Enter Marks in Java Script"))

document.write("Progress Report<br/>")
document.write("AWS: "+aws_mark+"<br/>")
document.write("Python: "+python_mark+"<br/>")
document.write("Java Script: "+js_mark+"<br/>")
document.write("Total: "+(aws_mark+python_mark+js_mark)+"<br/>")
average = (aws_mark+python_mark+js_mark)/3
document.write("Average: "+parseFloat(average).toFixed(2)+"<br/>")

// If any of the marks is less than 40 then candidate is fail
if (aws_mark < 40 || python_mark < 40 || js_mark < 40) {
    document.write("Grade: Fail")
}
// if candidate is not fail then calculate his/her grade
else {
    if (average < 50){
        document.write("Grade: C")
    }
    else if (average < 60) {
        document.write("Grade: C+")
    }
    else if (average < 70){
        document.write("Grade: B")
    }
    else if (average < 80){
        document.write("Grade: B+")
    }
    else if (average < 90){
        document.write("Grade: A")
    }
    else{
        document.write("Grade: A+")
    }
    
}
