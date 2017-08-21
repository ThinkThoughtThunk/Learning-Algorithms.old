import { Graph, Edgenode } from '../graph'
import { createPriorityQueue, PriorityQueue } from '../../priority-queues/priority-queue'
import { processVertexEarly, processVertexLate, processEdge } from './processing'

// The parent vertex of each vertex
export const parent: number[] = []

/**
 * Process a graph using breadth-first search
 * @param {Graph}  graph Graph to be processed
 * @param {number} start Starting vertex
 */
export function bfs(input): void {
  let queue = createPriorityQueue(),
      { graph, 
        start, 
        processVertexEarly, 
        processVertexLate, 
        processEdge } = input,
      currentVertex,
      adjacentVertex,
      edgePointer
      
  queue.enqueue(start)
  discovered[start] = true
  
  while (!queue.isEmpty()) {
    
    currentVertex = queue.dequeue()
    
    processVertexEarly(currentVertex)
    processed[currentVertex] = true
    
    edgePointer = graph.edges[currentVertex]
    
    while (edgePointer) {
      adjacentVertex = edgePointer.adjacentVertex
      
      if (!processed[adjacentVertex])
        processEdge(currentVertex, adjacentVertex)
        
      if (!discovered[adjacentVertex]) {
        queue.enqueue(adjacentVertex)
        discovered[adjacentVertex] = true
        parent[adjacentVertex] = currentVertex
      }
      
      edgePointer = edgePointer.next
    }
    
    processVertexLate(currentVertex)
  }
}

/**
 * Set up the processed, discovered, and parent information before bfs processes the graph
 * @param  {Graph}  graph Graph to be processed
 */
export function initializeSearch(graph: Graph): void {
  for (let i = 1; i <= graph.numVertices; i++) {
    processed[i] = discovered[i] = false
    parent[i] = undefined
  }
}

// Which vertices have been processed
export const processed: boolean[] = []
// Which vertices have been found
export const discovered: boolean[] = []
