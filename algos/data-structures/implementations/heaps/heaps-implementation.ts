import { swap, range } from '../../utils'

// File for the internal implementation of the Heap

export interface HeapImpl {
  items: number[],
  size: number
}

export function makeHeapImpl(input: number[]): HeapImpl {
  let heap = emptyHeap(),
      firstNode = Math.floor(input.length / 2)

  heap.size = input.length
  range(0, heap.size).forEach(index => {
    // Remember that heaps are 1-indexed
    heap.items[index + 1] = input[index]
  })

  range(firstNode, 0).forEach(index => {
    bubbleDown(heap, index)
  })
  
  return heap
}

export function insertImpl(input: number, heap: HeapImpl): void {
  heap.size += 1
  heap.items[heap.size] = input
  bubbleUp(heap, heap.size)
}

export function extractMinImpl(heap: HeapImpl): number {
  if (heap.size > 0) {
    let min = heap.items[1]
    heap.items[1] = heap.items[heap.size]
    heap.size -= 1
    
    // Restore heapiness
    bubbleDown(heap, 1)
  
    return min
  }
}

// Private helpers
export function emptyHeap (): HeapImpl {
  return { 
    items: [undefined], 
    size: 0
  }
}
  
export function isInHeap (index: number, heap: HeapImpl): boolean {
  return index > 0 && index <= heap.size
}
  
export function parent (index: number): number {
  return Math.floor(index / 2)
}
  
export function left (index: number): number {
  return 2 * index
}
  
export function right (index: number): number {
  return 2 * index + 1
} 

export function bubbleUp(heap: HeapImpl, index: number): void {
  if (!isInHeap(parent(index), heap))
    return

  if (heap.items[parent(index)] > heap.items[index]) {
    swap(heap.items, parent(index), index)
    bubbleUp(heap, parent(index))
  }
}

export function bubbleDown(heap: HeapImpl, index: number): void {
  let { items, size } = heap,
      leftChild = left(index),
      rightChild = right(index),
      minIndex = index
  
  if (isInHeap(leftChild, heap) && 
      items[leftChild] < items[minIndex])
    minIndex = leftChild
  
  if (isInHeap(rightChild, heap) && 
      items[rightChild] < items[minIndex])
    minIndex = rightChild
  
  if (minIndex !== index) {
    swap(items, index, minIndex)
    bubbleDown(heap, minIndex)
  }
}
