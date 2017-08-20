import { selectionSortArray } from './selection-sort-array'
import { selectionSortHeap } from './selection-sort-heap'

describe('selection sort', () => {
  it('should sort using an array', () => {
    const input = [5, 6, 8, 3, 2, 1, 5, 8, 9, 0]
    const result = selectionSortArray(input)
    
    expect(result).toEqual([0, 1, 2, 3, 5, 5, 6, 8, 8, 9])
  })
  
  it('should sort using a heap', () => {
    const input = [5, 6, 8, 3, 2, 1, 5, 8, 9, 0]
    const result = selectionSortHeap(input)
    
    expect(result).toEqual([0, 1, 2, 3, 5, 5, 6, 8, 8, 9])
  })
})
