---
title: 'Sudoku solver with DFS in Python'
description: 'A Python-based Sudoku solver that uses depth-first search and backtracking to fill in a 9x9 board while respecting Sudoku rules.'
pubDate: '2024-09-07'
heroImage: '../../assets/posts/sudoku-solver-with-dfs-in-python.png'
category: 'Projects'
---

This project, [available on GitHub](https://github.com/emiliodallatorre/sudokusolver), is a Python-based Sudoku solver that uses Depth First Search (DFS) and backtracking to efficiently solve Sudoku puzzles.

## Features

- Solves standard 9×9 Sudoku puzzles
- Utilizes DFS to explore valid number placements
- Can handle puzzles with unique solutions

## How does it work

The algorithm identifies empty cells in the Sudoku grid and tries placing numbers from 1 to 9 while adhering to Sudoku rules. If a number doesn't fit, the algorithm backtracks and tries the next possible option. This process continues until the puzzle is solved or deemed unsolvable.

The project repository includes code for input/output handling, solution visualization, and a customizable callback function to track the solving process. The solver can be easily integrated into other projects or run standalone.

The code and documentation are available on GitHub for anyone interested in exploring or contributing to the project.

## Usage

To resolve a Sudoku puzzle, you can use the `solve_sudoku` function from the `sudoku_solver` module. The function takes a Sudoku board as input and returns the solved board as output.

```python
from time import sleep
from sudoku_io import read_board, write_board
from sudoku_printer import print_sudoku_and_solution
from sudoku_solver import solve_sudoku

def after_each_step_callback(solution: list[int]) -> None:
    print_sudoku_and_solution(sudoku, solution)
    sleep(0.005)

sudoku: list[int] = read_board("sample_data/sample_input.txt")
solution: list[int] = solve_sudoku(
    sudoku,
    after_each_step_callback=after_each_step_callback,
)

write_board("sample_data/sample_output.txt", solution)
```

You can specify a callback function to be called after each step of the solving process. This can be useful for visualizing the solving process or tracking the algorithm's progress.

This project comes with a simple printer that displays the Sudoku board and the current solution in the console.
