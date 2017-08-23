import { Graph, Edgenode, Vertex } from '../graph'

export const discovered: boolean[] = []
export const processed: boolean[] = []
export const parent: Vertex[] = []
export const entryTime: number[] = []
export const exitTime: number[] = []

export let finished: boolean = false
let time: number = 0

export function initializeSearch(graph: Graph): void {
  for (let vertex = 1; vertex <= graph.numVertices; vertex++) {
    processed[vertex] = discovered[vertex] = false
    parent[vertex] = undefined
  }
}

export type ProcessObject = { 
  processVertexEarly?: (v: Vertex)            => void,
  processVertexLate?:  (v: Vertex)            => void,
  processEdge?:        (v: Vertex, u: Vertex) => void 
}
export function dfs(graph: Graph, 
                    currentVertex: number, 
                    process?: ProcessObject): void {
  const { processVertexEarly, 
          processVertexLate, 
          processEdge } = process || {} as ProcessObject
          
  let edgePointer: Edgenode,
      adjacentVertex: Vertex
  
  if (finished) return
  
  discovered[currentVertex] = true
  time += 1
  entryTime[currentVertex] = time
  processVertexBeforeEdges()
  
  edgePointer = graph.edges[currentVertex]
  
  while (edgePointer) {
    adjacentVertex = edgePointer.adjacentVertex
    
    // Tree edges
    if (!discovered[adjacentVertex]) {
      parent[adjacentVertex] = currentVertex
      processOutgoingEdge()
      dfs(graph, adjacentVertex, process)
    }
    
    // Back edges
    // We need the !processed[adjacentVertex] check so that we don't process paths to child nodes that we already created back edges for
    else if (graph.directed || !processed[adjacentVertex]) {
      processOutgoingEdge()
      if (finished) return
      edgePointer = edgePointer.next
    }
    
    processVertexAfterEdges()
    time += 1
    exitTime[currentVertex] = time
    processed[currentVertex] = true
  }
  
  function processVertexBeforeEdges() {
    if (processVertexEarly)
      processVertexEarly(currentVertex)
  }
  
  function processOutgoingEdge() {
    if (processEdge)
      processEdge(currentVertex, adjacentVertex)
  }
  
  function processVertexAfterEdges() {
    if (processVertexLate)
      processVertexLate(currentVertex)
  }
}

function basicDfs(graph, start) {      
  let edgePointer: Edgenode,
      adjacentVertex: Vertex
  
  discovered[start] = true
  edgePointer = graph.edges[start]
  
  while (edgePointer) {
    adjacentVertex = edgePointer.adjacentVertex
    
    if (!discovered[adjacentVertex]) {
      parent[adjacentVertex] = start
      basicDfs(graph, adjacentVertex)
    }

    else if (graph.directed || !processed[adjacentVertex])
      edgePointer = edgePointer.next

    processed[start] = true
  }
}
