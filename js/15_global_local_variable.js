function print_local_x(){
    var x = 10;
    document.write("Local x: "+x+"<br/>")
}


function func1(){
    var a = "Hello "
    function func2(){
        var b = "World"
        document.write(a+b) // inner function has access to variable of outer function
    }

    return func2()
}


var x = 2;
document.write("Global x: "+x+"<br/>")
print_local_x()
document.write("Global x: "+x+"<br/>")

document.write("<br/><br/>")
document.write("Closure <br/>")
func1()
