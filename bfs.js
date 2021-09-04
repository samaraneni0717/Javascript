//BFS: Similar to level order traversal in trees this algo is applicable to graphs
// Use queue DS to traverse this

//Step1: Build a graph
function UndirectedGraph() {
    this.edges = {}
}

UndirectedGraph.prototype.addVertex = function (vtx) {
    this.edges[vtx] = {}
}

UndirectedGraph.prototype.addEdge = function (v1, v2, weight) {
    if (!weight) {
        weight = 0;
    }
    this.edges[v1][v2] = weight;

}
let graph1 = new UndirectedGraph();
let digraph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1)
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addVertex(6);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
graph1.addEdge(1, 5, 88);
graph1.addEdge(5, 6, 20);
console.log('The graph', graph1.edges)

//Step2: Logic for BFS

digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);
//console.log('The digraph', digraph1.edges)
function bfs(vertex, edges) {
    var queue = [];
    queue.push(vertex);
    let visited = {}
    while (queue.length) {
        vtx = queue.shift();

        if (!visited[vtx]) {
            visited[vtx] = true;
            console.log('vertex visited is', vtx);
            // Traverse through the graph in levels/breadth 
            for (let adjVertex in edges[vtx]) {
                queue.push(adjVertex); // FIFO
            }
        }
    }
}
 bfs('1', graph1.edges);
 bfs('A',digraph1.edges)