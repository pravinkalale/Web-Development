let age = 20;
let marks = 65;

if(age >=18 && marks >= 50)
{
    console.log("Eligible for admission");
}
else
{
    console.log("Not eligible for admission");
}

/* OR || Operator */

let experienc = 0;
let internshipCompleted = true;

if( experienc >=1 || internshipCompleted === true)
{
    console.log("Eligible for interview");
}
else
{
    console.log("Not eligible for interview");
}

/* NOT operator */


let isPaymentDone = false;

if(!isPaymentDone)
{
    console.log("Payment pending");
}
else{
    console.log("Order confirmed");
}