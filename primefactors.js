// Given a number return the prime factors of that number within 100
// Ex: 10 => 5,2
function primeFactors(n){

// step1: Print 2s if the given no. is divisible and reduce n to n
while(n % 2 === 0){
    console.log(2);
    n = n/2;
}

//step 2: get the remaining factors other than 2
// start from 3 and increment +2; also the limit to check is less than the sqrt of the given number
for(let i=3; i*i <= n; i=i+2){
    while(n%i === 0){
        n = n/i;
        console.log(i)
    }
   
}
//step3: So even after reduction if n is still greater than 2 then it must be a prime number
//so log the prime number
if(n>2){
    console.log(n)
}
}

console.log(primeFactors(7))