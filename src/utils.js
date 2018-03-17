export const sortComparator = (left, right) => {
    if (left.title > right.title) {
        return 1
    } else if (left.title < right.title) {
        return -1
    }
    return 0
}