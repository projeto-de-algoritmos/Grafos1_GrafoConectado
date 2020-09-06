import React, { useState, useRef } from "react";
import initGraph from "./utils/createGraph";

import "./App.css";

function App() {
  const [vertex, setVertex] = useState(0);
  const [edges, setEdges] = useState(null);
  const [edgesCount, setEdgesCount] = useState(0);
  const [graph_matrix, setGraph_matrix] = useState(null);
  const [selectedVertex, setSelectedVertex] = useState(null);

  const randomGraphStyle = useRef([]);

  function createGraph() {
    if (vertex <= 0) {
      //MENSAGEM NÃO VERTICE NÃO PODE SER MENOR QUE 0
      console.log("Numero de vertex inválido!");
      return;
    }
    if (edges > vertex * (vertex - 1) && edges > 0) {
      //REGRA: ARESTAS <= VERTICES * (VERTICES-1)
      console.log("Numero de artestas inválido!");
      return;
    }

    const graph = initGraph(vertex);
    setGraph_matrix(graph);
    generateGraphStyle(vertex);
  }

  const generateGraphStyle = (vertex) => {
    const styleArray = [];
    for (let i = 0; i < vertex; i++) {
      styleArray.push({
        position: "absolute",
        bottom: Math.floor(Math.random() * 500) + 300,
        left: Math.floor(Math.random() * 500) + 500,
      });
    }
    randomGraphStyle.current = styleArray;
  };

  function calculateVertexDistance(origin, destination) {
    const vertex1 = randomGraphStyle.current[origin];
    const vertex2 = randomGraphStyle.current[destination];
    console.log(vertex1, vertex2);

    const vertex1X = vertex1.left;
    const vertex1Y = vertex1.bottom;

    const vertex2X = vertex2.left;
    const vertex2Y = vertex2.bottom;

    const distance = Math.sqrt(
      Math.pow(vertex1X - vertex2X, 2) + Math.pow(vertex1Y - vertex2Y, 2)
    );
    console.log(distance);
  }

  function connectVertex(origin, destination) {
    calculateVertexDistance(origin, destination);
    const isAlredyConnected = verifyConnectivity(origin, destination);

    if (isAlredyConnected) {
      console.log("JÁ TÁ CONECTADO!!");
      return;
    }

    let newGraph = graph_matrix;
    if (destination < graph_matrix.length) {
      newGraph[origin][destination] = 1;
      setGraph_matrix(newGraph);
      setEdgesCount(edgesCount - 1);
    } else {
      console.log("POSIÇÃO NÃO EXISTENTE");
    }
  }

  function connectVertexBothDirection(origin, destination) {
    let newGraph = graph_matrix;

    if (destination < graph_matrix.length) {
      let isOriginNotConnected = !verifyConnectivity(origin, destination);
      let isDestinationNotConnected = !verifyConnectivity(destination, origin);

      if (isOriginNotConnected && isDestinationNotConnected) {
        newGraph[origin][destination] = 1;
        newGraph[destination][origin] = 1;
        setGraph_matrix(newGraph);
        setEdgesCount(edgesCount - 2);
      } else if (isOriginNotConnected) {
        newGraph[origin][destination] = 1;
        setGraph_matrix(newGraph);
        setEdgesCount(edgesCount - 1);
      } else if (isDestinationNotConnected) {
        newGraph[destination][origin] = 1;
        setGraph_matrix(newGraph);
        setEdgesCount(edgesCount - 1);
      }
    } else {
      console.log("POSIÇÃO NÃO EXISTENTE");
    }
  }

  function verifyConnectivity(origin, destination) {
    if (graph_matrix[origin][destination] === 1) {
      return true;
    }
    return false;
  }
  const renderEdges = () => {
    const connectedEdges = [];

    for (let i = 0; i < vertex; i++) {
      for (let j = 0; j < vertex; j++) {
        if (graph_matrix[i][j] === 1) {
          connectedEdges.push(
            <svg width={window.screen.height} height={window.screen.width}>
              <line
                x1={String(randomGraphStyle.current[i].left)}
                y1={String(randomGraphStyle.current[i].bottom)}
                x2={String(randomGraphStyle.current[j].left)}
                y2={String(randomGraphStyle.current[j].bottom)}
                stroke="black"
              />
            </svg>
          );
        }
      }
    }
    console.log(connectedEdges);
    return connectedEdges;
  };

  const renderGraph = () => (
    <div>
      {graph_matrix.map((vertex, i) => (
        <div style={randomGraphStyle.current[i]}>
          <p>{i}</p>
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#000",
              borderRadius: 10,
            }}
          />
        </div>
      ))}
    </div>
  );
  const renderGraphInputs = () => (
    <div>
      <h2>{edgesCount}</h2>
      {graph_matrix.map((grapth_vertex, i) => (
        <div key={i}>
          <p>Vértice número {i}</p>
          <div>
            <input onChange={(e) => setSelectedVertex(e.target.value)} />
            <button onClick={() => connectVertex(i, selectedVertex)}>
              Conectar
            </button>
            <button
              onClick={() => connectVertexBothDirection(i, selectedVertex)}
            >
              Conexão dupla
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Numero de vértices"
          onChange={(e) => {
            setVertex(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Numero arestas"
          onChange={(e) => {
            setEdges(e.target.value);
            setEdgesCount(e.target.value);
          }}
        />

        <button type="text" onClick={createGraph}>
          Enviar
        </button>
      </div>

      {graph_matrix && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {renderGraphInputs()}
          {renderEdges()}
          {renderGraph()}
        </div>
      )}
    </div>
  );
}

export default App;
