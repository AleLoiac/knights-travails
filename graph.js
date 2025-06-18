import { Node } from "./node.js";

export class Graph {
  constructor() {
    this.adjacencyList = this.buildGraph();
  }
}
