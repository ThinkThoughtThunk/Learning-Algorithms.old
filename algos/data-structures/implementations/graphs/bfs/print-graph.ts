import { initializeSearch, bfs } from './bfs'
import { Graph, readGraph, Vertex } from '../graph'

const input = `5 10\n1 3\n1 5\n2 3\n2 4\n2 5\n3 5\n3 4\n4 2\n4 5\n5 2`

const graph = readGraph(input, true)

function processVertexEarly(vertex: Vertex): void {
  console.log('Vertex:', vertex)
}

function processEdge(from: Vertex, to: Vertex): void {
  console.log('Edge from', from, 'to', to)
}

initializeSearch(graph)
bfs(graph,  1, { processVertexEarly, processEdge })
