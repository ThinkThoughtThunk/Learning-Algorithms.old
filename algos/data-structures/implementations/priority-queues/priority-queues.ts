let PriorityQueue = (things) => {
  let heap = makeHeap(things),
      { size, items } = heap
  
  let enqueue = (item) => heapInsert(item, heap)
  let dequeue = ()     => extractMin(heap)
  let isEmpty = ()     => size === 0
  let peek    = ()     => items[1]

  return {
    enqueue,
    dequeue,
    isEmpty,
    peek
  }
}

let items = [5,4,3,2,1]
let priorityQueue = PriorityQueue(items)
