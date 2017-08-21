function Queue() {
  let items = [],
      head = 0,
      tail = -1
  
  function enqueue (item) {
    tail += 1
    items[tail] = item
  }
  
  function dequeue () {
    if (tail >= head) {
      let item = items[head]
      items[head] = undefined
      head += 1
      
      return item
    }
  }
  
  let peek = () => items[head]
  
  let isEmpty = () => tail < head
  
  return {
    enqueue,
    dequeue,
    peek,
    isEmpty
  }
}
