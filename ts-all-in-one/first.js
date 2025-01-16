"use strict";
// 타입은 소문자로 기입 유의
const a = 5;
const b = 'A';
const c = true;
const d = undefined;
const e = null;
const f = 123; // 모든 타입 허용, true, string ...등
const g = true; // 무조건 true 값만
const h = 5; // 타입 자리에 고정 된 원시값도 가능
// 매개변수 자리 바로 뒤가 리턴 타입자리, 함수형일 경우 리턴은 콜론 뒤에 사용
function add(x, y) { return x + y; }
function add5(x, y) {
    return x + y;
}
const result = add5(1, 2);
// 함수 표현식의 타입을 변수 선언 부분에 지정, 화살표 함수 일 경우 리턴은 화살표 뒤에 사용
const add2 = (x, y) => x + y;
const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;
// 객체 타입 지정
const obj = { lat: 37.5, lon: 127.5 };
// 배열 타입 지정
let arr0 = []; // 빈배열도 타입 선언해야함에 유의
const arr = ['123', '456'];
// 제네릭을 활용한 배열 타입 지정
const arr2 = ['123', '456'];
const arr3 = [123, 456];
function rest(...args) { }
// 튜플(길이가 고정 된 배열), 지정 된 타입 만큼의 길이만 가능
const arr4 = [123, 456, 'hello'];
// const arr5: [number, number, string] = [ 123, 456, 'hello', 'wow'] // 에러
// 타입 강제 변환: as unknown
let aa = 123;
aa = 'hello';
// Alias for:`hello ${World}`
// Initial type: "hello world"
const w = 'world';
const resultW = w;
const a1 = 0 /* EDirection.Up */;
const a2 = 1 /* EDirection.Down */;
function walk(dir) { }
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
function run(dir) { }
walk(2 /* EDirection.Left */);
run(ODirection.Up);
// const and: A = { hello: 'world'} // 에러 -> 모든 속성이 다 있어야한다
const and = { hello: 'world', seulgi: 'jang' };
const aaa = { breath: true, breed: true, think: true };
const bbb = { breath: true, breed: true, think: true };
const m = {
    talk() { },
    eat() { },
    shit() { }
};
