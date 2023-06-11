function handle_on_load(){
    setTimeout(change_attribute_after_load, 3000)
}

function change_attribute_after_load(){
    document.getElementById("para_1").align = "center";
    document.getElementById("para_1").style.color = "blue";
    document.getElementById("para_1").style.fontSize = "xx-large";
}