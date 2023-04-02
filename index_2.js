// 問題５１
// 以下のデータから、年齢が30歳以上の人物を抽出し、名前だけの配列を作成してください。

const people = [
  { name: "John", age: 28 },
  { name: "Mary", age: 33 },
  { name: "Bob", age: 41 },
  { name: "Tom", age: 22 },
  { name: "Alice", age: 30 },
];

const nameArray = people.filter(a => a.age > 30).map(b => b.name);
console.log(nameArray)

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

const newArr = arr.sort((a,b)=> a > b ? -1 : 1);
const result = newArr.map(c => c.sort((a,b)=>a > b ? -1 : 1))
console.log(result)

// 解答
// const arr = [  [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const result = arr[0].map((_, i) => arr.map(val=>val[i])).reverse()
console.log(result);

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


// 問題７０
// 以下のオブジェクトのうち、ageプロパティの値が最大のオブジェクトを探してください。

const people = [
  { name: "John", age: 28 },
  { name: "Mary", age: 33 },
  { name: "Bob", age: 41 },
  { name: "Tom", age: 22 },
  { name: "Alice", age: 30 },
];

// const maxAge = people.map(a => a.age).reduce((a,b)=>Math.max(a,b));
// const result = people.find(a => a.age === maxAge)
// console.log(result)

// 問題７１
// 以下の配列を合計してください。

const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a,b) => a + b));

// 問題７２
// 以下の配列を値が大きい順に並び替えてください。

const arr = [5, 2, 9, 3, 1, 8];
console.log(arr.sort((a,b) => b - a))

// 問題７３
// 以下の配列から、重複している要素のみを持つ配列を作成してください。

const arr = [1, 3, 5, 3, 7, 9, 1, 5];
const result = arr.filter((val,index,array)=>{
  return array.indexOf(val) !== index
})
console.log(Array.from(new Set(result)))


// 問題74
// 以下の配列を合計してください。

const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((a,b) => a + b));


// 問題75
// 以下の配列を値が大きい順に並び替えてください。

const arr = [5, 2, 9, 3, 1, 8];
console.log(arr.sort((a,b) => a > b ? -1 : 1))


// 問題76
// 以下の配列から、重複している要素のみを持つ配列を作成してください。

const arr = [1, 3, 5, 3, 7, 9, 1, 5];
const result = arr.filter((val,index,array)=>{
  return array.indexOf(val) !== index
})
console.log(Array.from(new Set(result)))


// 問題77
// 以下のオブジェクトのうち、score プロパティが 60 以上の要素だけを持つ配列を作成してください。

const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 70 },
  { name: "Charlie", score: 90 },
  { name: "Dave", score: 50 },
  { name: "Ellen", score: 60 },
  { name: "Frank", score: 40 },
];
console.log(students.filter(a => a.score > 60));


// 問題78
// 以下の配列のうち、要素の値が奇数である要素だけを持つ配列を作成してください。

const arr = [2, 5, 7, 8, 10, 11, 13];
console.log(arr.filter(a => a % 2 !== 0))


// 問題79
// 以下の配列の各要素に対して、配列内でのインデックス番号が偶数の要素にのみ 2 を掛けた新しい配列を作成してください。

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reuslt = arr.map((val,index) => (index % 2 === 0)? val * 2 : val );

console.log(reuslt)


// 問題80
// 以下の配列の各要素に対して、配列内でのインデックス番号が奇数の要素にのみ 3 を足した新しい配列を作成してください。

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.map((val,index) => index % 2 !== 0 ? val + 3 : val)

console.log(result)


// 問題81
// 以下の配列から、値が undefined ではない要素のみを持つ配列を作成してください

const arr = [1, undefined, 3, undefined, 5, undefined, 7,undefined, 9];

console.log(arr.filter(a => a))


// 問題82
// 以下のオブジェクト配列から、age プロパティが最大の要素を取得してください。

const reuslt = people.map(a => a.age).reduce((a,b)=> Math.max(a,b));
console.log(people.filter(a => a.age === reuslt))


// 問題83
// 次の配列から、2番目に大きい数値を取得してください。

const arr = [5, 8, 1, 6, 9, 2];
console.log(arr.sort((a,b) => b - a)[1])

// 問題84
// 次の配列を指定された形式で連結してください。結果は文字列として返します。
// 期待する結果: "foo, bar, and baz"
// （最後の要素はandを含む）

