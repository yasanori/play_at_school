export default function unknownSample() {
  let maybeNumber: unknown = 25;
  console.log("unknown sample 1 :", typeof (maybeNumber), maybeNumber)

  const isHoge = maybeNumber === "hoge"
  console.log("unknown sample 2 :", typeof (isHoge), isHoge)

  // error
  // const sum = maybeNumber + 10

  if (typeof (maybeNumber) === "number") {
    const sum = maybeNumber + 10;
    console.log("unknown sample 3 :", typeof (sum), sum)
  }
}
