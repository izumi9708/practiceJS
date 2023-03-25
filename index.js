
// 問題１
// オブジェクトを要素とする配列があります。そのオブジェクトのプロパティ「name」を、昇順にソートするコードを作成してください。

const array = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 }
];

const nameArray = array.map(val=>{
  const {name} = val;
  return name;
})

const sort = nameArray.sort((a,b)=>{
  return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
})

console.log(sort)

// 問題２
// ユーザーが入力した文字列に含まれる単語の数を数えるコードを作成してください。ただし、単語はスペースで区切られているものとします。


const string = 'JavaScript は Web 開発において広く使用されるプログラミング言語であり、多くの人に愛されています。';

let array = [];

for(let i of string){
  if(i === 'a'){
    array.push(i)
  }
}

console.log(array.length);


// 問題３
// 以下のような配列があります。
// const array = [1, 2, 3, 4, 5]; 
// 上記配列から、重複を除いた配列を作成するコードを作成してください。

const array = [1, 2, 3, 4, 5];
const newArray = Array.from(new Set(array));

console.log(newArray)


// 問題４
// 与えられた文字列が回文であるかどうかを判定するコードを作成してください。

const string = 'しんぶんし';

function kaibun(str){
let array = [];
for(let i = str.length - 1 ; i >=0 ; i--){
  array.push(string[i]);
}

const newAtring = array.join('');

let bool;

if(string == newAtring){
  bool = true;

}else {
  bool = false
}

return bool

}

console.log(kaibun(string))


// 問題５
// ある会社の社員の情報をオブジェクトとして配列で保持しています。その配列から、名前が「山田太郎」である社員のオブジェクトを取得するコードを作成してください。ただし、配列の中に同姓同名の社員が複数いる可能性があるものとします。

const array = [
  {name: 'John', age: 27, gender: 'male'},
  {name: 'Jane', age: 32, gender: 'female'},
  {name: 'Bob', age: 20, gender: 'male'},
  {name: 'Emily', age: 24, gender: 'female'},
]

const newArray = array.filter( val=> val.name == '山田太郎' );
console.log(newArray)


// 問題６
// ランダムな整数が10個格納された配列があります。その配列の要素を、降順にソートするコードを作成してください。

const array = [72, 86, 43, 90, 17, 33, 94, 64, 11, 55];

const newArray = array.sort((a,b)=>{
  return a > b ? -1 : 1;
})

console.log(newArray)


// 問題７
// 以下のようなオブジェクトがあります。

// javascript
// Copy code
// const person = {
//     name: "山田太郎",
//     age: 20,
//     hobby: "読書"
// };
// 上記オブジェクトを、JSON形式の文字列に変換するコードを作成してください。

const person = {
  name: "山田太郎",
  age: 20,
  hobby: "読書"
};

const json = JSON.stringify(person);
console.log(json)

// 問題８
// ページ上に複数のボタンがあります。ボタンがクリックされた際に、そのボタンのテキストをコンソールに表示するコードを作成してください。

const button = document.getElementById('myButton');

button.addEventListener('click',(e)=> console.log(e.target.textContent))


// 問題9
// 与えられた文字列に含まれるURLを正規表現を用いて検出するコードを作成してください。

const str = 'この文章は、Googleで検索すると https://www.google.com/ というURLがヒットするかもしれません。';

const urlRegex = /(https?:\/\/[^\s]+)/g;
console.log(str.match(urlRegex));


// 問題１０
// 以下のような配列があります。

// Copy code
// const array = [
//     { name: "山田太郎", age: 20 },
//     { name: "佐藤次郎", age: 30 },
//     { name: "鈴木花子", age: 25 }
// ];
// 上記配列から、年齢が30歳以上の人の名前を配列で取得するコードを作成してください。

const array = [
  { name: "山田太郎", age: 20 },
  { name: "佐藤次郎", age: 30 },
  { name: "鈴木花子", age: 25 }
];
// 
const newArray = array.filter(val=>val.age >= 30 );
console.log(newArray)


// 中級レベル
// 以下のような、JavaScriptのクラス定義があります。

// Copy code
// class Vehicle {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   honk() {
//     return 'Beep beep!';
//   }

//   toString() {
//     return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
//   }
// }
// このクラスを継承して、以下のようなCarクラスを作成してください。

