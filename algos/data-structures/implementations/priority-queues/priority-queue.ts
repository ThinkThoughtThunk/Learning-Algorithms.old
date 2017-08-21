import { Heap, makeHeap } from '../heaps/heaps'

export interface PriorityQueue {
  enqueue: (item: number) => void,
  dequeue: () => number,
  isEmpty: () => boolean,
  size: () => number,
  peek: () => number
}

export function createPriorityQueue (input: number[] = []): PriorityQueue {
  const heap = makeHeap(input),
        { insert, extractMin, size, getMin } = heap

  return {
    enqueue: insert,
    dequeue: extractMin,
    isEmpty: () => size() === 0,
    size: size,
    peek: getMin
  }
}
