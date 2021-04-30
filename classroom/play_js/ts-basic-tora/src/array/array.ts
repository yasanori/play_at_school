export default function arraySample() {
  const colors: string[] = ["red", "blue"]

  console.log("Array sample 1:", colors)

  const evens: Array<number> = [2, 4, 6]
  evens.push(8)
  console.log("Array sample 2:", evens)

  const nagao: (string | number)[] = ["nagao", 25]
  console.log("Array sample 3:", nagao)
}
