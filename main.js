// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
// For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

// let number = parseInt(prompt("shkruaje nje numer"));
// let result=0;

// for(let i=1; i<=number; i++)
// {
//     result+=i;
// }
// console.log(result);


// 2. Request two numbers and find only their largest common divisor.

// let numberA = parseInt(prompt("Shkruani numrin e pare"));
// let numberB= parseInt(prompt("Shkruani numrin e dyte"));

// let pmp=1;

// for(let i=1; i<=numberA && i<=numberB; i++)
// {
//     if(numberA % i === 0 && numberB % i === 0)
//     {
//         pmp=i;
//     }
// }

// console.log("their largest common divisor is: " + pmp);



// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
// let number =  parseInt(prompt("Enter a number"));

// for(let i=1; i<=number; i++)
// {
//     if(number % i === 0)
//     {
//         console.log(i);
//     }
// }


// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
// let num = Number(prompt("Enter a number"));
// let count = 0;

// if (num === 0) {
//     count = 1;
// } else {

//     while (num % 1 !== 0) {
//         num = num * 10;
//     }

//     while (num >= 1 || num <= -1) {
//         num = num / 10;
//         count++;
//     }
// }

// console.log(`There are ${count} digits `)


// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. 
// Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

// let number;

// let positive=0;
// let negative=0;
// let zero=0;
// let odd=0;
// let even=0;

// let i=1;
// while(i<=10)
// {
//     number= Number(prompt("Enter a number"));

//     if(number>0)
//     {
//         positive++;
//     }
//     else if(number<0)
//     {
//         negative++;
//     }
//     else
//     {
//         zero ++;

//     }

//     if( number % 2===0)
//     {
//         even++;
//     }
//     else
//     {
//         odd ++;
//     }
//     i++;
// }

// console.log(`Positive: ${positive} `);
// console.log(`Negative: ${negative} `);
// console.log(`Zero: ${zero} `);
// console.log(`Even: ${even} `);
// console.log(`Odd: ${odd} `);



// 6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more.
//  The loop continues until the user refuses. 

// let numberA= Number(prompt("Enter first number"));
// let numberB= Number(prompt("Enter second number"));
// let result;
// while(true)
// {
//     let sign = prompt("Sign (+, -, *, /): ");
//     switch(sign)
//     {
//         case "+":
//             result = numberA+numberB;
//             console.log(`Result: ${result}`);
//             break;
//         case "-":
//             result= numberA - numberB;
//             console.log(`Result: ${result}`);
//             break;
//         case "*":
//             result= numberA * numberB;
//             console.log(`Result: ${result}`);
//             break;
//          case "/":
//             result= numberA / numberB;
//             console.log(`Result: ${result}`);
//             break;
//         default:
//             console.log("Wrong sign! Try again");
            
//     }
//     break;
// }


// 7. Request a number from a user and ask by how many digits to move it. 
// Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612)



