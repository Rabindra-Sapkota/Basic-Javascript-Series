function handle_mouse_over (x){
    x.style.color = "red";
    x.style.backgroundColor = "yellow";
    x.innerHTML = "TRY AGAIN!!";
}


function handle_mouse_out (x){
    x.style.color = "green";
    x.style.backgroundColor = "pink";
    x.innerHTML = "Hover to find Hidden Treasure";
}


function calculate(x){
    var num_1 = parseFloat(document.calculator_form.num_1.value);
    var num_2 = parseFloat(document.calculator_form.num_2.value);
    var result = document.calculator_form.result;
    var operation_name = x.value;
    if (operation_name == "ADD"){
        result.value = num_1 + num_2;
    }else if (operation_name == "SUBTRACT"){
        result.value = num_1 - num_2;
    }else if (operation_name == "MULTIPLY"){
        result.value = num_1 * num_2;
    }else if (operation_name == "DIVIDE"){
        result.value = num_1 / num_2;
    }else{
        // If nothing then last option is exponent
        result.value = num_1 ** num_2;
    }
}


function change_bg_color(color_name){
    document.body.style.backgroundColor = color_name;
}


function change_bg_image(image_path){
    document.body.style.backgroundImage = "url('"+image_path+"')"
}


function change_website(website_name){
    window.location = website_name
}