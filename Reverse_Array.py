"""
File: Reverse_Array.py
Description: Implementation of array reversal algorithm using two-pointer technique
Author: Madhu Kumar K S
"""

def reverse_array(arr):
    """
    Reverse an array in-place using two-pointer technique
    
    Args:
        arr: List of elements to be reversed
    
    Returns:
        List: The reversed array
    """
    # Initialize pointers at start and end of array
    left, right = 0, len(arr)-1
    
    # Swap elements from both ends moving towards center
    while left < right :
        # Swap elements at left and right positions
        arr[left], arr[right] = arr[right], arr[left]
        # Move pointers towards center
        left +=1
        right -=1
    
    return arr

# Test the function with sample array
arr = [1,2,3,4,5,6]
print(reverse_array(arr))