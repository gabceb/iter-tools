import map from './map'
import range from './range'
import permutations from './permutations'
import iter from './iter'

function isSorted (arr) {
  if (arr.length < 2) return true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false
    }
  }
  return true
}

export default function * combinations (iterable, r) {
  const arr = Array.from(iter(iterable))
  const mapToIndex = map(function (i) { return arr[i] })
  const n = arr.length

  for (let indices of permutations(range(n), r)) {
    if (isSorted(indices)) {
      yield Array.from(mapToIndex(indices))
    }
  }
}
