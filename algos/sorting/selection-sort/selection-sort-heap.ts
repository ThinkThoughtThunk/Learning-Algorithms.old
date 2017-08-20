import { swap, range } from '../../utils'
import { makeHeap } from '../../data-structures/heaps/heaps'

export function selectionSortHeap(input: number[]): number[] {
  let heap = makeHeap(input)
  
  range(0, heap.size()).forEach(pivotIndex => {
    let min = heap.extractMin()
    input[pivotIndex] = min
  })
  
  return input
}
