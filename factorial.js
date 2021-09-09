function factorial(n){
    if(n===0 || n===1){return 1}
    console.log('n values is',n)
    return n*factorial(n-1); 
}

console.log(factorial(5));