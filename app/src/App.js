import React, { useState } from "react";
import initGraph from "./utils/createGraph";

import "./App.css";

function App() {
  const [vertex, setVertex] = useState(0);
  const [edges, setEdges] = useState(0);
  const [graph_matrix, setGraph_matrix] = useState(null);

  function createGraph() {
    const graph = initGraph(vertex);
    setGraph_matrix(graph);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Numero de ruas"
          onChange={(e) => {
            setEdges(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Numero de intersecção"
          onChange={(e) => {
            setVertex(e.target.value);
          }}
        />
        <button type="text" onClick={createGraph}>
          Enviar
        </button>
      </div>
      <div>
        <input />
        <input />
      </div>
    </div>
  );
}

export default App;
