window.addEventListener("load", add_event_listeners)


function add_event_listeners(){
    document.getElementById("create_node").addEventListener("click", create_node)
    document.getElementById("remove_node").addEventListener("click", remove_node)
}


function create_node(){
    var div1_node = document.getElementById("div1")
    var new_node = document.createElement("p")  // Create paragraph element
    var user_text = document.getElementById("user_text").value
    new_node.innerHTML = user_text
    div1_node.appendChild(new_node)

}


function remove_node(){
    var div1_node = document.getElementById("div1")
    sample_p_node = document.getElementById("p1")
    try{
        div1_node.removeChild(sample_p_node)
    }catch (error){
        div1_node.removeChild(div1_node.lastChild)
    }
}
