// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
//pblm: the adjacent to rotten orange gets rotten every minute
//logic: every minute the rotten and fresh oranges updates
// find the rotten and loop through its adjacent and increment minute (Probably BFS)
// make sure all the fresh gets rotten by end of the program

let queue = [];
let rows =grid.length;
let cols = grid[0].length;
let freshOranges=0;
let minute=0;

for(let i=0; i<rows;i++){
    for(let j=0; j<cols; j++){
        if(grid[i][j] === 2){ //rotten
            queue.push([i,j])
        }
        if(grid[i][j] === 1){ //fresh
      
            freshOranges++;
        }
    }
}
let directions =[[1,0],[0,1],[-1,0],[0,-1]]; // UP RIGHT DOWN LEFT
while(freshOranges && queue.length){
    let rottingOranges=[]
    while(queue.length){
        let [x,y] = queue.shift(); // curr position of the rotten
    
        for(const [m,n] of directions){
            let [x2,y2] = [x+m,y+n]; //neighbor/adjacent
            
            if(grid[x2] && grid[x2][y2] === 1){
                grid[x2][y2]=2;
                freshOranges--;
              //  queue.push([x2,y2]);// WRONG SINCE WE're not updating the existing fresh as rotten instead use a different arr*****
                rottingOranges.push([x2,y2])
            }
        }
    
    }
    queue=rottingOranges;///update the queue with new set of ***
    minute++;
}
return freshOranges?-1:minute;




};
 console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
console.log(orangesRotting([[2,1,0,2]]))
