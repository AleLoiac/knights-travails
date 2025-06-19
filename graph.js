import { Node } from "./node.js";

export class Graph {
  constructor() {
    this.adjacencyList = this.buildGraph();
  }

  buildGraph() {
    const map = new Map();

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const node = new Node(i, j);
        node.moves = this.calculateMoves(i, j);
        map.set(this.#arrayToKey(node.coordinates), node);
      }
    }

    return map;
  }

  calculateMoves(x, y) {
    const moves = [];

    const xMoves = [2, 2, 1, 1, -2, -2, -1, -1];
    const yMoves = [1, -1, 2, -2, 1, -1, 2, -2];

    for (let i = 0; i < 8; i++) {
      if (
        this.#checkValidMove(x + xMoves[i]) &&
        this.#checkValidMove(y + yMoves[i])
      )
        moves.push([x + xMoves[i], y + yMoves[i]]);
    }

    return moves;
  }

  #checkValidMove(value) {
    if (value < 0 || value > 7) {
      return false;
    }
    return true;
  }

  knightMoves(start, end) {
    this.#resetGraph();

    const startingNode = this.adjacencyList.get(this.#arrayToKey(start));
    const queue = [];

    startingNode.parent = "start";
    queue.push(startingNode);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (this.#arrayToKey(currentNode.coordinates) === this.#arrayToKey(end)) {
        const path = [];
        let tmp = currentNode;

        while (tmp.parent !== "start") {
          path.push(tmp.coordinates);
          tmp = this.adjacencyList.get(this.#arrayToKey(tmp.parent));
        }
        path.push(startingNode.coordinates);

        console.log(
          `=> You made it in ${path.length - 1} moves! Here's your path:`
        );
        for (let i = path.length - 1; i >= 0; i--) {
          console.log(path[i]);
        }
        return;
      }

      const moves = currentNode.moves;
      for (const move of moves) {
        const node = this.adjacencyList.get(this.#arrayToKey(move));

        if (node.parent === null) {
          node.parent = currentNode.coordinates;
          queue.push(node);
        }
      }
    }
  }

  #arrayToKey([x, y]) {
    return `${x},${y}`;
  }

  #resetGraph() {
    for (const node of this.adjacencyList.values()) {
      node.parent = null;
    }
  }
}
