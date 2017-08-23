import { initializeSearch, bfs, parent } from './bfs'
import { Graph, readGraph, Vertex } from '../graph'

const input = `5 10\n1 3\n1 5\n2 3\n2 4\n2 5\n3 5\n3 4\n4 2\n4 5\n5 2`

const graph = readGraph(input, true)
initializeSearch(graph)
bfs(graph, 1)

export function findPathExplicit(from, to, parent) {
  let pathReversed = [],
      pathInOrder = []
  if (!to)
    return []
  if (from === to)
    return [from]
  while (parent[to]) {
    pathReversed.push(to)
    to = parent[to]
  }
  while (pathReversed.length > 0) {
    pathInOrder.push(pathReversed.pop())
  }
  return pathInOrder
}

export function findPathNoCheck(from, to, parent) {
  if (!to) return []
  if (from === to) return [from]
  return findPath(from, parent[to], parent).concat([to])
}

export function findPath(from: Vertex, 
                         to: Vertex, 
                         parent: Vertex[]): Vertex[] {
  if (!to) return []
  if (from === to) return [from]
  
  let path = findPath(from, parent[to], parent)
  return path.length > 0
           ? path.concat([to])
           : path
}

console.log(findPath(1, 10, parent))
