/** readonly */

// readonly : 속성 변경 불가
interface O {
  readonly a: string;
  b: string;
}

const x: O = {
  a: 'hello',
  b: 'world',
};
// 속성 변경 불가 예제
// x.a = '123';

/** 인덱스드 시그니처 */
type B = { a: string; b: string; c: string; d: string };

type Ba = { [key: string]: string };
const bx: Ba = { a: 'hello', b: 'world' };

type Bb = { [key: string]: number };
const bxx: Bb = { a: 123, b: 456, c: 789 };

/** 맵드 타입 */
type C = 'human' | 'mammal' | 'animal'; // 유니온 타입, 문자열 리터럴 타입(나중에 객체의 키)
type Ca = { [key in C]: string };
const cxx: Ca = { human: '111', animal: '222', mammal: '3333' };
