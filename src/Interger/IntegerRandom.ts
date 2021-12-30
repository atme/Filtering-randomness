import History from '../History'
import Integer from './Integer'
import Pattern from './Pattern'

export default function BinaryRandom() {
  let history = new History<Integer>(10)

  return () => {
    history = history.add(new Integer())

    if (
      Pattern.isRepeated(history) ||
      Pattern.isRepeatedBetweenDigit(history) ||
      Pattern.isAscOrDesc(history) ||
      Pattern.isTopOrBottomRange(history) ||
      Pattern.areTwoNumbers(history) ||
      Pattern.areTooManySameNumbers(history)
    ) {
      history = history.replaceLast((integer) => integer.reroll())
    }

    return [history.last().value, history.last().filtered]
  }
}
