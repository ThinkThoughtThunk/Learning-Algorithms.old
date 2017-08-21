import { makeHeapImpl, insertImpl, extractMinImpl } from './heaps-implementation'

// File for the Heap public API

export interface Heap {
  size(): number,
  insert(n: number): any,
  getMin(): number,
  extractMin(): number
}

export function makeHeap(input: number[] = []): Heap {
  let heap = makeHeapImpl(input)

  return {
    size: (): number => 
      heap.size,
      
    insert: (n: number): void => 
      insertImpl(n, heap),
      
    getMin: (): number => {
      if (heap.size > 0) 
        return heap.items[1]
    },
      
    extractMin: (): number => 
      extractMinImpl(heap)
  }
}
