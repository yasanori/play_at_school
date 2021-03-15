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
    CoffeSize["short"] = "short";
    CoffeSize["tall"] = "tall";
    CoffeSize["grande"] = "grande";
    CoffeSize["venti"] = "venti";
})(CoffeSize || (CoffeSize = {}));
var coffe = {
    hot: true,
    size: CoffeSize.tall
};
// エラー
// coffe.size = "short"
