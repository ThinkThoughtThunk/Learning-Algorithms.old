import { bfs, parent, initializeSearch, discovered } from './bfs'
import { Graph, readGraph, Vertex } from '../graph'

export const color: Color[] = []
let bipartite: boolean

const input = `5 10\n1 3\n1 5\n2 3\n2 4\n2 5\n3 5\n3 4\n4 2\n4 5\n5 2`

const graph = readGraph(input, true)

twoColor(graph)

console.log(color)

export function twoColor(graph: Graph): void {
  for (let vertex = 1; vertex <= graph.numVertices; vertex++)
    color[vertex] = 'uncolored'
  
  initializeSearch(graph)
  
  bipartite = true
  
  for (let vertex = 1; vertex <= graph.numVertices; vertex++) {
    if (!discovered[vertex]) {
      color[vertex] = 'white'
      bfs(graph, vertex, { processEdge })
    }
  }
}

export function processEdge(from: Vertex, to: Vertex): void {
  if (color[from] === color[to]) {
    bipartite = false
    console.log('Graph not bitartite due to edge', from, '-', to)
  }
  
  color[to] = complement(color[from])
}

export type Color = 'uncolored' | 'black' | 'white'
export function complement(color: Color): Color {
  if (color === 'white') return 'black'
  if (color === 'black') return 'white'
  return 'uncolored'
}
