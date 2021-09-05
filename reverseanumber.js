function reverseNum(num) {

    //132= 100+30+2
    //231 = 

    // 132 % 10 =2
    // 132/10 =13
    // 13 % 10 = 3
    // 13/10 =1
    // 1%10 = 1
    // 1/10 =
    let revNum = 0;
    while (num > 0) {
        let val = num % 10;
        num = Math.floor(num / 10);
        revNum = revNum * 10 + val;

    }
}
console.log(reverseNum(1234))
//Constraints

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    //123 -- 123 %10 = 3; 123 % 10 =2
    // 3 *10 +2
    let reverseNum =0;
    if(x < -1 * Math.pow(2,31) || x > Math.pow(2,31)-1){return 0};
    isNegative = x <0 ? true : false;
    if(isNegative){
        x = -x;
    }
    while(x > 0){
          reverseNum= reverseNum*10 + x%10;
          x= Math.floor(x/10); //123--12--1--0
          
          }
if(isNegative){
        reverseNum= -reverseNum;
}
if(reverseNum < -1 * Math.pow(2,31) || reverseNum > Math.pow(2,31)-1){return 0};
return reverseNum;
};

console.log(reverse(123))
//-2pow 31 <= x <= 2pow31 - 1