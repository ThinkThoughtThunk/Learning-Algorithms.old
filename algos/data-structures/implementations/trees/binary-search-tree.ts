export interface Node {
  key: number,
  parent: Node,
  left: Node,
  right: Node
}
export function createNode(
  key: number = undefined,
  parent: Node = undefined,
  left: Node = undefined,
  right: Node = undefined
): Node {
  const tree = {
    key,
    parent,
    left,
    right
  }
  
  if (left) left.parent = tree
  if (right) right.parent = tree
  
  return tree
}

export function insert(
  key: number, 
  tree: Node, 
  parent: Node = undefined
): void {
  
  if (!tree.key) {
    tree.key = key
    tree.parent = parent
    tree.left = tree.right = undefined
    
    return
  }
  
  if (key < tree.key) {
    if (!tree.left)
      tree.left = createNode(key)
    else
      insert(key, tree.left, tree)
  }
  
  if (key >= tree.key) {
    if (!tree.right)
      tree.right = createNode(key)
    else
      insert(key, tree.right, tree)
  }
}

export function search(key: number, tree: Node): Node {
  if (!tree)
    return undefined
  
  if (key === tree.key)
    return tree
  
  if (key < tree.key)
    return search(key, tree.left)
    
  if (key > tree.key)
    return search(key, tree.right)
}

export function minimum(tree: Node): Node {
  if (!tree)
    return undefined
    
  if (!tree.left)
    return tree
    
  return minimum(tree.left)
}

export function maximum(tree: Node): Node {
  if (!tree)
    return undefined
  
  if (!tree.right)
    return tree
    
  return maximum(tree.right)
}

export function fromArray(input: number[]): Node {
  let tree = createNode()

  input.forEach(key => insert(key, tree))
  
  return tree
}

export function inOrderWalk(tree: Node, fn: (key: number) => void): void {
  if (!tree)
    return

  inOrderWalk(tree.left, fn)
  fn(tree.key)
  inOrderWalk(tree.right, fn)
}
