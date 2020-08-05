const { FirstReverse, FirstFactorial } = require('./index.js')

test('Q1: string happy should be returned in reverse', () => {
  expect(FirstReverse('happy')).toBe('yppah')
})

test('Q1: string 54321 should be returned in reverse', () => {
  expect(FirstReverse('54321')).toBe('12345')
})

test('Q1: string Mr Johnson should be returned in reverse', () => {
  expect(FirstReverse('Mr Johnson')).toBe('nosnhoJ rM')
})

test('Q2: return factorial of 1', () => {
  expect(FirstFactorial(1)).toBe(1)
})

test('Q2: return factorial of 2', () => {
  expect(FirstFactorial(2)).toBe(2)
})

test('Q2: return factorial of 3', () => {
  expect(FirstFactorial(3)).toBe(6)
})

test('Q2: return factorial of 4', () => {
  expect(FirstFactorial(4)).toBe(24)
})

test('Q2: return factorial of 5', () => {
  expect(FirstFactorial(5)).toBe(120)
})

test('Q2: return factorial of 6', () => {
  expect(FirstFactorial(6)).toBe(720)
})

test('Q2: return factorial of 7', () => {
  expect(FirstFactorial(7)).toBe(5040)
})

test('Q2: return factorial of 8', () => {
  expect(FirstFactorial(8)).toBe(40320)
})

test('Q2: return factorial of 9', () => {
  expect(FirstFactorial(9)).toBe(362880)
})

test('Q2: return factorial of 10', () => {
  expect(FirstFactorial(10)).toBe(3628800)
})
