import { insert, inOrderWalk, createNode } from '../../data-structures/trees/binary-search-tree'

export function insertionSortTree(input: number[]): number[] {
  let tree = createNode(),
      count = 0
  
  input.forEach(item => insert(item, tree))
  
  inOrderWalk(tree, key => {
    input[count] = key
    count += 1
  })
  
  return input
}
