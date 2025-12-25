"""
Palindrome Number Checker
========================
This file contains a function to check if a given integer is a palindrome.
A palindrome number reads the same backward as forward.

Author: Madhu Kumar K S
File: 9.Palindrom.py
"""

def check_digit_palindrome(x: int):
    """
    Check if a given integer is a palindrome.
    
    Args:
        x (int): The integer to check
        
    Returns:
        bool: True if the number is a palindrome, False otherwise
    """
    # If negative integer, it's not a palindrome
    if x < 0:
        return False
    
    # If the number ends with 0 (except 0 itself), it's not a palindrome
    if x % 10 == 0 and x != 0:
        return False
    
    # Reverse only half of the number to avoid integer overflow
    revHalf = 0
    while x > revHalf:
        digit = x % 10  # Extract the last digit
        revHalf = revHalf * 10 + digit  # Build reversed half
        x //= 10  # Remove the last digit from x
    
    # For even digits: x == revHalf
    # For odd digits: x == revHalf // 10 (removes middle digit)
    return x == revHalf or x == revHalf // 10

# Test the function
number = 10
result = check_digit_palindrome(number)
if result is True:
    print("The Given Integer is Palindrome")
else:
    print("The Given number is not Palindrome")