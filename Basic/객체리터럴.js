// 객체 리터럴 : {}를 사용해 만든 객체

// - 배열과의 차이점 :  객체 리터럴은 속성들의 이름과 속성 값으로 구성
const obj = {
  bc: 'hello ',
  '2ca': 'hello2', // '숫자'가 속성 이름의 제일 앞에있거나, '띄어쓰기', '특수문자가' 있을 경우 '' 로 감싸줘야한다
  'c a' : 'hello3',
  'c-a' : 'hello4',
  name: 'date'
}; 

obj.bc; // hello
obj['bc']; // hello
// obj.2ca; // error
obj['2ca']; // 문자열로 감싸준 속성 이름은 대괄호로 써줘야한다

console.log(obj['name']) // date
// console.log(obj[name]) // error : obj.['data'] 와 같음, 변수가 되어 버림
console.log(obj.name) // date

// - 배열과 함수가 객체인 이유: 객체의 성질을 모두 다 사용할 수 있기 때문, 배열과 함수에도 속성들을 추가할 수도 있고 수정 및 제거 가능
function hello() {}
hello.a = 'really?'
const array = []
array.b = 'wow'
console.log(hello.a) // really?
console.log(hello()) // undefined
console.log(array.b) // wow

// 함수
const debug = {
  log: function (value) {
    console.log(value) // Hello, Method
  }
}
debug.log('Hello, Method') // // log는 debug 객체의 메서드, 따로 선업하지 않아도 사용할 수 있음


// 객체 간의 참조 관계
const aa = { name: 'AA'}
const bb = aa
aa.name = 'BB'
console.log(bb.name) // BB

// 객체가 아닌 값을 변수에 저장한 경우에는 참조 관계가 생기지 않는다
let aaa = 'aaa'
let bbb = aaa
aaa = 'bbb'
console.log(aaa) // bbb
console.log(bbb) // aaa