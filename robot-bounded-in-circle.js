// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

var isRobotBounded = function (instructions) {
    //loop on instructs and add to the result set to see if it reaches (0,0)\
    //if the final instruction  is changing direction then NO INFINITY

    let result = [];
    result.push([0, 0]); //[[0,0]]
    let currDir = 'N';

    let dirMap = {
        'N': { 'L': 'W', 'R': 'E' },
        'E': { 'L': 'N', 'R': 'W' },
        'S': { 'L': 'E', 'R': 'W' },
        'W': { 'L': 'S', 'R': 'N' }
    }


    function advance() {
        //if N advance y by 1
        switch (currDir) {
            case 'N': {
                result[0][1]= result[0][1]+1;
                break;
            }
            case 'S': {
                result[0][1]= result[0][1]-1;
                break;
            }
            case 'E': {
                result[0][0]=result[0][0]+1;
                break;
            }
            case 'W': {
                result[0][0]=result[0][0]-1;
                break;
            }
            default: {

                break;
            }
        }
    }
    let i = 0;
    while (i < 4) { //utmost 4 times required to move from the curr postion to reach the same position
        for (let char of instructions) {

            switch (char) {
                case 'G': {
                    advance();
                    break;
                }
                case 'L': {
                    currDir = dirMap[currDir]['L'];

                    break;
                }
                case 'R': {
                    currDir = dirMap[currDir]['R'];

                    break;
                }
            }



        }

        if (result[0][0] === 0 && result[0][1] === 0) {

            return true
        }

        i++
    }
    return false;

};

console.log(isRobotBounded("GG"));