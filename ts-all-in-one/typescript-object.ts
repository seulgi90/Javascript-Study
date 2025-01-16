/** {} 와 Object */

// {}, object는 모든 타입, 단 null 과 undefined 제외
// object 사용하지 말 것
const x: {} = 'hello';
// const y: object = 'hi';
// const xx: object = 'hi';
const yy: object = { hello: 'world' };
const z: unknown = 'hi';

// unknown = {} | null | undefined : any보단 unknown를 사용하여 추후에 타입 결정
if (z) {
  z;
} else {
  z;
}
