
class Node{

    constructor(item){
        this.data=item;
        this.left=this.right=null;
    }
}
var maxDepth = function(root) {
    return dfs(root, 0);
    
    function dfs(root, height) {
        if(root == null) {
            return height;
        }
        return Math.max(dfs(root.left, height + 1), dfs(root.right, height + 1));
    }
};
    // root = new Node(1);
    // root.left = new Node(2);
    // root.right = new Node(3);
    // root.left.left = new Node(4);
    // root.left.right = new Node(5);

//console.log('the depth is',maxDepth(root))

var minDepth = function (root) {
    if (!root) return 0;
    return helper(root);
    function helper(root, depth = 1) {
      if (!root) return Infinity;
      if (!root.left && !root.right) return depth;
      return Math.min(
        helper(root.left, depth + 1),
        helper(root.right, depth + 1)
      );
    }
  };
root = new Node(2);
root.left = null;
root.right = new Node(3);

root.right.left = null;
root.right.right =  new Node(4);
root.right.right.left=null;
root.right.right.right=new Node(5);

console.log('the depth is',minDepth(root))
