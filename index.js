function getName(node) {
  return node.name
}

function headNode(first, collection) {
  return collection[first]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, first, collection) {
  let node = headNode(first, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, first, collection) {
  if (index === 0) {
    return first
  } else {
    let node = nodeAt(index - 1, first, collection)
    return node.next
  }
}

function indexAt(node, collection, first) {
  let head = headNode(first, collection)
  let currentNode = head
  let index = 0

  while (currentNode !== node) {
    currentNode = next(currentNode, collection)
    index++
  }

  return index
}

function insertNodeAt(index, address, first, collection) {
  let newNode = collection[address]
  let previousNode = nodeAt(index - 1, first, collection)
  let nextNode = nodeAt(index, first, collection)
  let nextIndex = indexAt(nextNode, collection, first)
  let nextAddress = addressAt(nextIndex, first, collection)

  previousNode.next = address
  newNode.next = nextAddress

  return collection
}

function deleteNodeAt(index, first, collection) {
  let deletableAddress = addressAt(index, first, collection)
  let previousNode = nodeAt(index - 1, first, collection)
  let nextNode = nodeAt(index + 1, first, collection)
  let nextIndex = indexAt(nextNode, collection, first)
  let nextAddress = addressAt(nextIndex, first, collection)

  previousNode.next = nextAddress
  collection[deletableAddress] = null

  return collection
}
