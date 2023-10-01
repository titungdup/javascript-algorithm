**Intuition**

Take one number and add it to the rest one by one while checking if the sum is equal to the target.

**Approach**

- Define an output array variable
- Use two loops
- Make the starting point of the second loop one more that tha index of the first loop. This way we can avoid repeating checked number.
- Check if the sum of two numbers is equal to the target. If true push the index of two loops into an output array variable.
- Also break the loop if the solution is found to save some time.

**Complexity**

Time complexity:
$$O(n2)$$

Space complexity:

$$O(1)$$
