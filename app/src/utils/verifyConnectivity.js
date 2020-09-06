function verifyConnectivity(graph, v) {
    //Floyd-Warshall
    return floydWarshall(graph, v);
    //BFS
    let bfsTree = BFS(graph);
}

function floydWarshall(graph, v){
    let i, j, k, INF = 999;
    for(k = 0; k < v; k++){
        for(i = 0; i < v; i++){
            for(j = 0; j < v; j++) {
                if(graph[i][k] + graph[k][j] < graph[i][j]){
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }
    for (i = 1; i < v; i++)  
    {  
        for (j = 1; j < v; j++)  
        {  
            if (graph[i][j] === INF){ 
                return false;
            }
        }    
    }
    return true;
}

function BFS (graph) {
    let queue = [];
    let visited = [];
    let bfsTree = [];
    graph.forEach(vertex => {
        queue.push(vertex);
        visited[vertex] = 1;
        while(queue.length){
            queue.pop();
            vertex.forEach(v =>{
                if(visited[v] !== 1){
                    visited[v] = 1;
                    queue.push(v);
                    bfsTree.push(v);
                }
            })
        }
    });
    return bfsTree;
}

export default verifyConnectivity;