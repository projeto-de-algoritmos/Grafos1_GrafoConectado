function initGraph(vertex) {
  let inititalMatrix = [];
  for (let i = 0; i < vertex; i++) {
    inititalMatrix.push([]);
    for (let j = 0; j < vertex; j++) {
      inititalMatrix[i].push(999);
    }
  }
  return inititalMatrix;
}

export default initGraph;
