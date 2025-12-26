"""
File: 13.RomanToInteger.py
Author: Madhu Kumar K S
Description: Convert Roman numerals to integers
Problem: LeetCode #13 - Roman to Integer
"""

def roman_to_integer(s: str) -> int:
    """
    Convert a Roman numeral string to an integer.
    
    Args:
        s (str): Roman numeral string
        
    Returns:
        int: Integer value of the Roman numeral
    """
    # Dictionary mapping Roman numerals to their integer values
    roman = {
        "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000
    }

    total = 0
    # Iterate through each character in the Roman numeral
    for i in range(len(s)):
        curr = roman[s[i]]  # Current Roman numeral value
        next = roman[s[i+1]] if i+1 < len(s) else 0  # Next Roman numeral value
        
        # If current value is less than next, subtract it (e.g., IV = 4)
        if curr < next:
            total -= curr
        else:
            # Otherwise, add the current value
            total += curr
    return total

# Test the function with Roman numeral "MCMIV" (1904)
roman_num = "MCMIV"
result = roman_to_integer(roman_num)
print(f"The given Roman numeral {roman_num} converts to: {result}")