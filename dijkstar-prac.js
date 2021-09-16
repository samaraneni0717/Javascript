

// Directed Graph
function DirectedGraph(){
    this.edges={};
}

DirectedGraph.prototype.addVertex = function(vtx){
    this.edges[vtx]={}
}

DirectedGraph.prototype.addEdge = function(vtx1, vtx2, weight){
    if(!weight){
        weight=0;
    }

    this.edges[vtx1][vtx2]=weight;
}

////////////////////////**********************Dijkstra */
function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
    var minimumDistance = Infinity,
        nodeWithMinimumDistance = null;
    for (var node in Q) {
        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}
DirectedGraph.prototype.Dijkstra = function (source) {
    //gist: get the smallest path by hopping on to the vertices which are closest to root
    // the root shifts 

    var Q={}, dist={};
    for(var vertex in this.edges){
        //initialize to infinity
        dist[vertex]= Infinity;
        //add v to Q
        Q[vertex]=this.edges[vertex];
    }
    dist[source]=0;
    //loop through Queue 
    while(!_isEmpty(Q)){
        //extract the minimum distanced node
        var u= _extractMin(Q,dist);
        //remove u from Q
        delete Q[u];

        //populate the distance object with the neighbors shortest distances
        for(var neighbor in this.edges[u]){
            var alt = dist[u]+this.edges[u][neighbor];

            if(alt < dist[neighbor]){
                dist[neighbor]=alt;
            }
        }
    }
    return dist;
}

var digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addVertex("E");
digraph1.addVertex("Z");
digraph1.addEdge("A", "B", 4);
digraph1.addEdge("A", "C", 8);

digraph1.addEdge("B", "D", 5);
digraph1.addEdge("B", "C", 1);

digraph1.addEdge("C", "D", 8);
digraph1.addEdge("C", "E", 10);

digraph1.addEdge("D", "Z", 2);

digraph1.addEdge("E", "D", 2);
digraph1.addEdge("E", "Z", 3);
console.log(digraph1);
// DirectedGraph {
// V: 4,
// E: 4,
// edges: { A: { B: 1, D: 1 }, B: { C: 1 }, C: { A: 1 }, D: {} }}
//digraph1.Dijkstra("A"); // { A: 0, B: 1, C: 2, D: 1 }
 console.log(digraph1.Dijkstra("A")); // { A: 0, B: 1, C: 2, D: 1 }




