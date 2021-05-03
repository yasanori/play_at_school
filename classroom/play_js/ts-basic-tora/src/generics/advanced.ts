export default function genericsAdvancedSample() {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringToNumbers(["12", "34", "56"], (item) => Number(item))
  console.log("Generics advanced sample 1:", numbers)

  const mapNumberToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumberToStrings([12, 34, 56], (item) => String(item))
  console.log("Generics advanced sample 2:", strings)
}
