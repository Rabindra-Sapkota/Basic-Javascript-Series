// Question: Get any number from 1 to 49 at which user want to stop printing or skip number while printing 1 to 50

skip_num = parseInt(prompt("Input Number between 1 to 40 which you want to skip in printing series"))
break_num = parseInt(prompt("Input Number between 1 to 40 at which you want to stop"))
for (num=1;num<=40;num++){
    if (num==skip_num){
        continue
    }
    if (num==break_num){
        break
    }
    document.write(num+"<br/>")
}


// continue: Skips where as break: terminates