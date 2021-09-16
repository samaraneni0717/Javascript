// Design a logger system that receives a stream of messages along with their timestamps. 
// Each unique message should only be printed at most every 10 seconds 
// (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).


class Logger {
    constructor() {

    }

    shouldPrintMessage(timestamp: number, message: string): boolean {
        let visited = {}
        if (!timestamp || !message) { return null };
        if (!visited[message]) {
            visited[message] = timestamp + 10;
            return true;
        } else {
            if (timestamp < visited[message]) {
                return false;
            }
        }
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

  var obj = new Logger()
console.log(obj.shouldPrintMessage(1,'foo'));
console.log(obj.shouldPrintMessage(2,'bar'));
console.log(obj.shouldPrintMessage(3,'foo'));

