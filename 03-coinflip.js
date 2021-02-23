let randomNum = Math.round(Math.random());
let coinFlip =randomNum;

let choice = prompt("Select head or tail!!!!!!");
 if ((choice==="head") || (choice==="tail")) {
    

    if(coinFlip>0.5 ) {
    if(choice==="head") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
    }else   {
        if (choice==="tail") {
        alert("The flip was tails and you chose tails...you win!");
        } else {
        alert("The flip was tails but you chose heads...you lose!");
        }  
        }
} else {
    alert("please select head or tail");
}