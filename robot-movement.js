/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {

    let position = [0, 0, 'N']; //at north

    var turnRightObj = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N' }
    var turnLeftObj = { 'N': 'W', 'E': 'N', 'S': 'E', 'W': 'S' }

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            position[2] = turnRightObj[position[2]]
        }
        if (commands[i] === -2) {
            position[2] = turnLeftObj[position[2]]
        }
        if (commands[i] > 0) {
            for (let j = 1; j <= commands[i]; j++) {
                if (isObstacleHit()) { break }
                switch (position[2]) {
                    case 'N': position[1] = position[1] + 1;
                        break;
                    case 'E': position[0] = position[0] + 1;
                        break;
                    case 'S': position[1] = position[1] - 1;
                        break;
                    case 'W': position[0] = position[0] - 1;
                        break;
                }
            }

        }
        function isObstacleHit() {
            if (!obstacles || obstacles.length === 0) { return false };
            for (let i = 0; i < obstacles.length; i++) {
                let arr = obstacles[i];
                if (position[2] === 'N' && arr[0] === position[0] && arr[1] === position[1]+1) {
                    return true;
                }
                else if (position[2] === 'E' && arr[0] === position[0]+1 && arr[1] === position[1]) {
                    return true;
                }
                else if (position[2] === 'S' && arr[0] === position[0] && arr[1] === position[1]-1) {
                    return true;
                }
                else if (position[2] === 'W' && arr[0] === position[0]-1 && arr[1] === position[1]) {
                    return true;
                }
            }

            return false;
        }
    }

    //Last step or calculate distance from orgin
    return (position[0] * position[0]) + (position[1] * position[1]);

};

console.log(robotSim(
    [4, -1, 4, -2, 4],
    [[2, 4]]))
