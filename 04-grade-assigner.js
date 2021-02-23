let number= Number(prompt("Enter any number between 1 To 100"));
if (number<=100) {
   if (number>=60 && number<=69) {
       console.log("You received a D ");
   } else if (number>=70 && number<=79) {
    console.log("You received a C ");
   } else if (number>=80 && number<=89) {
    console.log("You received a B");
   } else if (number>=90 && number<=100) {
    console.log("You received a A");
   } else if (number<60) {
    console.log("You received a F");
   }

    

}else {
    alert("Only numbers between 1 and 100 are accepted")
}