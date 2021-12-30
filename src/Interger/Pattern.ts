import History from '../History'
import Integer from './Integer'

const getValues = (history: History<Integer>, length: number) =>
  history.values.slice(length).map(({ filtered }) => filtered)

/**
 * Checks if last numbers are either 00 or 11 or 22 etc.
 */
const isRepeated = (history: History<Integer>) => {
  const values = getValues(history, -2)
  return values[0] === values[1]
}

/**
 * Checks if last numbers are either 838 or 272 or 656 etc.
 */
const isRepeatedBetweenDigit = (history: History<Integer>) => {
  const values = getValues(history, -3)
  return values[0] === values[2]
}

/**
 * Checks if last numbers are either 3456 or 9765 etc.
 */
const isAscOrDesc = (history: History<Integer>) => {
  const values = getValues(history, -4)
  return (
    values[0] - values[1] + values[2] - values[3] === 2 ||
    values[1] - values[0] + values[3] - values[2] === 2
  )
}

/**
 * Checks if last numbers are either 67898 or 10432 etc.
 */
const isTopOrBottomRange = (history: History<Integer>) => {
  const values = getValues(history, -5)
  return values.every((v) => v > 5) || values.every((v) => v < 5)
}

/**
 * Checks if last numbers are either 4353231253 or 4353231212 etc.
 */
const areTwoNumbers = (history: History<Integer>) => {
  const values = getValues(history, -10)
  const lastTwo = values.slice(-2)
  return values
    .slice(0, -2)
    .some(
      (value, index, array) =>
        value === lastTwo[1] && array[index - 1] === lastTwo[0]
    )
}
/**
 * Checks if last numbers are either 9439229229 or 4734374124 etc.
 */
const areTooManySameNumbers = (history: History<Integer>) => {
  const values = getValues(history, -10)
  const last = values.slice(-1).pop()!
  return values.slice(0, -1).filter((v) => v === last).length < 4
}

const Pattern = {
  isRepeated,
  isRepeatedBetweenDigit,
  isAscOrDesc,
  isTopOrBottomRange,
  areTwoNumbers,
  areTooManySameNumbers,
}
export default Pattern
