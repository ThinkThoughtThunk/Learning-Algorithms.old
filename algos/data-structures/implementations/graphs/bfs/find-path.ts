import { bfs, parent } from './bfs'

export function processVertexEarly(vertex: number): void {
  
}

export function processVertexLate(vertex: number): void {
  
}

export function processEdge(from: number, to: number): void {
  
}

bfs({
  
})

export function findPath(from: number, to: number, parents: number[]): void {
  if (from === to || !to)
    console.log(from)
  else {
    findPath(from, parents[to], parents)
    console.log(' ' + to)
  }
}
