let Stack = (size, items) => {
  return {
    size,
    items
  }
}
let isEmpty: boolean = (stack) => stack.size === 0
let size: number = (stack) => stack.size
let items: T[] = (stack<T>) => stack.items

let push = (stack, item) => 
  Stack(size(stack) + 1, 
        cons(item, 
             items(stack))

let peek = (stack) => {
  if (isEmpty(stack)) 
    return console.log('Error - peek on empty stack')
  else return head(items(stack))
}

let pop = (stack) => {
  if (isEmpty(stack)) 
    return console.log('Error - pop on empty stack')
  else return cons(head(items(stack)), 
                   Stack(size(stack) - 1, 
                         tail(items(stack))))
}
