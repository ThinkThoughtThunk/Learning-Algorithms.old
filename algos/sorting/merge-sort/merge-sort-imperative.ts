function mergesort(items) {
  return sort(items, 0, items.length - 1)
}
function sort(items, low, high) {
  if (low >= high)
    return items

  let middle = Math.floor((low + high) / 2)
  sort(items, low,        middle)
  sort(items, middle + 1, high)
  return merge(items, low, middle, high)
}

function merge(items, low, middle, high) {
  let queue1 = [], 
      queue2 = []
  console.log(items)
  for (let i = low; i <= middle; i++)
    queue1.push(items[i])
  for (let i = middle + 1; i <= high; i++)
    queue2.push(items[i])
  
  let i = low
  while (queue1.length > 0 && queue2.length > 0) {
    if (queue1[0] <= queue2[0])
      items[i] = queue1.shift()
    else
      items[i] = queue2.shift()
    i += 1
  }
  
  while (queue1.length > 0) {
    items[i] = queue1.shift()
    i += 1
  }
  
  while (queue2.length > 0) {
    items[i] = queue2.shift()
    i += 1
  }
  
  return items
