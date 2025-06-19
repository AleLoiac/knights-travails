# Knight's Travails

This is a simple JavaScript project that finds the shortest path a knight can take on a standard 8×8 chessboard from a given starting position to a target position.

The algorithm uses **Breadth-First Search (BFS)** to ensure the path found is the shortest possible in terms of number of moves.

## Project Structure

- `graph.js`: Contains the core logic, including the `Graph` class which builds the chessboard and handles knight movement logic.
- `node.js`: Defines the `Node` class used to represent individual squares on the board.
- `index.js`: Entry point used for testing and running example cases.

## How It Works

1. A graph is built with 64 nodes representing each square on the board.
2. Each node stores its coordinates and all legal moves a knight can make from that position.
3. The `knightMoves(start, end)` method uses BFS to explore the shortest path between the start and end positions.
4. Once the path is found, it prints each step taken by the knight.

## Example Usage

```javascript
import { Graph } from "./graph.js";

const board = new Graph();
board.knightMoves([0, 0], [7, 7]);
```

This will output:

```javascript
=> You made it in 6 moves! Here's your path:
[0, 0]
[1, 2]
[2, 4]
[3, 6]
[5, 7]
[6, 5]
[7, 7]
```

## To Run

Make sure all files are in the same folder, then run:

```bash
node index.js
```
