class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
    return this.nodes;
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach((vertex) => {
      this.nodes.add(vertex);
    });
    return this.nodes;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (v1.adjacent.has(v2)) {
      v1.adjacent.delete(v2);
    }
    if (v2.adjacent.has(v1)) {
      v2.adjacent.delete(v1);
    }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (this.nodes.has(vertex)) {
      this.nodes.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const stack = [start];
    const seen = new Set();
    const result = [];
    while (stack.length > 0) {
      const popNode = stack.pop();
      if (!seen.has(popNode)) {
        seen.add(popNode);
        result.push(popNode.value);
      }
      if (popNode.adjacent.size > 0) {
        popNode.adjacent.forEach((eachVertex) => {
          if (!seen.has(eachVertex)) {
            stack.push(eachVertex);
          }
        });
      }
    }
    console.log(result);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const queue = [start];
    const seen = new Set();
    const result = [];
    while (queue.length > 0) {
      const shiftNode = queue.shift();
      if (!seen.has(shiftNode)) {
        seen.add(shiftNode);
        result.push(shiftNode.value);
      }
      if (shiftNode.adjacent.size > 0) {
        shiftNode.adjacent.forEach((eachVertex) => {
          if (!seen.has(eachVertex)) {
            queue.push(eachVertex);
          }
        });
      }
    }
    return result;
  }
}

module.exports = { Graph, Node };
