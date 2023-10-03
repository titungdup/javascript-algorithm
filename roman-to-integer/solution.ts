// Problem description: https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
  let numberArr: any = s.split('')

  for (let i = 0; i < numberArr.length; i++) {
    switch (numberArr[i]) {
      case 'I':
        numberArr[i] = 1
        break
      case 'V':
        numberArr[i] = 5
        break
      case 'X':
        numberArr[i] = 10
        break
      case 'L':
        numberArr[i] = 50
        break
      case 'C':
        numberArr[i] = 100
        break
      case 'D':
        numberArr[i] = 500
        break
      case 'M':
        numberArr[i] = 1000
        break
    }
  }

  let arrangedArray: number[] = []

  for (let i = 0; i < numberArr.length; i++) {
    // if item is less than next item then skip current item
    if (numberArr[i] < numberArr[i + 1]) {
      continue
    }
    // if item is greater than previous item then subtract current from previous
    if (numberArr[i] > numberArr[i - 1]) {
      arrangedArray.push(numberArr[i] - numberArr[i - 1])
    } else {
      arrangedArray.push(numberArr[i])
    }
  }

  const output = arrangedArray.reduce((acc, cur) => acc + cur)

  return output
}

console.log(romanToInt('III'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
