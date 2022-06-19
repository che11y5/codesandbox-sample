/**
 * const ,let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数を再宣言可能
val1 = "var変数を再宣言";
console.log(val1);

// let変数
let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数は上書き可能";
console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数は再宣言できない";
// console.log(val2);

// const変数
const val3 = "const変数";
console.log(val3);

// const変数は上書きできない
// val3 = "const変数は上書きできない";
// console.log(val3);

// const変数は再宣言できない
// const val3 = "const変数は再宣言できない";
// console.log(val3);

// const宣言してもオブジェクトのプロパティは変更可能
// のでオブジェクト宣言はほぼほぼconst
const val4 = {
  name: "chelly5",
  age: 23
};
console.log(val4);
val4.name = "ちぇりー";

// const宣言しても配列の中身は変更可能
// ので配列宣言はほぼほぼconst
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "chelly5";
const age = "23";

// 従来の方法
const meg1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(meg1);
// テンプレート文字列
// シングルクォート ``で括る
const meg2 = `私の名前は${name}です。年齢は${age}です`;
console.log(meg2);

/**
 * アロー関数
 */
// 従来の方法
function func1(str) {
  return str;
}
console.log(func1("たらこくちびる1"));
// 変数に関数を定義することもできる
const func2 = function (str) {
  return str;
};
console.log(func2("たらこくちびる2"));

// アロー関数
//　↓の()を省略もできる　pretireで勝手に補完されるけど。。
const func3 = (str) => {
  return str;
};
console.log(func3("たらこくちびる3"));

// ただ返すだけなら以下のような書き方ができる
const func4 = (str) => str;
console.log(func4("たらこくちびる4"));

const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 15));

/**
 * 分割代入
 */
const myProfile = {
  myname: "chelly5",
  myage: 23
};
const meg3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(meg3);
// ！⇩ここ！
const { myname, myage } = myProfile;
const meg4 = `名前は${myname}です。年齢は${myage}です。`;
console.log(meg4);

const myProfile2 = ["ちぇりー", "秘密"];
const meg5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(meg5);
// ！⇩ここ！
const [myname2, myage2] = myProfile2;
const meg6 = `名前は${myname2}です。年齢は${myage2}です。`;
console.log(meg6);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "default") => console.log(`こんにちは！${name}さん！`);
sayHello();
sayHello("chelly5");

/**
 * スプレッド構文
 */
// ...←を使う構文
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
// 順番に1つずつ処理してくれる
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 配列の集約
const arr2 = [1, 2, 3, 4, 5];
// 残り3つをまとめている
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);
// 普通にコピーすればいいじゃん？
const arr8 = arr4;
console.log(arr8);
// 参照をコピーしてしまっているため、コピー元が変われば参照したその後も変わってしまう
