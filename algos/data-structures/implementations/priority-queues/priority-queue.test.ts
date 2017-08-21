import { PriorityQueue, createPriorityQueue } from './priority-queue'

describe('priority queue', () => {
  
  it('can make a queue', () => {
    const queue = createPriorityQueue()
    expect(queue).toHaveProperty('enqueue')
    expect(queue).toHaveProperty('dequeue')
    expect(queue).toHaveProperty('peek')
    expect(queue).toHaveProperty('size')
    expect(queue).toHaveProperty('isEmpty')
  })
  
  it('can enqueue', () => {
    const queue = createPriorityQueue()
    queue.enqueue(1)
    expect(queue.size()).toEqual(1)
  })
  
  it('can dequeue', () => {
    const queue = createPriorityQueue()
    queue.enqueue(1)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.dequeue()).toBeUndefined()
    expect(queue.dequeue()).toBeUndefined()
  })
  
  it('can peek', () => {
    const queue = createPriorityQueue()
    queue.enqueue(1)
    expect(queue.peek()).toEqual(1)
    queue.dequeue()
    expect(queue.peek()).toBeUndefined()
  })
  
  it('can check size', () => {
    const queue = createPriorityQueue()
    queue.enqueue(1)
    expect(queue.size()).toEqual(1)
    queue.dequeue()
    expect(queue.size()).toEqual(0)
    queue.dequeue()
    expect(queue.size()).toEqual(0)
  })
  
  it('can check isEmpty', () => {
    const queue = createPriorityQueue()
    queue.enqueue(1)
    expect(queue.isEmpty()).toEqual(false)
    queue.dequeue()
    expect(queue.isEmpty()).toEqual(true)
  })
})
