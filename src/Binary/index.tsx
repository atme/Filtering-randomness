import { useEffect, useState } from 'react'
import BinaryRandom from './BinaryRandom'

export default function Binary() {
  const [permutation, setPermutation] = useState<number[][]>([])

  const generate = () => {
    const rnd = BinaryRandom()
    setPermutation([])
    for (let index = 0; index < 100; index++) {
      setPermutation((p) => [...p, rnd()])
    }
  }

  useEffect(() => {
    generate()
  }, [])

  return (
    <section>
      <h1>Filtering Binary Randomness</h1>
      <button onClick={generate}>Generate</button>
      <p>
        <code>{permutation.map((p) => p[0])}</code>
      </p>
      <br />
      <p>
        <code>
          {permutation.map((p, i) =>
            p[0] === p[1] ? p[1] : <mark key={i}>{p[1]}</mark>
          )}
        </code>
      </p>
    </section>
  )
}