// CarクラスはVehicleクラスを継承します。
// Carクラスは、numWheelsというプロパティを持ちます。このプロパティの初期値は4とします。
// Carクラスは、toStringメソッドをオーバーライドして、親クラスのtoStringメソッドに加えて、CarクラスのプロパティであるnumWheelsを追加して返します。
// また、以下のようにCarクラスを使ってインスタンスを作成し、メソッドやプロパティを呼び出した場合に出力される内容を予想してください。

// const myCar = new Car('Ford', 'Mustang', 2022);
// console.log(myCar.honk());
// console.log(myCar.toString());
// console.log(myCar.numWheels);
// なお、上記のconsole.logの出力が以下のようになることを予想してください。

// Copy code
// Beep beep!
// The vehicle is a Ford Mustang from 2022. It has 4 wheels.
// 4


class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return 'Beep beep!';
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make,model,year,numWheels){
    super(make,model,year)
    this.numWheels = 4;
  }

  toString(){
    return super.toString() + `It has ${this.numWheels} wheels.`
  }


}


const myCar = new Car('Ford', 'Mustang', 2022);
console.log(myCar.honk());
console.log(myCar.toString());
console.log(myCar.numWheels);

// 問題１１
// 以下のような形式のオブジェクトがあるとします。

// const obj = {
//   a: { value: 1 },
//   b: { value: 2 },
//   c: { value: 3 },
// };
// このオブジェクトから、value プロパティの値が 2 のオブジェクトを取り出すコードを書いてください。ただし、オブジェクトのキー名（a、b、c）は事前に分からないものとします。

const obj = {
  a: { value: 1 },
  b: { value: 2 },
  c: { value: 3 },
};

Object.keys(obj).forEach(val=>{
  const {value} = obj[val];
  
  if(value == 2){
    console.log(obj[val])
  }
})


// 問題１２
// 以下のような形式の配列があるとします。

// const arr = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
//   { name: 'Emily', age: 27 },
// ];
// この配列から、age プロパティの値が最大となるオブジェクトを取り出すコードを書いてください。ただし、オブジェクトのインデックス番号は事前に分からないものとします。

const arr = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Emily', age: 27 },
];

const sort = arr.sort((a,b)=>{
  return a.age > b.age ? 1 : -1
})
console.log(sort)


const result = arr.reduce((a,b)=>{
  return Math.max(a,b.age)
},0)

const found = arr.find((a,b)=>{
  return a.age === result;
})

console.log(found)


// 問題１３
// 以下のような数値配列があります。この配列の合計値をfor文を使用して計算し、結果を出力してください。

const numbers = [2, 4, 6, 8,10];

let a = 0;

for(let i of numbers){
  a += i;
}

console.log(a)

// 問題１４
// 下記の配列から重複する要素を取り出す関数を作成してください。

const arr = [1, 2, 3, 4, 5, 2, 4, 6, 7, 7];

function getDuplication(array){
  return array.filter((val,index,ar)=>ar.indexOf(val) !== index);
}

console.log(getDuplication(arr));

// Setを使用したChatGPTの解答
// const arr = [1, 2, 3, 4, 5, 2, 4, 6, 7, 7];

// function getDuplication(array) {
//   return [...new Set(array.filter((val, index, arr) => arr.indexOf(val) !== index))];
// }

// console.log(getDuplication(arr));

// 問題15
// 下記の配列から重複する要素を除外する関数を作成してください。

const arr = [1, 2, 3, 4, 5, 2, 4, 6, 7, 7];

function removeDup(array){
  return Array.from(new Set(array))
}

console.log(removeDup(arr))

// 問題１６
// 以下の配列から、偶数の要素だけを取り出した新しい配列を出力してください。

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(val=> val % 2 === 0)

console.log(even)

// 問題１７
// 以下の配列の要素の中で、最大値と最小値を求めてください。

const numbers = [20, 30, 50, 10, 40, 80, 5];
const max = numbers.reduce((a,b)=>{
  return a > b ? a : b
})
console.log(max)

// ChatGPTの解答
// const numbers = [20, 30, 50, 10, 40, 80, 5];
// const max = numbers.reduce((a,b)=>{
//   return Math.max(a,b)
// })
// console.log(max)

