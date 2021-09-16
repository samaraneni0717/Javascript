/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
    //Pblm: Given y coordinates in a xy plane as an array find out the max area b/w the lines formed by them
    
    //find area from one line to the next till end and keep the max value and the coordinates
    let maxValue=0;
    let i,j=0;
    while(i<=j){
        
    }
    for(let i=0; i<height.length;i++){
        for(let j=i+1; j<height.length;j++){
            let value =Math.min(height[j],height[i]) * (j-i);
            value = value<0? -value:value;
            if( value> maxValue){
                maxValue=value;
                    
            }
        }
       
    }
    return maxValue;
    
    
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

//Todp