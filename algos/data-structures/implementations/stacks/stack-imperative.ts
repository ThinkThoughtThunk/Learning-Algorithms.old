export interface Stack<T> {
  size: () => number,
  push: (item: T) => void,
  pop: () => T,
  peek: () => T,
  isEmpty: () => boolean
}

function Stack () {
  let size = 0
  let items = []
  
  let push = (item) => {
    size += 1
    items[size] = item
  }
  
  let pop = () => {
    if (size > 0) {
      let item = items[size]
      items[size] = undefined
      size -= 1
      return item
    }
  }
  
  let peek = () => items[size]
  
  let isEmpty = () => size === 0
  
  return {
    size: () => size,
    push,
    pop,
    peek,
    isEmpty
  }
}
