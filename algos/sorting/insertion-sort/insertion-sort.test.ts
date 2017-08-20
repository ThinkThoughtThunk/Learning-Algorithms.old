import { insertionSortArray } from './insertion-sort-array'
import { insertionSortTree } from './insertion-sort-tree'

describe('insertion sort', () => {
  let input = [5,4,3,2,7,6,1]
  let output = [1,2,3,4,5,6,7]
  
  it('should work with an array', () => {
    expect(insertionSortArray(input)).toEqual(output)
  })
  it('should work with a binary tree', () => {
    expect(insertionSortTree(input)).toEqual(output)
  })
})
