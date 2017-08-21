function cons (head, tail) {
  return {
    head,
    tail
  }
}

let EMPTY = undefined
let list = cons(1,
                cons(2,
                     cons(3,
                          cons(4,
                               cons(5, 
                                    EMPTY)))))
// list = { head: 1, tail:
//          { head: 2, tail: 
//            { head: 3, tail: 
//              { head: 4, tail: 
//                { head: 5, tail: 
//                  undefined }}}}}  
//                  
//                  
let array = [1, 2, 3, 4, 5]

let linkedList = array.reduceRight(
  (acc, curr) => cons(curr, acc), 
  EMPTY
)

let isEmpty = (list) => list === EMPTY
let head = (list) => {
  if (isEmpty(list))
    return console.log('Error - head of empty list')
  else
    return list.head
}
let tail = (list) => {
  if (isEmpty(list))
    return console.log('Error - tail of empty list')
  else
    return list.tail
}

// foldl, foldr
// map
// reverse
// append
