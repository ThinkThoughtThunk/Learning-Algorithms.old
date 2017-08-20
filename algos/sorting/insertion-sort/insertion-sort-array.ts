import { range, moveRight } from '../../utils'

export function insertionSortArray(input: number[]): number[] {
  input.forEach((pivot, pivotIndex) => {
    let compareIndex = pivotIndex - 1
    
    while (compareIndex >= 0 && input[compareIndex] > pivot) {
      moveRight(input, compareIndex)
      compareIndex -= 1
    }
    input[compareIndex + 1] = pivot
  })
  
  return input
}
