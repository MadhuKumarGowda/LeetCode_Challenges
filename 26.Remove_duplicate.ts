/**
 * LeetCode Problem 26: Remove Duplicates from Sorted Array
 * Author: Madhu Kumar K S
 * 
 * This solution removes duplicates from a sorted array in-place and returns
 * the length of the array with unique elements.
 */

/**
 * Removes duplicates from a sorted array in-place using two-pointer technique
 * @param nums - sorted array of numbers
 * @returns length of array after removing duplicates
 */
const remove_duplicates = (nums: number[]): number => {
    // Handle edge case: empty array
    if (nums.length <= 0)
        return 0

    // Initialize slow pointer for unique elements position
    let i = 0
    
    // Fast pointer iterates through the array
    for (let j = 1; j < nums.length; j++) {
        // If current element is different from the last unique element
        if (nums[j] != nums[i]) {
            i += 1  // Move to next position for unique element
            nums[i] = nums[j]  // Place the unique element
        }
    }
    
    // Return count of unique elements
    return i + 1
}

// Test the function
let nums: number[] = [0, 0, 1, 1, 2, 2, 2, 4, 5, 6, 6, 6]
let k = remove_duplicates(nums)
let result: number[] = nums.slice(0, k)
console.log(result)  // Output: [0, 1, 2, 4, 5, 6]