// 問題１８
// 以下の配列をアルファベット順に並べ替えてください。

const arr = ["banana", "apple", "orange", "lemon", "grape"];
const sort = arr.sort((a,b)=>{
  return a.toUpperCase() > b.toUpperCase() ? 1 : -1
})
console.log(sort)

// 問題１９
// 数値の配列が与えられた場合、その配列の要素を降順でソートするプログラムを書いてください。

const numbers = [4, 2, 8, 1, 5];
const sort = numbers.sort((a,b)=>a>b?-1:1);

// 問題２０
// 2つの整数を引数として取り、大きい方の値を返す関数を定義してください。
const a = 7;
const b = 12;

function resultBigger(a,b){
  return a > b ? a : b
}

console.log(resultBigger(a,b))

// 問題２１
// 文字列を引数として取り、その文字列が回文であるかどうかを判定するプログラムを書いてください。
const word = "level";

let newWord = [];

for(let i = word.length -1; i >= 0 ; i--){
  newWord.push(word[i])
}

if(word == newWord.join('')){
  console.log('回文')
}

// 問題２２
// 配列を引数として取り、その配列内の重複した要素を取り除いた新しい配列を返す関数を書いてください。

const array = [1, 2, 2, 3, 4, 4, 5, 5];

function removeDep(array){
  return Array.from(new Set(array));
}

console.log(removeDep(array))


// 問題２３
// 配列の中から特定の値を抽出する

const numbers = [3, 6, 2, 8, 1, 9];
const target = 6;

const result = numbers.filter(a=> a === target);

console.log(result)

// 問題２４
// オブジェクトの中から特定のプロパティを抽出する

const person = {
  name: "John",
  age: 32,
  city: "New York",
  occupation: "Developer"
};
const property = "age";

console.log(person[property]);

// 問題２５
// 配列の要素を逆順に並べ替える

const fruits = ["apple", "banana", "cherry", "durian", "elderberry"];

console.log(fruits.reverse())

// 問題２６
// 文字列の中に含まれる特定の文字を置換する

const sentence = "The quick brown fox jumps over the lazy dog";
const target = "o";
const replacement = "x";

console.log(sentence.replace('o','x'))

// 正解
const sentence = "The quick brown fox jumps over the lazy dog";
const target = /o/g; // 正規表現で'o'をグローバル検索する
const replacement = "x";

console.log(sentence.replace(target, replacement));

// 問題２７
// オブジェクトのプロパティの値を別のプロパティにコピーする

const person = {
  name: "John",
  age: 32,
  city: "New York",
  occupation: "Developer"
};

person.name = person.city;
console.log(person)

// 問題２８
// 配列の要素を特定の値で埋める

const length = 5;
const value = "x";

const array = Array(length).fill(value)
console.log(array)

// 問題２９
// オブジェクトのプロパティを並び替える

const person = {
  name: "John",
  age: 32,
  city: "New York",
  skills: ["JavaScript", "HTML", "CSS", "React", "Node.js"]
};

console.log(person.skills.sort());


// 問題30
// 文字列を単語ごとに配列に分割する

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.split(' '))

// 問題31
// 配列の中から特定の条件を満たす要素だけを抽出する

const numbers = [3, 6, 2, 8, 1, 9];
const condition = (number) => number > 5;

const result = numbers.filter(a => condition(a));


// 問題32
// 与えられた数値配列の中で、最大値を求めるプログラムを作成してください。

const numbers = [23, 5, 67, 12, 90, 3, 17];
console.log(numbers.reduce((a,b)=>{
  return Math.max(a,b)
}))
// 別解
// console.log(Math.max.apply(null,numbers));


// 問題33
// 与えられた文字列が回文であるかどうかを判定するプログラムを作成してください。
const string1 = "racecar", string2 = "hello";

function kaibun(str){
  const result = str.split('').reverse().join('');
  str === result ? console.log('回文です') : console.log('回文ではありません');
}

kaibun(string1)
kaibun(string2)


// 問題34
// 与えられたオブジェクト配列を、指定したプロパティで昇順にソートするプログラムを作成してください。

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
  ];

  people.sort((a,b)=>{
    return a.name > b.name ? -1 : 1
  })

  console.log(people)


