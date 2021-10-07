/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//TODO: COnvert the array to tree structure to perfome this
 var levelOrder = function(root) {
    let result = [];
    
    if(!root || root.length ===0){return root}
    
    let queue = []; //FIFO
    queue.push(root);
    
    while(queue.length){
        let temp = queue.shift();
        let temp2=[]
        if(temp.left){
            temp2.push(temp.left)
        }
        if(temp.right){
            temp2.push(temp.right)
        }
        if(temp2 && temp2.length>0)
        result.push(temp2)
    }
    return result;
    

};

console.log(levelOrder([3,9,20,null,null,15,7]))