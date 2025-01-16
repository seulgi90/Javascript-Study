"use strict";
// const f: F = { name: 'seulgi', age: 36, married: true }; // 객체 리터럴의 경우 잉여 속성 검사때문에 error
const obj = { name: 'seulgi', age: 36, married: true }; // -> 해결 방법 : 변수로 빼서 넣으면 해결 가능(검사를 안하기 떄문에)
const f = obj;
