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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    /// The traversal order should be Left, Right and Root
    var result = []
    traversePOTHelper(root)
    function traversePOTHelper(node) {
        if (node.left) {
            traversePOTHelper(node.left);
        }
        if (node.right) {
            traversePOTHelper(node.right);
        }
        if (node.value)
            result.push(node.value)
    }
    return result;
};

var node1 = {
    value: 1,

    right: {
        value: 2,
        left: {
            value: 3
        }
    }
}
var levelOrderExampleNode = {
    value: 3,
    left: {
        value: 9,

    },
    right: {
        value: 20,
        left: {
            value: 15
        },
        right: {
            value: 7
        }
    }
}
// console.log(postorderTraversal(node1));

const postOrderTraversalIterative = function (root) {
    let stack1 = [];
    let stack2 = [];
    result = []

    stack1.push(root)
    while (stack1.length > 0) {
        let node = stack1.pop();
        stack2.push(node.value);

        if (node.left) {
            stack1.push(node.left);
        }
        if (node.right) {
            stack1.push(node.right)
        }

    }
    stack2.forEach(val => {
        result.unshift(val)
    })
    return result;
}

console.log(postOrderTraversalIterative(node1));



var levelOrderTraversal = function (root) {

    let result = [];
    let Q = [];
    Q.push(root);
    while (Q.length) {
        let node = Q.shift();
        result.push(node.value)
        if (node.left) {
            Q.push(node.left)
        }
        if (node.right) {
            Q.push(node.right)
        }
    }
    return result;
}

var levelOrderTraversalArrOutput = function (root) {

    let result = [];
    let Q = [];
    Q.push(root);
    while (Q.length) {

        let curr = [];
        let len = Q.length;
        for (let i = 0; i < len; i++) {
            let node = Q.shift();
            curr.push(node.value)
            if (node.left) {
                Q.push(node.left)
            }
            if (node.right) {
                Q.push(node.right)
            }
        }
        result.push(curr)

    }
    return result;
}

var levelOrder = function (root) {
    let result = [];

    if (!root || root.length === 0) { return root }

    let queue = []; //FIFO
    queue.push(root);

    while (queue.length > 0) {

        var temp2 = [];
        let qLen = queue.length;
        for (let i = 0; i < qLen; i++) {
            let node = queue.shift();
            temp2.push(node.value);


            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(temp2)


    }
    return result;


};


console.log('LOT', levelOrderTraversal(levelOrderExampleNode)); //output [3,9,20,15,7]
console.log('LOT', levelOrder(levelOrderExampleNode)); //output [3,9,20,15,7]
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function (n, edges, start, end) {
    //need to see if start to end there are edges
    var graph = new Map();

    // Build adjacency list (undirected)
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }

        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }



    //iterative
    let stack = [];
    let visited = {};
    stack.push(start);

    while (stack.length) {
        let currVertex = stack.pop();

        for (let adjVertex of graph.get(currVertex)) {
            if (!visited[adjVertex]) {
                visited[adjVertex] = true;
                stack.push(adjVertex)
            }
        }

    }


    if (visited[end]) {
        return true
    }
    return false;
};
console.log(validPath(3, [[22, 33], [33, 55], [55, 22]], 22, 77))