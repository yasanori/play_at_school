"use strict";
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.1;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: "nagao",
    age: 25
};
var fruits = ["apple", "banana", "grape"];
var fruit = fruits[0];
//tuple
var book = ["manga", 480, true];
// pushはできる
// book.push(false)
// 参照はできない
// console.log(book[3])
// Enum 列挙型
var CoffeSize;
(function (CoffeSize) {
    CoffeSize[CoffeSize["SHORT"] = 0] = "SHORT";
    CoffeSize[CoffeSize["TALL"] = 1] = "TALL";
    CoffeSize[CoffeSize["GRANDE"] = 2] = "GRANDE";
    CoffeSize[CoffeSize["VENTI"] = 3] = "VENTI";
})(CoffeSize || (CoffeSize = {}));
var coffe = {
    hot: true,
    size: CoffeSize.TALL
};
// エラー
// coffe.size = "SHORT"
// anyが絡むと型づけが完全に無効となる
var anything = true;
anything = 'hello';
anything.aaa = {};
// string型にも代入できてしまう
var strBanana = "banana";
strBanana = anything;
// union
var unionTyoes = ["string", 10];
var unionType = 10;
// number型で使用できないメソッドでエラー
// unionTyoe.toUpperCase
// string型を代入すれば使用できる
unionType = "String";
unionType.toUpperCase();
//リテラル型
var apple = "apple";
// constにした時点でリテラル型になる
var ringo = "ringo";
var drinkSize = "small";
// 関数に型は引数と戻り値
// 戻り値のみ型推論が効く
// 引数には型注釈をしないとanyになる
function add(num1, num2) {
    return num1 + num2;
}
add(5, 8);
// void 何も返さない
function consoleHello() {
    console.log("hello");
}
// andefined returnを明示的に使用した場合のみ使用できる
// 基本使わない
// function consoleHello(): void {
//   console.log("hello")
//   return;
// }
// 関数の型注釈
var anotherAdd = add;
var allowAdd = function (num) { return num * 2; };
// 右辺にもかけるが可読性に疑問
// const allowAdd = (number: number): number => number * 2;
// callback関数を引数に取る場合
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
}
doubleAndHandle(2, function (doubleNum) {
    return doubleNum;
});
// unknown型
// anyより少し厳しい型
var unknownInout;
var anyInput;
// なんでも入れることができる
unknownInout = 'hello';
var text = 'text';
// 以下はエラー
// text = unknownInout
// 型でifを用いる時に便利
if (typeof unknownInout === 'string') {
    text = unknownInout;
}
// never型
// throwなどundefinedすら何も返さない
function error(message) {
    throw new Error(message);
}
