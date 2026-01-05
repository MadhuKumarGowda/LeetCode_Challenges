"""
LeetCode Problem 283: Move Zeros
Author: Madhu Kumar K S

This module contains a solution to move all zeros in an array to the end
while maintaining the relative order of non-zero elements.
"""

def move_zeros(nums):
    """
    Move all zeros in the array to the end while maintaining relative order of non-zero elements.
    
    Args:
        nums (List[int]): Input array of integers
        
    Returns:
        List[int]: Modified array with zeros moved to the end
    """
    # Initialize left pointer to track position for next non-zero element
    left = 0

    # Iterate through the array with right pointer
    for right in range(len(nums)):
        # If current element is non-zero, swap it with element at left pointer
        if nums[right] != 0:
            nums[right], nums[left] = nums[left], nums[right]
            left += 1  # Move left pointer to next position
    
    return nums

# Test case
nums = [1,0,3,2,0,4]
print(move_zeros(nums))