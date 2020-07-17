var num=Number(prompt("Enter Number:"));

function evenOdd(num)
{
    let result="";
    if(num%2==0)
     {
         result="even";
     }
     else{
         result="odd";
     }
    return result;
}

let str=evenOdd(num);
console.log("The number entered is "+num+" and Number is "+str);