import { Graph, Edgenode, Vertex } from '../graph'
import { createPriorityQueue, PriorityQueue } from '../../priority-queues/priority-queue'

// The parent vertex of each vertex
export const parent: Vertex[] = []
// Which vertices have been processed
export const processed: boolean[] = []
// Which vertices have been found
export const discovered: boolean[] = []

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
export function bfs(graph: Graph, 
                    start: Vertex, 
                    process?: ProcessObject): void {
  const queue: PriorityQueue = createPriorityQueue(),
      { processVertexEarly, 
        processVertexLate, 
        processEdge } = process || {} as ProcessObject

  let currentVertex: Vertex,
      adjacentVertex: Vertex,
      edgePointer: Edgenode
      
  // Main logic

  addStartToQueue()
  
  while (!queue.isEmpty()) {
    
    currentVertex = queue.dequeue()
    edgePointer = graph.edges[currentVertex]
    
    processVertexBeforeEdges()
    
    while (edgePointer) {
      adjacentVertex = edgePointer.adjacentVertex
      processOutgoingEdge()
      addAdjacentVertexToQueue()
      edgePointer = edgePointer.next
    }
    
    processVertexAfterEdges()
  }
  
  // Helpers
  
  function processVertexBeforeEdges() {
    if (processVertexEarly) 
      processVertexEarly(currentVertex)
    processed[currentVertex] = true
  }
  
  function processOutgoingEdge() {
    if (processEdge && !processed[adjacentVertex])
      processEdge(currentVertex, adjacentVertex)
  }
  
  function processVertexAfterEdges() {
    if (processVertexLate)
      processVertexLate(currentVertex)
  }
  
  function addAdjacentVertexToQueue() {
    if (!discovered[adjacentVertex]) {
      queue.enqueue(adjacentVertex)
      discovered[adjacentVertex] = true
      parent[adjacentVertex] = currentVertex
    }
  }
  
  function addStartToQueue() {
    queue.enqueue(start)
    discovered[start] = true
  }
}

function basicBfs(graph, start) {
  const queue: PriorityQueue = createPriorityQueue()
  let currentVertex: Vertex,
      adjacentVertex: Vertex,
      edgePointer: Edgenode

  queue.enqueue(start)
  discovered[start] = true
  
  while (!queue.isEmpty()) {
    currentVertex = queue.dequeue()
    edgePointer = graph.edges[currentVertex]
    
    while (edgePointer) {
      adjacentVertex = edgePointer.adjacentVertex
      if (!discovered[adjacentVertex]) {
        queue.enqueue(adjacentVertex)
        discovered[adjacentVertex] = true
        parent[adjacentVertex] = currentVertex
      }
      edgePointer = edgePointer.next
    }
  }
}
