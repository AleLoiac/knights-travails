import { Node } from "./node.js";

export class Graph {
  constructor() {
    this.adjacencyList = this.buildGraph();
  }

  buildGraph() {
    const list = [];

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const node = new Node(i, j);
        node.moves = this.calculateMoves(i, j);
        list.push(node);
      }
    }

    return list;
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
}
