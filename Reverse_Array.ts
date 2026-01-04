/**
 * Reverse Array Implementation
 * 
 * This file contains a function to reverse an array in-place using two pointers approach.
 * The algorithm swaps elements from both ends moving towards the center.
 * 
 * @author Madhu Kumar K S
 */

/**
 * Reverses an array in-place using two pointers technique
 * @param arr - The array of numbers to be reversed
 */
const reverse_array = (arr:number[]) => {
  let left = 0; // Pointer starting from the beginning
  let right = arr.length - 1; // Pointer starting from the end

  // Continue swapping until pointers meet in the middle
  while (left < right) {
    // Swap elements at left and right positions
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1; // Move left pointer forward
    right -= 1; // Move right pointer backward
  }
  console.log(arr); // Print the reversed array
};

// Test array
let arr:number[] = [1, 2, 3, 4, 5];
reverse_array(arr); // Call function to reverse the array
