import History from '../History'
import Binary from './Binary'
import Pattern from './Pattern'

export default function BinaryRandom() {
  let history = new History<Binary>(8)

  return () => {
    history = history.add(new Binary())

    if (Pattern.isRunOfFour(history) && shouldReroll()) {
      history = history.replaceLast((binary) => binary.reroll())
    } else if (Pattern.isFourValues(history) || Pattern.isRepeating(history)) {
      history = history.replaceLast((binary) => binary.invert())
    }

    return [history.last().value, history.last().filtered]
  }
}

const shouldReroll = () => Math.random() <= 0.75
