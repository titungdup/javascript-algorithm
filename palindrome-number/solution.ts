// Problem description: https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
  const input = x.toString()
  const reversed = input.split('').reverse().join('')
  return reversed === input
}
