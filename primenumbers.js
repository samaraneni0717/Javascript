
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
        let oddCtr = 0;
        for (let el = 2; el < this.arr.length; el++) {
            if (n % el === 0 && el !== n) {
                oddCtr++
                return
            }
        }
        if (oddCtr) {
            return false;
        } else {
            return true;
        }
    }
}


console.log(new PrimeNumbers(100));