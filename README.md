## Algorithmic Efficiency

Algorithmic efficiency and runtime performance are not the same.  The runtime performance of your code will generally be more impacted by things like memory management, language-specific implementations, and the one or two most inefficient functions in your program.  Algorithmic efficiency is much more abstract, and much more closely related to the __strategy__ you use rather than your exact implementation. 

The best way to get a grasp on algorithmic efficiency is just to count operations, one at a time. The fewer operations it takes to solve the problem, the more efficient your strategy.  The _complexity_ of a problem refers to how many more steps you need to solve for a slightly larger input. ie:
* an efficient solution might take 10 steps for a small input, and 15 for a slighty bigger one
* an inefficient solution would take 10 steps for a small input, and 30 for a slightly bigger one
But don't worry about complexity (or Big 0) for now, first get used to counting steps!

some practical notes:
* all of our examples avoid native methods, as they hide many operations behind one call
* you will ignore variable declarations and assignments so you can refactor code until it is clear to you


learning objectives
* algorithmic efficiency = number of operations to solve a problem
* counting steps
* learning to associate steps-count with strategy