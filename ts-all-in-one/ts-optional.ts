// 옵셔널
function abc(a: number, b?: number) {}

abc(1);
abc(2, 345);

let obj: { a: string; b?: string } = { a: 'hello', b: 'world' };
obj = { a: 'Hi' };

// 제네릭
function add<T extends number | string>(x: T, y: T): T {
  return x + y;
}

add(1, 2); // 3
add('1', '2'); // '12'

add('1', 2); //  타입 에러, T가 한 가지 타입으로 확정돼야 하는데, string 와 number 충돌
