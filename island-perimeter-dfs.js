/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    
    if(grid == null || grid.length == 0 || grid[0].length == 0) return 0;
    
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            
            if(grid[i][j] == 1) return dfs(i,j,grid); 

        }
    }
    
    return 0;
};

let dfs = function(i,j,grid){
    
    if(i< 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
    if(grid[i][j] == 0) return 1;
    
    if(grid[i][j] == -1) return 0;
    
    let count =  0;
    
    grid[i][j] = -1;
    
    count += dfs(i-1,j,grid); //Up
    count += dfs(i,j-1,grid); //LEFT
    count += dfs(i,j+1,grid); //RIGHT
    count += dfs(i+1,j,grid); //DOWN
    
    return count;

}

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))