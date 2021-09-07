//Stack: Last in First out LIFO


function Stack(arr){
this.array=[];
if(arr){
    this.array=arr
}
}

Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

//instance of stack class
let stack1 = new Stack();

//Peek at the last added element of the stack
Stack.prototype.peek = function(){
    return this.array[this.array.length - 1]
}
stack1.push(126);
console.log('lets peek', stack1.peek())

//Insertion
/// Obviously to the end of the array
Stack.prototype.push = function(element){
    this.array.push(element)
}

//Deletion
Stack.prototype.deleteAll = function(){
    while(this.array.length > 0){
        this.array.pop();
    }
}

