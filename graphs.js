
// Store the graph in the adjacency list format
// ex: 1: {2,5}

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
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addEdge(1, 2, 1)
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addEdge(2, 3, 8);
graph1.addEdge(3, 4, 10);
graph1.addEdge(4, 5, 100);
graph1.addEdge(1, 5, 88);
//console.log('the graph', graph1.edges)

//Remove edges from graphs

UndirectedGraph.prototype.removeEdge = function (v1, v2) {
if(this.edges[v1] && this.edges[v1][v2]){
    delete this.edges[v1][v2];
}
if(this.edges[v2] && this.edges[v2][v1]){
    delete this.edges[v2][v1];
}
}


UndirectedGraph.prototype.removeVertex = function(v1){
    for(let adjVertex in this.edges[v1]){
        console.log(adjVertex)
    }
}
console.log(graph1.removeVertex(2))