# Author: madhu
# Two Sum problem solution using hash map approach

def two_sum(nums, target):
    """
    Find two numbers in the array that add up to the target sum.
    Returns the indices of the two numbers.
    """
    seen = {}  # Hash map to store number -> index mapping
    for i, num in enumerate(nums):
        needed = target - num  # Calculate what number we need to find
        if needed in seen:  # Check if the needed number exists in our hash map
            return [seen[needed], i]  # Return indices of the two numbers
        seen[num] = i  # Store current number and its index
    return []  # Return empty array if no solution found


# Test the function
num = [2,7,11,13]
target = 20
result = two_sum(num,target)
print(f"result is {result}")