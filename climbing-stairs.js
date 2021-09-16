/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
result=[];
result[0]=1;
result[1]=1;
if(n===0 || n===1){return 1}
for(let i=2; i<=n;i++){
    result[i]= result[i-1]+result[i-2];
}
return result[result.length-1];
};

console.log(climbStairs(6));