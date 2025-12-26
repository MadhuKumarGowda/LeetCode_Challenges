"""
    File: 14.Longest_Common_Prefix.py
    Author: Madhu Kumar K S
    Description: Solution for LeetCode problem 14 - Longest Common Prefix
    This module contains a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, it returns an empty string.
    """
def longest_common_prefix(strs):
    
        """
        Find the longest common prefix string amongst an array of strings.
        Args:
            strs (List[str]): A list of strings to find the common prefix from
        Returns:
            str: The longest common prefix string. Returns empty string if no common prefix exists.
        Examples:
            >>> longest_common_prefix(["flower", "flow", "flight"])
            'fl'
            >>> longest_common_prefix(["dog", "racecar", "car"])
            ''
            >>> longest_common_prefix(["interspecies", "interstellar", "interstate"])
            'inters'
        Time Complexity: O(S) where S is the sum of all characters in all strings
        Space Complexity: O(1) excluding the input space
        """
        if not strs:
            return ""
    
        first = strs[0]
        for i in range(len(first)):
            char = first[i]

            for s in strs[1:]:
                if i >= len(s) or s[i] != char:
                    return first[:i]
        return first

strs = ["flower", "flow", "flavor"]
result = longest_common_prefix(strs)
print(f"Common longest prefix is {result}")