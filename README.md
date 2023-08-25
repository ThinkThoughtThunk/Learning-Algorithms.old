# Learning Algorithms

## (Old project from the dark ages)

I made this repo to store some of my re-implementations of classic algorithms when I was first learning to code. Pretty simple.

### Implementations

#### Sorting

- Insertion sort
  - List-based
  - Tree-based
- Merge sort
  - Functional style
  - Imperative style
- Selection Sort
  - List-based
  - Heap-based
 
#### Graphs

- Creation
- Search
  - Breadth-first
    - Find path between two vertices with unweighted edges
    - Connected components
    - The classic two-coloring problem
  - Depth-first
- Pretty-printing

> I never got around to adding the code for the other graph-based algorithms that there are files for.

#### Heaps

- insert value
- peek minimum value
- remove and return minimum value
- get size

#### Priority Queues

> Uses the heap implementation. It's not generic.

```ts
interface PriorityQueue {
  enqueue(n: number): void
  dequeue(): number
  isEmpty(): boolean
  size(): number
  peek(): number
}
```

#### Linked Lists

> Simple `cons` lists.

```ts
type LinkedList<T> = {
  cons(hd: T, tl: LinkedList<T> | undefined): LinkedList<T>
  head(list: LinkedList<T>): T | undefined
  tail(list: LinkedList<T>): LinkedList<T> | undefined
  isEmpty(list: LinkedList<T>): boolean
}
```

#### Queues

> Functional and imperative implementations

#### Stacks

> Functional and imperative implementations

#### Trees

> Binary search tree
