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

/** 맵드 타입스 */
type C = 'human' | 'mammal' | 'animal';
type Ca = { [key in C]: string };
const cxx: Ca = { human: '111', animal: '222', mammal: '3333' };
