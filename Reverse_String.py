"""
File: Reverse_String.py
Description: A program to reverse a string using two-pointer technique
Author: Madhu Kumar
"""

def reverse_string(str)->str:
    """
    Reverses a string using two-pointer approach
    
    Args:
        str: Input string to be reversed
    
    Returns:
        str: Reversed string
    """
    left, right = 0, len(str)-1  # Initialize pointers at start and end
    chars = list(str)  # Convert string to list for in-place swapping
    
    # Swap characters from both ends moving towards center
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1   # Move left pointer right
        right -= 1  # Move right pointer left
    
    return "".join(chars)  # Convert list back to string

str = "madhu"
print(reverse_string(str))