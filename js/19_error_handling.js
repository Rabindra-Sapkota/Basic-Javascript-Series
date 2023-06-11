function calculate_area(){
    try{
        length = parseFloat(document.area_form.length.value)
        breadth = parseFloat(document.area_form.breadth.value)
        result = document.area_form.area
        validation = document.area_form.validation
        validation.value = ''
        if (isNaN(length)){
            throw new Error("Invalid value for length")
        }
        if (isNaN(breadth)){
            throw new Error("Invalid value for breadth")
        }
        if (length < 0){
            throw new Error("Negative value for length")
        }
        if (breadth < 0){
            throw new Error("Negative value for breadth")
        }
        result.value = length * breadth
    }catch (exception){
        validation.value = exception.message
    }
}

/*
-- Error Handling
Syntax:
    try{
        -- code
    }catch (exception) {
        -- error logic --
    }finally {
        -- code to run no matter if error occured or not
    }

-- Raising Error
throw new Error("error_message")
*/
