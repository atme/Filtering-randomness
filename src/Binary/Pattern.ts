import History from '../History'
import Binary from './Binary'

const getValues = (history: History<Binary>, length: number) =>
  history.values.slice(length).map(({ filtered }) => filtered)

/**
 * Checks if last numbers are 0000 or 1111
 */
const isRunOfFour = (history: History<Binary>) => {
  const values = getValues(history, -4)
  if (values.length < 4) {
    return false
  }
  const last = values.splice(-1, 1).pop()!
  return values.every((v) => v === last)
}

/**
 * Checks if last numbers are 00110011 or 11001100
 */
const isFourValues = (history: History<Binary>) => {
  const values = getValues(history, -8)
  return (
    values[0] === values[1] &&
    values[1] !== values[2] &&
    values[2] === values[3] &&
    values[3] !== values[4] &&
    values[4] === values[5] &&
    values[5] !== values[6] &&
    values[6] === values[7]
  )
}

/**
 * Checks if last numbers are 000111 or 111000
 */
const isRepeating = (history: History<Binary>) => {
  const values = getValues(history, -6)
  return (
    values[0] === values[1] &&
    values[1] === values[2] &&
    values[2] !== values[3] &&
    values[3] === values[4] &&
    values[4] === values[5]
  )
}
const Pattern = { isRunOfFour, isFourValues, isRepeating }
export default Pattern
