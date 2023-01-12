# INTERVIEW QUESTIONS

## Are-Dups

## Instructions
Given an array, return true if there is at least one duplicate element in the array. If not, return false

## Example
Test Case 1: [1,2,13,12,4,2]
Expected Output: true

Test Case 2:[1,2,3,4]
Expected Output: false

## Optimal Time
O(n)

1. I would check if the array is larger than 1 element
1. If not, then return false and end the execution
1. If yes, then I would create a variable named testIndex set it's value equal to zero
1. Then iterate over the array starting at index 1, and compare it to index 0
1. If they are the same, then return true and end execution
1. If they are not the same then go to the next index (index 2) and compare
1. Once all the indices are compared, and no matches were found, 
1. then increase testIndex by one
1. start at index 2 and compare index 1 to index 2
1. if they are the same, return true
1. if not, then move to the next index and compare
1. Repeat steps 5 throuh 10 until a match is found then return false
1. Otherwise, return true
