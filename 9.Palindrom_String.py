"""
LeetCode Challenge: Palindrome String Checker
Author: Madhu Kumar K S
Description: This program checks if a given input is a palindrome by comparing characters
from both ends moving towards the center.
"""

def check_string_palindrome(x: int):
    """
    Check if the given input is a palindrome.
    
    Args:
        x (int): Input to check for palindrome
    
    Returns:
        bool: True if palindrome, False otherwise
    """
    x = str(x).lower()  # Convert to string and lowercase for case-insensitive comparison
    l = 0  # Left pointer starting from beginning
    r = len(x) - 1  # Right pointer starting from end
    
    # Compare characters from both ends moving towards center
    while l <= r:
        if x[l] != x[r]:  # If characters don't match, not a palindrome
            return False
        l = l + 1  # Move left pointer forward
        r = r - 1  # Move right pointer backward
    
    return True  # All characters matched, it's a palindrome

# Test the function with sample input
number = "Kanak"
result = check_string_palindrome(number)

# Display result
if result is True:
    print("The given input is Palindrome")
else:
    print("The given input is not Palindrome")
