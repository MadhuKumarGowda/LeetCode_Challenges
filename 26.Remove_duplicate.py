"""
LeetCode Problem 26: Remove Duplicates from Sorted Array
Author: Madhu Kumar K S

Problem: Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears 
only once. The relative order of the elements should be kept the same.
"""

def remove_duplicates(nums):
    """
    Remove duplicates from sorted array in-place using two pointers approach.
    
    Args:
        nums: List of integers sorted in non-decreasing order
        
    Returns:
        int: Length of array after removing duplicates
    """
    # Handle edge case: empty array
    if not nums:
        return 0
    
    # Initialize slow pointer to track position for next unique element
    i = 0
    
    # Use fast pointer to iterate through array starting from second element
    for j in range(1, len(nums)):
        # If current element is different from element at slow pointer
        if nums[j] != nums[i]:
            # Move slow pointer forward
            i += 1
            # Place unique element at slow pointer position
            nums[i] = nums[j]
    
    # Return length of array with unique elements (index + 1)
    return i + 1

# Test case
nums = [0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
k = remove_duplicates(nums)
print(nums[:k])  # Print first k elements containing unique values