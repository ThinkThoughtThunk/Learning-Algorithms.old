let Queue = (inbox, outbox) => {
  return {
    inbox,
    outbox
  }
}

let enqueue = (item, queue) =>
  Queue(cons(item, 
             queue.inbox), 
        queue.outbox)

let dequeue = (queue) => {
  let [top, newQueue] = peek(queue)
  
  if (!top) return [top, queue]
  else return [top, Queue(queue.inbox, 
                          queue.outbox.tail)]
}

let peek = (queue) => {
  if (!queue.inbox && !queue.outbox) 
    return [undefined, Queue()]
  
  if (!queue.outbox)
    return peek(Queue(undefined, 
                      reverse(queue.inbox)))
  
  return [queue.outbox.head, queue]
}
