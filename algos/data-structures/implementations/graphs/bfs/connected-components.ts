import { bfs, parent, initializeSearch, discovered } from './bfs'
import { Graph } from '../graph'

export function connectedComponents(graph: Graph): void {
  initializeSearch(graph)
  
  let component = 0
  for (let i = 1; i <= graph.numVertices; i++)
    if (!discovered[i]) {
      component += 1
      console.log('Component:', component)
      bfs(graph, i)
    }
}
