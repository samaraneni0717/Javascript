

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