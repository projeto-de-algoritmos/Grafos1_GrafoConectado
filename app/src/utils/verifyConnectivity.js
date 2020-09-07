function verifyStrongConnectivity(graph, v) {
  //Floyd-Warshall
  //   return floydWarshall(graph, v);
  //BFS
  return BFS(graph);
}

function floydWarshall(graph, v) {
  console.log(graph[0][0], v);
  let i, j, k;
  for (k = 0; k < v; k++) {
    for (i = 0; i < v; i++) {
      for (j = 0; j < v; j++) {
        if (graph[i][k] + graph[k][j] < graph[i][j]) {
          graph[i][j] = graph[i][k] + graph[k][j];
        }
      }
    }
  }
  for (i = 0; i < v; i++) {
    for (j = 0; j < v; j++) {
      if (graph[i][j] === 999) {
        return false;
      }
    }
  }
  return true;
}

function BFS(graph) {
  let queue = [];
  let visited = [];
  let bfsTree = [];
  graph.forEach((vertex, i) => {
    queue.push(vertex);
    visited[i] = 1;
    while (queue.length) {
      queue.pop();
      vertex.forEach((v, i) => {
        if (visited[i] !== 1) {
          visited[i] = 1;
          queue.push(v);
          bfsTree.push(v);
        }
      });
    }
  });
  return bfsTree;
}

export default verifyStrongConnectivity;
