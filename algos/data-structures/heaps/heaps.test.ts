import { Heap, makeHeap } from './heaps'
import { 
  parent, 
  left, 
  right, 
  isInHeap,
  makeHeapImpl, 
  insertImpl, 
  extractMinImpl, 
  emptyHeap, 
  bubbleUp, 
  bubbleDown
} from './heaps-implementation'

describe('heap api', () => {
  let heap = makeHeap([1,6,7,9,3,2,5])
  
  it('has the right size', () => {
    expect(heap.size()).toEqual(7)
  })
  
  it('shows the right min', () => {
    let min = heap.getMin()
    expect(min).toEqual(1)
  })
  
  it('extracts the right min', () => {
    let output = []
    while (heap.size() > 0)
      output.push(heap.extractMin())
    expect(output).toEqual([1, 2, 3, 5, 6, 7, 9])
    expect(heap.size()).toEqual(0)
  })
})


describe('heap internal', () => {
  it('has a working left child', () => {
    expect(left(1)).toEqual(2)
  })
  it('has a working right child', () => {
    expect(right(1)).toEqual(3)
  })
  it('has a working parent', () => {
    expect(parent(3)).toEqual(1)
  })
  it('determines if an index is in the heap', () => {
    let heap = emptyHeap()
    insertImpl(1, heap)
    insertImpl(2, heap)
    expect(isInHeap(parent(1), heap)).toBe(false)
    expect(isInHeap(left(1), heap)).toBe(true)
    expect(isInHeap(right(1), heap)).toBe(false)
  })
  it('inserts new items correctly', () => {
    let heap = emptyHeap()
    insertImpl(1, heap)
    insertImpl(2, heap)
    insertImpl(3, heap)
    expect(heap.items[1]).toBe(1)
    expect(heap.items[2]).toBe(2)
    expect(heap.items[3]).toBe(3)
    
    insertImpl(0.5, heap)
    expect(heap.items[1]).toBe(0.5)
    expect(heap.size).toBe(4)
  })
  it('extracts items correctly', () => {
    let heap = emptyHeap()
    insertImpl(1, heap)
    insertImpl(2, heap)
    insertImpl(3, heap)
    insertImpl(0.5, heap)
    expect(extractMinImpl(heap)).toBe(0.5)
    expect(extractMinImpl(heap)).toBe(1)
    expect(extractMinImpl(heap)).toBe(2)
  })
  it('bubbles up correctly', () => {
    let heap = emptyHeap()
    heap.items = [undefined, 5, 4, 3, 2, 1]
    heap.size = 5
    bubbleUp(heap, 5)
    expect(heap.items.slice(1)).toEqual([1, 5, 3, 2, 4])
    bubbleUp(heap, 4)
    expect(heap.items.slice(1)).toEqual([1, 2, 3, 5, 4])
    bubbleUp(heap, 3)
    expect(heap.items.slice(1)).toEqual([1, 2, 3, 5, 4])    
  })
  it('bubbles down correctly', () => {
    let heap = emptyHeap()
    heap.items = [undefined, 5, 4, 3, 2, 1]
    heap.size = 5
    bubbleDown(heap, 3)
    expect(heap.items.slice(1)).toEqual([5, 4, 3, 2, 1])
    bubbleDown(heap, 2)
    expect(heap.items.slice(1)).toEqual([5, 1, 3, 2, 4])
    bubbleDown(heap, 1)
    expect(heap.items.slice(1)).toEqual([1, 2, 3, 5, 4])
  })
  it('makes a heap correctly', () => {
    let heap = makeHeapImpl([1,6,7,9,3,2,5])
    expect(heap.items.slice(1)).toEqual([1,3,2,9,6,7,5])
  })
})
