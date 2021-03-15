let hasValue: boolean = true
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.1;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
  name: string,
  age: number
} = {
  name: "nagao",
  age: 25
}

const fruits: string[] = ["apple", "banana", "grape"]
const fruit = fruits[0]

//tuple
const book: [string, number, boolean] = ["manga", 480, true]
// pushはできる
// book.push(false)
// 参照はできない
// console.log(book[3])


// Enum 列挙型

enum CoffeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}


const coffe = {
  hot: true,
  size: CoffeSize.TALL
}

// エラー
// coffe.size = "SHORT"

// anyが絡むと型づけが完全に無効となる
let anything: any = true;
anything = 'hello';
anything.aaa = {}

// string型にも代入できてしまう
let strBanana = "banana"
strBanana = anything;

// union
let unionTyoes: (number | string)[] = ["string", 10]
let unionType: number | string = 10;
// number型で使用できないメソッドでエラー
// unionTyoe.toUpperCase

// string型を代入すれば使用できる
unionType = "String"
unionType.toUpperCase()
