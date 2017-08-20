import { swap, range, moveRight } from './utils'

describe('range', () => {
  it('should work in increasing order', () => {
    let array = range(0, 5)
    expect(array).toHaveLength(5)
    expect(array).toEqual([0, 1, 2, 3, 4])
  })
  
  it('should work in decreasing order', () => {
    let array = range(5, 0)
    expect(array).toHaveLength(5)
    expect(array).toEqual([5, 4, 3, 2, 1])
  })
  
  it('should work with step size', () => {
    let array = range(0, 10, 2)
    expect(array).toHaveLength(5)
    expect(array).toEqual([0, 2, 4, 6, 8])
  })
})

describe('move right', () => {
  it('should move a number to the next index', () => {
    let input = [1,2,3]
    moveRight(input, 2)
    expect(input).toEqual([1, 2, 3, 3])
  })
})

describe('swap', () => {
  it('should swap two numbers in an array', () => {
    let input = [1,2,3]
    swap(input, 0, 2)
    expect(input).toEqual([3,2,1])
  })
})
