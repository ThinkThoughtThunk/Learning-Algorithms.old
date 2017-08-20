import { 
  Node, 
  createNode, 
  insert, 
  fromArray,
  search,
  minimum,
  maximum,
  inOrderWalk
} from './binary-search-tree'

const keys = [9, 4, 17, 12, 7, 10, 6, 8]

describe('binary search tree creation', () => {
  it('can create a node', () => {
    const node = createNode(5)
    expect(node).toEqual({key: 5, left: undefined, right: undefined})
  })
  
  it('can create a tree from an array', () => {
    expect(fromArray(keys)).toMatchSnapshot('fromArray')
  })
})

describe('binary search tree insertion', () => {
  const tree = fromArray(keys)
  
  it('can insert a key less than the root', () => {
    let node2 = createNode(2)
    insert(2, tree)
    expect(tree.left.left).toMatchObject(node2)
  })
  
  it('can insert a key greater than the root', () => {
    let node20 = createNode(20)
    insert(20, tree)
    expect(tree.right.right).toMatchObject(node20)
  })
})
  
describe('binary search tree operations', () => {
  const tree = fromArray(keys)
  
  it('should search for a key', () => {
    let key = 7,
        expected = { key: 7, left: createNode(6), right: createNode(8) }
    expect(search(key, tree)).toMatchObject(expected)
  })
  
  it('should find the minimum', () => {
    let expectedKey = 4
    expect(minimum(tree)).toHaveProperty('key', expectedKey)
  })
  
  it('should find the maximum', () => {
    let expectedKey = 17
    expect(maximum(tree)).toHaveProperty('key', expectedKey)
  })
})

xdescribe('binary search tree removal', () => {
  
})

describe('binary search tree traversal', () => {
  const tree = fromArray(keys)
  
  it('should return the elements in order', () => {
    const output = []
    
    inOrderWalk(tree, (item) => output.push(item))
    expect(output).toEqual([4, 6, 7, 8, 9, 10, 12, 17])
  })
})
