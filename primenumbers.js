
//Print Primenos in a given range
//Complexity: O(n2)
class PrimeNumbers {

    arr = [];
    constructor(size) {
        this.arr = new Array(size);
        this.primeNums()
    }
    primeNums() {
        let primeArr = [2]
        for (let n = 3; n < this.arr.length; n += 2) {
            if (this.isPrime(n)) {
                primeArr.push(n);
            }

        }
        console.log(primeArr)
    }
    isPrime(n) {
       for(let i=2; i<n;i++){
           if(n%i ===0){
               
           }
       }
    }
}


console.log(new PrimeNumbers(100));