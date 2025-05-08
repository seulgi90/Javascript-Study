// 제네릭
function add<T extends number | string>(x: T, y: T): T {
  return x + y;
}

add(1, 2); // 3
add('1', '2'); // '12'

add('1', 2); //  타입 에러, T가 한 가지 타입으로 확정돼야 하는데, string 와 number 충돌

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any,
  ): void;
}

[1, 2, 3].forEach(item => {
  console.log(item); // 1, 2, 3
});

['1', '2', '3'].forEach(item => {
  console.log(item); // '1', '2', '3'
});

[true, true, false].forEach(item => {
  console.log(item); // '1', '2', '3'
});

[1, '2', false].forEach(item => {
  console.log(item); // '1', '2', '3'
});

const a: Array<number> = [3, 4, 5];
a.forEach(v => {
  console.log(v);
});

const b: Array<number> = [3, 4, 5];
b.forEach(v => {
  console.log(v);
});

// 직접 만들어보기
interface Arr<T> {
  map<U>(callback: (value: T) => U): U[];
  filter<S extends T>(callback: (value: T) => value is S): S[];
}
// map
const c: Arr<number> = [1, 2, 3];
const d = c.map(v => v + 1); // [2,3,4]
const e = c.map(v => v.toString()); // ['1','2','3']
const f = c.map(v => v % 2 === 0);
// filter
const g = c.filter((v): v is number => v % 2 === 0);
const c1: Arr<number | string> = ['1', 2, 3, '4'];
const h = c1.filter((v): v is string => typeof v === 'string');