const arr = ["foo", "bar", "baz"];
const lastLength = arr.length - 1;

console.log(arr.join(','))


// 問題85
// 次の配列から重複した値を削除した配列を作成してください

const arr = ["foo", "bar", "baz"];
const lastLength = arr.length - 1;

const result = arr.map((val,index)=>{
  let value = val
  if(index == lastLength){
      value = 'and ' + val
  }
  return value;
})

console.log(result.join(','))

// 問題86
// 次の配列から、要素の順番をランダムに並び替えてください。

const arr = [1, 2, 3, 4, 5];

for(let i = arr.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * (i + 1));
  
  [arr[i],arr[j]] = [arr[j],arr[i]]
}

console.log(arr)

// 問題87
// 次の配列から、重複している要素のみを抽出して、新しい配列として出力してください。

const arr = ["foo", "bar", "baz", "foo", "baz", "qux"];
const result = arr.filter((a,b,c)=>c.indexOf(a) !== b)
console.log(result)

// 問題88
// 次の配列を指定された形式で連結してください。結果は文字列として返します。
// 期待する結果: "apple & orange & peach"
// （最後の要素の前に&を含む）

const arr = ["apple", "orange", "peach"];
const length = arr.length - 1;

const result = arr.map((val,index) => index == length ? ' &' + val : ' ' + val);

console.log(result.join(''))

// 問題89
// 次の配列から、先頭の2つの要素を取り除いた配列を作成してください。

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2))

// 問題90
// 次の配列から、偶数のみを抽出して新しい配列として出力してください。

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.filter(a => a % 2 == 0));

// 問題91
// 次の配列を指定された形式で連結してください。結果は文字列として返します。
// 期待する結果: "apple, orange, peach, banana, and kiwi"
// （最後の要素はandを含む

const arr = ["apple", "orange", "peach", "banana", "kiwi"];
const length = arr.length - 1;
const result = arr.map((val,index) => index === length ? '&' + val : val);

console.log(result.join(','))

// 問題９２
// 次の配列から、配列内の数値をすべて2倍にした新しい配列を作成してください。

const arr = [2, 3, 5, 7, 11];

console.log(arr.map(a => a * 2))

// 問題９３
// 以下の配列を用いて、配列内の数値をすべて2倍にした配列を作成してください。

const arr = [3, 7, 12, 21, 36];
console.log(arr.map(a => a * 2))

// 問題９４
// 以下の配列から、偶数のみを取り出した新しい配列を作成してください。

const arr = [4, 2, 8, 5, 9, 7, 6];
console.log(arr.filter(a => a % 2 === 0))

// 問題９５
// 以下の配列から、同じ要素が連続して並んでいる箇所を削除した配列を作成してください。

const arr = ["apple", "apple", "banana", "peach", "peach", "peach", "apple", "kiwi", "kiwi"];

let array = [];

const result = arr.reduce((a,b)=> {
  if(a !== b){
    array.push(a)
  }
  console.log(a,b)
  return b
} )
console.log(array)



// 問題９６
// 以下の配列の要素をすべて足し合わせた結果を出力してください。

const arr = [4, 8, 1, 9, 7];
console.log(arr.reduce((a,b)=> a + b))


// 問題９７
// 以下の配列から、文字列の長さが3以上で、かつ先頭の文字が"a"である要素だけを抽出した新しい配列を作成してください。

const arr = ["apple", "orange", "kiwi", "avocado", "peach", "apricot", "banana"];

console.log(arr.filter(a => (a.length >= 3) && (a.charAt(0) == 'a')));



// 問題９８
// 以下の配列を用いて、平均値を求めてください。

const array = [0, 1, 1, 2, 3, 5, 8, 13]
console.log(array.length)


// 問題９９
// 以下の配列の各要素を2乗した新しい配列を作成してください。

const arr = [4, 3, 7, 8, 10, 1, 2, 3];
console.log(arr.filter((a => a % 2 !== 0)))


// 問題１００
// ファイル名とその拡張子がドットで区切られている文字列が与えられます。この文字列から、拡張子の部分だけを取り出して返す関数 getExtension(filename) を実装してください。


function getExtension(url){
  const index = url.indexOf('.') + 1;
  return url.slice(index);
}
console.log(getExtension("file.txt")); // "txt"
console.log(getExtension("image.png")); // "png"
console.log(getExtension("index.html")); // "html"



