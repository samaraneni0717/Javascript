function reverseNum(num){

//132= 100+30+2
//231 = 

// 132 % 10 =2
// 132/10 =13
// 13 % 10 = 3
// 13/10 =1
// 1%10 = 1
// 1/10 =
let revNum =0;
while(num > 0){
let val =num % 10;
num = Math.floor(num/10);
revNum = revNum * 10 + val;

}
console.log(revNum)
}
console.log(reverseNum(1234))