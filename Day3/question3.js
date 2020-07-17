let marks=+(prompt("Enter Marks: "));
console.log(marks);
console.log("output using if else ladder");

if(marks<40 && marks>=0){
    console.log("Failed");
}
else if(marks<=59)
{
    console.log("Passed with second class");
}
else if(marks<=69)
{
    console.log("Passed with first class");
}
else if(marks<=100){
    console.log("Passed with distinction");
}
else{
    console.log("Invalid Input")
}
console.log(' ');
console.log("Output using ternary Operator: ");

//ternary
console.log((marks<=40 && marks>=0)? "Failed":
(marks<59)?"Passed with second class":
(marks<69)?"Passed with first class":
(marks<=100)?"Passed with distinction":
"Invalid Input");

console.log(' ');
console.log("Output using switch case:");

switch(Math.floor(marks/10))
{
    case 0:
    case 1: 
    case 2:
    case 3:       
        console.log("Failed");
        break;
    case 4:
    case 5:
      console.log("Passed with second class");
        break;   
    case 6:
        console.log("Passed with first class");
        break;      

    case 7:
    case 8: 
    case 9:
    case 10:        
         console.log("Passed with Distinction");
         break;
    default:
        console.log("Invalid Input");     
}