---
title: "Sudoku Solver using minisat satisfiability solver"
layout: page
date: 2017-01-29 21:00
projects: true
---

I have been using boolean satisfiability solvers (Sat solvers) as part of my academic projects in EDA/CAD.  

A sat solver takes as it's input a boolean formula in Product-of-Sum form. It then determines if an input assignment exists which makes the boolean formula true. It returns such an assignment if it exists.  

Many problems which can be expressed in terms of boolean constraints can be solved using a sat solver.

This project is an attempt to solve a Sudoku Puzzle using an open source sat solver called minisat.  

Once a sudoku puzzle file has been read in, it is converted into a Product-of-sum boolean formula (CNF) and provided as input to the sat solver. 

The sudoku puzzle squares are represented by variables x1 to x81. Then the following set of constraints are obtained :-
1) Each variable must have a value between 1-9 . For variable xi this can be represented using the constraint :-  
(xi == 1) OR (xi == 2) OR ... (xi == 9) 

2) If a variable xi takes a value v1 then it can't take a value v2. This is represented as :- 
NOT(xi == v1) OR NOT(xi == v2)

3) If a variable xi takes a value v1 then any variable xj in the same row or same column or same 3x3 box can't take valye v1 :- 
NOT(xi == v1) OR NOT(xj == v1) 

The CNF formula is created as a product of all such constraints. Additional constraints representing the specified values in the puzzle grid are fed as assumptions to the Sat solver.

If a solution to the puzzle exists the Sat solver returns SAT and displays the result.

The project source code is hosted on github [here](https://github.com/ameyaskVT/sudokuSatSolver) . 
