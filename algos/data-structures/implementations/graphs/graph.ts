import { range } from '../../../utils'

export interface Edgenode {
  adjacentVertex: Vertex,
  weight: number,
  next: Edgenode
}

export type Vertex = number

export interface Graph {
  edges: Edgenode[],
  degree: number[]
  numVertices: number,
  numEdges: number,
  directed: boolean
}

export function initializeGraph(
  directed: boolean, 
  maxVertices: number = 100
): Graph {
  let graph = {
    degree: [],
    edges: [],
    numVertices: 0,
    numEdges: 0,
    directed: directed
  }
  
  for (let vertex = 1; vertex <= maxVertices; vertex++)
    graph.degree[vertex] = 0

  return graph
}

export function readGraph(input: string, directed: boolean): Graph {
  const graph = initializeGraph(directed),
        lines = input.split('\n'),
        [numVertices, numEdges] = lines[0].split(' ').map(s => parseInt(s))

  graph.numVertices = numVertices
  // graph.numEdges is set by insertEdge()
  
  for (let edgeIndex = 1; edgeIndex <= numEdges; edgeIndex++) {
    let [currentVertex, adjacentVertex] = lines[edgeIndex].split(' ').map(s => parseInt(s))
    insertEdge(graph, currentVertex, adjacentVertex, directed)
  }
  return graph
}

export function insertEdge(graph: Graph, currentVertex: Vertex, adjacentVertex: Vertex, directed: boolean): void {
  let edgePointer = {
    weight: undefined,
    adjacentVertex: adjacentVertex,
    next: graph.edges[currentVertex],
  }
  
  graph.edges[currentVertex] = edgePointer
  graph.degree[currentVertex] += 1
  
  if (!directed)
    insertEdge(graph, adjacentVertex, currentVertex, true)
  else
    graph.numEdges += 1
}

export function printGraph(graph: Graph): void {
  let edgePointer
  
  for (let i = 1; i <= graph.numVertices; i++) {
    console.log(' ' + i)
    edgePointer = graph.edges[i]
    while (edgePointer) {
      console.log(' ' + edgePointer.adjacentVertex)
      edgePointer = edgePointer.next
    }
  }
}
