# Author: Madhu Kumar K S
# Valid Parenthesis Checker
# This program checks if a string of parentheses is valid using a stack data structure

def valid_parenthesis(s: str) -> bool:
    """
    Check if the given string has valid parentheses arrangement.
    
    Args:
        s (str): String containing parentheses characters
        
    Returns:
        bool: True if parentheses are valid, False otherwise
    """
    # Initialize empty stack to keep track of opening brackets
    stack = []
    
    # Dictionary mapping closing brackets to their corresponding opening brackets
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    # Iterate through each character in the input string
    for char in s:
        # If character is a closing bracket
        if char in pairs:
            # Pop from stack if not empty, otherwise use placeholder "#"
            top = stack.pop() if stack else "#"
            # Check if the popped opening bracket matches the current closing bracket
            if pairs[char] != top:
                return False
        else:
            # If character is an opening bracket, push it onto the stack
            stack.append(char)
    
    # Return True if stack is empty (all brackets were matched), False otherwise
    return len(stack) == 0


# Test the function with sample input
input_parenthesis = "({[]})"
result = valid_parenthesis(input_parenthesis)

# Display the result based on validation outcome
if result is True:
    print(f"Given input has valid parenthesis")
else:
    print(f"Given input is not valid parenthesis")