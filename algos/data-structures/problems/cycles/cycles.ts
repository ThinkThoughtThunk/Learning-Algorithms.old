function hasCycle(list) {
  
  let fastPointer = list,
      slowPointer = list
  
  while (fastPointer && fastPointer.tail) {
    fastPointer = fastPointer.tail.tail
    slowPointer = slowPointer.tail
    
    if (fastPointer === slowPointer)
      return true
  }
  
  return false
}

function cycleLength (list) { 
  let fastPointer = list.tail,
      slowPointer = list,
      length
  
  // Move our pointers into the cycle
  while (fastPointer !== slowPointer) {
    fastPointer = fastPointer.tail.tail
    slowPointer = slowPointer.tail
  }
  
  // Loop around the cycle and count the nodes
  length = 1
  fastPointer = fastPointer.tail
  while (fastPointer !== slowPointer) {
    fastPointer = fastPointer.tail
    length += 1
  }
  
  return length
}

function breakCycle(list, cycleLength) {
  let fastPointer = list,
      slowPointer = list,
      count
  
  // Advance the fastPointer cycleLength times
  count = cycleLength
  while (count > 0) {
    fastPointer = fastPointer.tail
    count -= 1
  }
  
  // Step each pointer forward to the start of the cycle
  while (fastPointer !== slowPointer) {
    fastPointer = fastPointer.tail
    slowPointer = slowPointer.tail
  }
  
  // Walk forward cycleLength - 1 times to find the end of the cycle
  count = cycleLength - 1
  while (count > 0) {
    fastPointer = fastPointer.tail
    count -= 1
  }
  
  // Break the cycle
  fastPointer.tail = undefined
}
