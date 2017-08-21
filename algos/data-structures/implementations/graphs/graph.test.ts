import {
  Edgenode,
  Graph,
  initializeGraph,
  readGraph,
  insertEdge,
  printGraph
} from './graph'

import { bfs } from './bfs/bfs'

const input = `5 10
1 3
1 5
2 3
2 4
2 5
3 5
3 4
4 2
4 5
5 2`

describe('graph', () => {
  it('initializes an empty graph', () => {
    const graph = initializeGraph(true)
    expect(graph).toHaveProperty('degree')
    expect(graph).toHaveProperty('edges')
    expect(graph).toHaveProperty('numVertices')
    expect(graph).toHaveProperty('numEdges')
    expect(graph).toHaveProperty('directed')
  })
  
  it('parses a string into a directed graph', () => {
    const graph = readGraph(input, true)
    expect(graph).toHaveProperty('numVertices', 5)
    expect(graph).toHaveProperty('numEdges', 10)
    expect(graph).toHaveProperty('directed', true)
  })
  
  it('parses a string into an undirected graph', () => {
    const graph = readGraph(input, false)
    expect(graph).toHaveProperty('numVertices', 5)
    expect(graph).toHaveProperty('numEdges', 10)
    expect(graph).toHaveProperty('directed', false)
  })
  
  xit('prints a graph', () => {
    const graph = readGraph(input, true)
  })
  
  it('bfs traverses the graph', () => {
    const graph = readGraph(input, true)
  })
})
