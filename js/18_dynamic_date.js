function handle_on_load(){
    // Call get_date function every second (1000ms) with help of setInterval
    setInterval(get_date, 1000)
}


function get_date(){
    current_dt = new Date()
    document.getElementById("date_print").innerHTML = "DateTime: " + current_dt.toLocaleString()
}