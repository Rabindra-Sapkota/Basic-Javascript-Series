window.addEventListener("load", handle_events)
// Once window is loaded add event listner for handle_event function


function handle_events(){
    document.getElementById("click_button").addEventListener("click", handle_click)
}


function handle_click(){
    alert ("I am clicked")
}