export default {
  sliceString: (data) => {
    const index = data.indexOf('-')
    const result = data.slice(0, index)
    return result
  }
}