// 問題35
// 与えられた文字列の中から指定した文字列を含むものだけを抽出するプログラムを作成してください。

const strings = ["apple", "banana", "cherry", "durian", "elderberry"], target = "er";

const array = strings.filter(a=>　a.includes(target));
console.log(array)

// 問題36
// 与えられたオブジェクトの中から、指定したプロパティを削除するプログラムを作成してください。

const person = {
  name: "John",
  age: 32,
  city: "New York",
  occupation: "Developer"
  };

const property = "occupation";

delete person[property];

console.log(person)


// 問題37
// 与えられた2つの配列の差分を求めるプログラムを作成してください。

const arr1 = [1, 2, 3, 4, 5], arr2 = [2, 4, 6];

const a = arr1.reduce((a,b)=>a+b);
const b = arr2.reduce((a,b)=>a+b);

console.log(a - b)


// 問題38
// 与えられた配列の中から、指定した数値より大きい値だけを抽出するプログラムを作成してください。
const numbers = [23, 5, 67, 12, 90, 3, 17], target = 20

console.log(numbers.filter(a=> a > target));


// 問題39
// 与えられた数値を、指定した桁数まで0で埋めた文字列に変換するプログラムを作成してください。
const number = 42, length = 6
console.log(String(number).padStart(length,0))

// 問題40
// 与えられた配列の中から、指定した条件に一致する要素だけを持つ新しい配列を作成するプログラムを作成してください。

const numbers = [3, 6, 2, 8, 1, 9], condition = (number) => number > 5;

const result = numbers.filter( a => condition(a));
console.log(result)

// 問題41
// 与えられた配列の要素を単語と見立て、全ての単語の先頭を大文字にして、単語を結合した文章を作成するプログラムを作成してください。

const words = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

const newWord = words.map(val => val.charAt(0).toUpperCase() + val.slice(1));

console.log(newWord.join(''))

const str = 'hogehogehoge';
console.log(str.charAt(0).toUpperCase() + str.slice(1))

// 問題42
// 次のデータを降順に並び替えてください。

const numbers = [3, 6, 2, 8, 1, 9]
const result = numbers.sort((a,b)=> b - a);

console.log(result)

// 問題43
// 次のデータに含まれる全ての数値の平均値を求めてください。

const numbers = [82, 75, 92, 67, 85, 86, 88, 79, 91, 72];

const add = numbers.reduce((a,b) => a+b);
console.log( add % numbers.length )

// 問題44
// 次のデータから重複している値を取り除いてください。

const numbers = [3, 6, 9, 3, 6, 5, 9, 6]

console.log(Array.from(new Set(numbers)));

// 問題45
// 次のデータに含まれる全ての文字列を逆順にしてください。

const strings = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log([...strings].reverse());

// 問題46
// 数値の配列から最も小さな数値を取得するプログラムを作成してください。

const numbers = [10, 5, 8, 3, 12, 1];
console.log(numbers.reduce((a,b) => Math.min(a,b)))

// 問題47
// 与えられた文字列から、単語を逆順にして、単語と単語の間に半角スペースを入れた文字列を作成するプログラムを作成してください。

const str = "I love JavaScript";
console.log(str.split(' ').reverse().join(' '))


// 問題４８
// 数値の配列から、平均値を求めるプログラムを作成してください。

const numbers = [3, 6, 9, 1, 2, 5, 7];

const average = numbers.reduce((a,b)=>a+b) / numbers.length
console.log(average)

// 問題４９
// 与えられた二つの配列に含まれる要素を結合し、重複を除いた新しい配列を作成するプログラムを作成してください。

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const array = [...new Set([...arr1,...arr2])]
console.log(array)

// 問題５０
// 与えられたオブジェクトの中で、指定したキーを持つ要素の値の合計を求めるプログラムを作成してください。

const data = [
  {name: "John", age: 28, salary: 3000},
  {name: "Mary", age: 33, salary: 3500},
  {name: "Bob", age: 41, salary: 5000},
  {name: "Tom", age: 22, salary: 2500},
  {name: "Alice", age: 30, salary: 4000},
  ];
  const key = "salary";

 const newArray = data.map(val=> val[key]).reduce((a,b)=>a+b);

 console.log(newArray)




