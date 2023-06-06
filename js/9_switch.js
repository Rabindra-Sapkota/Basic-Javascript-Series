// Question: Take the proceed choice as input from user and show if its Y or N or Invalid

var proceed_choice = prompt("Do you want to proceed (Y/N)").toUpperCase()

switch (proceed_choice) {
    case "Y":
        document.write("You choose to proceed further")
        break
    case "N":
        document.write("You choose not to proceed further")
        break
    default:
        document.write("You entered invalid choice")
}

/*
Syntax:
    switch (variable) {
        case label1:
            -- code logic --
        case label2:
            -- code logic --
        case label3:
            -- code logic --
        default:
            -- default logic --
    }
*/
