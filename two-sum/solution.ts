function twoSum(nums: number[], target: number): number[] {
  let output: number[] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j)
        break
      }
    }
  }

  return output
}
