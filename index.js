
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

// const button = document.getElementById('myButton');

// button.addEventListener('click',(e)=> console.log(e.target.textContent))


// 問題9
// 与えられた文字列に含まれるURLを正規表現を用いて検出するコードを作成してください。

const str = 'この文章は、Googleで検索すると https://www.google.com/ というURLがヒットするかもしれません。';

const urlRegex = /(https?:\/\/[^\s]+)/g;
console.log(str.match(urlRegex));


// 問題１０
// 以下のような配列があります。

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

// console.log(a)

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
