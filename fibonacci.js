//Fibonacci Series: 1, 1, 2, 3, 5, 8, 13, 21...

// Find nth fibonacci term
// Iterative

function iterativeFibo(n){
    let lastLast=0;
    let last=1;
    for(let i=1; i<n; i++){
       
     
        last += lastLast;
        lastLast = last - lastLast;

    }
    return last;
}

console.log(iterativeFibo(7));


function recursiveFibo(n){
    
if(n <= 2){
    return 1;
}
while(true){
    return recursiveFibo(n-1) + recursiveFibo(n-2)
}
}

console.log(recursiveFibo(2));

