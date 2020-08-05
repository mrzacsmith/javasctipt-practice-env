// 1. Create a function FirstReverse() that takes a string as parameter and returns the str in reverse order. Review array functions: split, reverse and join

// Create function here
const FirstReverse = (str) => {
  return str.split('').reverse().join('')
}

// console.log(`Q1: ${FirstReverse('test')}`)

// 2. Create a function FirstFactorial() that takes a number as a parameter and returns the factorial of it. IE number =4, return (4*3*2*1)

const FirstFactorial = (num) => {
  let total = 1
  for (let i = 2; i <= num; i++) {
    total *= i
  }
  return total
}

module.exports = {
  FirstReverse,
  FirstFactorial,
}
