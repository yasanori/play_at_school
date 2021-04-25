export default function objectSample() {
  const a: object = {
    name: "japan",
  }
  // error
  // a.name

  let country: {
    language: string
    name: string
  } = {
    language: "japanese",
    name: "japan"
  }
  console.log("object sample 1 :", country.name)

  country = {
    language: "english",
    name: "usa"
  }

  console.log("object sample 2 :", country.name)

  // オプショナルとreadonly
  const me: {
    name: string
    readonly gender: string
    age: number
    job?: string
  } = {
    name: "nagao",
    gender: "man",
    age: 25
  }

  console.log("object sample 3 :", me.name, me.job)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    USA: "NewYork"
  }

  capitals.Canada = "Otawa"
  console.log("object sample 4 :", capitals)

}
