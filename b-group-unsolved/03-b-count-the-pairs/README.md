# INTERVIEW QUESTIONS

## Count the pairs

## Instructions
Given an array of elements, return the number of pairs. A pair is defined as two matching elements. 

A third matching element is not counted as part of a pair. 

There can be multiple pairs of a given input.

## Example
Test Case 1: [1,2,1,3,2,4,2,3,3,1,3,3]
Expected Output: 4
Explanation: There is one pair of 1s, one pair of 2s, and two pairs of 3s. 
For example, even though there are five 3s, there are only two pairs. 

Test Case 2:[1,2,3,4]
Expected Output: 0 


## Optimal Time
O(n)
1. test if input array less than or equal to 1 element (edge case the doesn't allow for proper testing)
1. if larger than 1 element
1. create a new two dimensional array var arr
1. set the value in arr[0][0] equal to the element in the input array
1. initiate a for loop and instantiate a new var count
1. interate over the input array starting at index 0 and compare it to index 1
1. if they match, then add 1 to count
1. if they do not match, then go to the next index, index 2 and compare it to arr[0][0]
1. if they match, then add 1 to count
1. if they do not match, then go to the next index, index 3 and compare it to arr[0][0]
1. Repeat until the entire array has been iterated over, then set arr[0][1] equal to count
1. Go back to index 1 of the input array, and compare it all of the first element of each array in arr
1. If they match then go to the next index of the input array
1. If they do not match then set arr[1][0] to this input arrays index
1. Iterate over the remainder of the array repeating steps