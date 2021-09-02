
//Print Primenos in a given range

function primeNums(size) {

    const arr = new Array(size);

    let primeArr = [2]
    for (let n = 3; n < arr.length; n += 2) {
        if (isPrime(n)) {
            primeArr.push(n);
        }

    }
    console.log(primeArr)
}
function isPrime(n) {
    let oddCtr = 0;
    for (let el = 2; el < arr.length; el++) {
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

console.log(primeNums())