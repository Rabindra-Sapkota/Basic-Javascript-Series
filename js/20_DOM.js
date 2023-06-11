function handle_on_load(){
    setTimeout(change_attribute_after_load, 3000)
}

function change_attribute_after_load(){
    document.getElementById("para_1").align = "center";
    document.getElementById("para_1").style.color = "blue";
    document.getElementById("para_1").style.fontSize = "xx-large";
}


/*
Similar to DOM BOM (Browser Object model gives access to browser properties)

Examples:
    document.write(window.screen.width + " " + window.screen.height)
    window.history.forward()    // Go one step forward in browser history
    window.location = "www.google.com"
    navigator.appName
    navigator.appCodeName
    navigator.cookieEnabled
    for (x in navigator){
        document.write(x+"<br/>")
    }
*/