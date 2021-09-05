//Step1: Build a graph
function Graph() {
    this.edges = {};
}
Graph.prototype.addVertex = function (vtx) {
    this.edges[vtx] = {}
}

Graph.prototype.addEdge = function (v1, v2, weight) {
    if (!weight) {
        weight = 0
    }
    this.edges[v1][v2] = weight;
}
graph1 = new Graph();


graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(8);
graph1.addVertex(16);
graph1.addVertex(23);
graph1.addVertex(33);

graph1.addEdge(1, 2, 20);
graph1.addEdge(1, 8, 30);
graph1.addEdge(2, 16, 25);
graph1.addEdge(2, 23, 70)
graph1.addEdge(8, 33, 50)


graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1)
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(1, 5, 1)
graph1.addEdge(2, 3, 1)
graph1.addEdge(3, 4, 1)
graph1.addEdge(4, 5, 1)

console.log('The graph', graph1.edges)
//Step 2: DFS Logic-- traverse through graph
// Depth First search
function dfs(vtx) {
    visited = {}
    traverseDfs(vtx, visited);

}

function traverseDfs(vtx, visited) {
    visited[vtx] = true
    console.log('the dfs vertex is', vtx)
    for (const adjVtx in graph1.edges[vtx]) {
  
        if (!visited[adjVtx]) {
            traverseDfs(adjVtx, visited)
        }

    }

}
dfs(1)