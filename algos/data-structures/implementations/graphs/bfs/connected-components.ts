import { bfs, parent, initializeSearch, discovered } from './bfs'
import { Graph, readGraph, Vertex } from '../graph'

export function connectedComponents(graph: Graph): void {
  initializeSearch(graph)
  
  let componentCount = 0
  for (let vertex = 1; vertex <= graph.numVertices; vertex++) {
    if (!discovered[vertex]) {
      componentCount += 1
      console.log('Component:', componentCount)
      bfs(graph, vertex, { processVertexEarly })
    }
  }
}

function processVertexEarly(v: Vertex): void {
  console.log('', v)
}

const input = `7 12\n1 3\n1 5\n2 3\n2 4\n2 5\n3 5\n3 4\n4 2\n4 5\n5 2\n6 7\n7 6`

const graph = readGraph(input, true)
initializeSearch(graph)
console.log(connectedComponents(graph))
