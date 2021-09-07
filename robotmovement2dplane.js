// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let location = [0,0];
    
for(let char of moves){
        

    switch(char){
            case 'R': location[1]=location[1]+1;
            break;
            case 'L': location[1]=location[1]-1;
             break;
           case 'U': location[0]=location[0]+1;
             break;
           case 'D': location[0]=location[0]-1;
             break;
            default:
                break;


    }    };
    
    if(location[0] ===0 && location[1] === 0){
        return true
    }else{
        return false;
    }
};
console.log(judgeCircle('LL'));