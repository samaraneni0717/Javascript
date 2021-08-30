//Swap using two variables

function swap(a,b){
     a= b + " "+ a
    // b= a+ " "+ b 
    b=a.split(" ")[1]
     a=a.split(" ")[0];
     console.log(a,b)
    
}
console.log(swap(1,2))