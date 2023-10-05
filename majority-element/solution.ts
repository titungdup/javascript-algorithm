// Problem description: https://leetcode.com/problems/majority-element-ii/description/

function majorityElement(nums: number[]): number[] {
  let output: number[] = []
  const countMap = {}

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]

    if (!countMap[currentNumber]) {
      countMap[currentNumber] = 1
    } else {
      countMap[currentNumber]++
    }
  }

  for (const number in countMap) {
    if (countMap[number] > nums.length / 3) {
      output.push(parseInt(number))
    }
  }

  return output
}

console.log(majorityElement([3, 2, 3]))
