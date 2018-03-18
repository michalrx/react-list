
export const sortComparator = (left, right) => {
  if (left.title > right.title) {
    return 1
  } else if (left.title < right.title) {
    return -1
  }
  return 0
}

export const ratingNames = [
  'Not rated yet',
  'very poor',
  'poor',
  'average',
  'good',
  'very good',
]

export const getStats = data => data.reduce((prev, current) => {
  const ratingName = ratingNames[current.rating]
  if (prev[ratingName]) {
    prev[ratingName] += 1
  } else {
    prev[ratingName] = 1
  }
  return prev
}, {})