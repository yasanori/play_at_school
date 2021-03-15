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

//リテラル型
const apple: "apple" = "apple"
// constにした時点でリテラル型になる
const ringo = "ringo"

// typeエイリアス
type size = "small" | "medium" | "large"
let drinkSize: size = "small"

// 関数に型は引数と戻り値
// 戻り値のみ型推論が効く
// 引数には型注釈をしないとanyになる
function add(num1: number, num2: number): number {
  return num1 + num2
}

add(5, 8)

// void 何も返さない
function consoleHello(): void {
  console.log("hello")
}

// andefined returnを明示的に使用した場合のみ使用できる
// 基本使わない
// function consoleHello(): void {
//   console.log("hello")
//   return;
// }

// 関数の型注釈
const anotherAdd: (n1: number, n2: number) => number = add

const allowAdd: (num: number) => number = num => num * 2;
// 右辺にもかけるが可読性に疑問
// const allowAdd = (number: number): number => number * 2;

// callback関数を引数に取る場合
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2)
}

doubleAndHandle(2, doubleNum => {
  return doubleNum
})

// unknown型
// anyより少し厳しい型
let unknownInout: unknown;
let anyInput: any;

// なんでも入れることができる
unknownInout = 'hello';
let text = 'text';
// 以下はエラー
// text = unknownInout

// 型でifを用いる時に便利
if (typeof unknownInout === 'string') {
  text = unknownInout;
}

// never型
// throwなどundefinedすら何も返さない
function error(message: string): never {
  throw new Error(message)
}
