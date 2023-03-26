// 問題５１
// 以下のデータから、年齢が30歳以上の人物を抽出し、名前だけの配列を作成してください。

const people = [
  { name: "John", age: 28 },
  { name: "Mary", age: 33 },
  { name: "Bob", age: 41 },
  { name: "Tom", age: 22 },
  { name: "Alice", age: 30 },
];

// const nameArray = people.filter(a => a.age > 30).map(b => b.name);
// console.log(nameArray)

// 問題５２
// 以下の配列を昇順でソートしてください。

const numbers = [5, 3, 8, 2, 1, 4];
console.log(numbers.sort((a,b)=>a - b))

// 問題５３
// 以下の文字列に含まれる単語の数を出力してください。

const str = "The quick brown fox jumps over the lazy dog";
console.log(str.split(' ').length)

// 問題５４
// 以下のデータから、身長が最も高い人の名前を出力してください。

const people = [
  { name: "John", height: 172 },
  { name: "Mary", height: 163 },
  { name: "Bob", height: 185 },
  { name: "Tom", height: 168 },
  { name: "Alice", height: 170 },
];
const tall = people.map(a => a.height).reduce((b,c) => Math.max(b,c))
console.log(people.find(a=> a.height === tall).name)

// 問題５５
// 以下の二次元配列を、各要素が縦横逆になるように変換してください。

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const newArr = arr.sort((a,b)=> a > b ? -1 : 1);
// const result = newArr.map(c => c.sort((a,b)=>a > b ? -1 : 1))
// console.log(result)

// 解答
// const arr = [  [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // const result = arr[0].map((_, i) => arr.map(val=>val[i])).reverse()
// // console.log(result);

// 問題５６
// 以下の配列から、数値のみの配列を作成し、その合計値を出力してください。

const arr = [1, "apple", 2, "banana", 3, "cherry"];

const numbers = arr.filter(a => typeof a == "number");
console.log(numbers.reduce((b,c)=> b + c ));

// 問題５７
// 以下のデータから、各都道府県の人口の合計値を算出してください。

const population = [
  { name: "Tokyo", count: 13973168 },
  { name: "Kanagawa", count: 9197104 },
  { name: "Osaka", count: 8839469 },
  { name: "Aichi", count: 7483128 },
  { name: "Saitama", count: 7282848 },
];

const result = population.map(a => a.count).reduce((b,c) => b + c)
console.log(result)

// 問題５８
// 以下の配列を、奇数と偶数の二つの配列に分けてください。

const arr = [3, 6, 8, 2, 1, 9, 7, 4, 5];

const a = arr.filter(a => a % 2 === 0)
const b = arr.filter(b => (b % 2 !== 0) )
console.log(a,b)

// 問題５９
// 以下の配列から、重複を削除した配列を作成してください。

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 1];
console.log(Array.from(new Set(arr)))

// 問題６０
// 以下の配列から二番目に小さい要素を出力してください

const arr = [3, 6, 2, 8, 1, 9];
console.log(arr.sort((a,b)=>a - b)[1])

// 問題６１
// 以下の配列の各要素を2倍した配列を作成してください。

const arr = [1, 3, 5, 7, 9];
console.log(arr.map(a => a * 2));

// 問題６２
// 以下の配列の中で偶数のみの配列を作成してください。

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.filter(a => a %2 === 0))

// 問題６３
// 以下の配列から3以上7未満の要素だけを持つ配列を作成してください。

const arr = [1, 3, 4, 5, 7, 9, 10];
console.log(arr.filter(a => a >= 3 && a <= 7))

// 問題６４
// 以下のオブジェクトの値だけを抽出した配列を作成してください。

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(Object.keys(obj).map(a => obj[a]))

// 問題６５
// 以下の配列から、要素が3つ以上の要素だけを持つ配列を作成してください。

const arr = ["dog", "cat", "elephant", "ant", "bird", "lion", "tiger"];
console.log(arr.filter(a => a.length >= 3));

// 問題６６
// 以下の配列を、それぞれの要素に対して2を掛けた配列を作成してください。

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const reuslt = arr.map(a => a.map(b => b * 2));
console.log(reuslt)

// 問題６７
// 以下の配列を昇順に並び替えた配列を作成してください。

const arr = [3, 6, 2, 8, 1, 9];
console.log(arr.sort((a,b)=> a> b ? 1: -1))
console.log(arr.sort((a,b) => a - b))

// 問題６８
// 以下の配列を、それぞれの要素に対して2を足した配列を作成してください。ただし、元の配列の要素には変更を加えないでください。

const arr = [1, 3, 5, 7, 9];
console.log(arr.map(a => a + 2));

// 問題６９
// 以下の配列から、重複している要素のみを持つ配列を作成してください。

const arr = [1, 2, 3, 2, 4, 3, 5, 6, 1, 6, 2, 2];

const result = arr.filter((val,index,array) => array.indexOf(val) !== index);
console.log(result)







