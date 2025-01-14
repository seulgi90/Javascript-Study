// 타입을 집합으로 생각하자, 좁은 타입과 넒은 타입
type A = string | number;
type B = string;
type C = string & number;

type D = { name: string };
type E = { age: number };
// type F = { name: string, age: number };
type F = D & F;
// const f: F = { name: 'seulgi', age: 36, married: true }; // 객체 리터럴의 경우 잉여 속성 검사때문에 error
const obj = { name: 'seulgi', age: 36, married: true } // -> 해결 방법 : 변수로 빼서 넣으면 해결 가능(검사를 안하기 떄문에)
const f: F = obj;