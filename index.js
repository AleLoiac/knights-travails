import { Graph } from "./graph.js";

const graph = new Graph();

graph.knightMoves([0, 0], [1, 2]);
graph.knightMoves([0, 0], [3, 3]);
graph.knightMoves([3, 3], [0, 0]);
graph.knightMoves([3, 3], [7, 7]);
graph.knightMoves([0, 0], [7, 7]);
