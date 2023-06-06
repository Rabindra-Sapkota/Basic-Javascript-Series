// For resuable code or event hadling

function calculate_sum(x, y){
    return (x + y)
}


num_1 = parseFloat(prompt("Enter First Number"))
num_2 = parseFloat(prompt("Enter Second Number"))
sum = calculate_sum(num_1, num_2)
document.write("The sum is "+sum)


/* 
Syntax:
function function_name(arg1, arg2) {
    -- code --
    return result // optional
}

To invoke: function_name(arg1, arg2)
*/