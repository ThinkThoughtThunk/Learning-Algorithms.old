import { swap, range } from '../../utils'

export function selectionSortArray(input: number[]): number[] {
  range(0, input.length).forEach(pivotIndex => {
    let minIndex = extractMin(input, pivotIndex)
    swap(input, pivotIndex, minIndex)
  })
  
  return input
}

function extractMin(input: number[], start: number): number {
  let minIndex = input[start]
  range(start, input.length).forEach(index => {
    if (input[index] < input[minIndex])
      minIndex = index
  })
  return minIndex
}
