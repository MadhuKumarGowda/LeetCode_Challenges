// Two Sum - Brute Force Approach
// Time Complexity: O(n²) - nested loops iterate through array
// Space Complexity: O(1) - only using constant extra space
function twoSum(nums: number[], target: number): number[] {
    // Outer loop: iterate through each element (n iterations)
    for(let i=0;i<nums.length;i++){
     // Inner loop: check remaining elements (n-1, n-2, ... iterations)
     // This creates O(n²) time complexity due to nested iteration
     for(let j=i+1;j<nums.length;j++){
          // Check if current pair sums to target
          if (nums[i] + nums[j] === target){
                return[i,j] // Return indices of the two numbers
          }
     }
    }
    return [] // Return empty array if no solution found
};

console.log(twoSum([2,5,5,11],10))