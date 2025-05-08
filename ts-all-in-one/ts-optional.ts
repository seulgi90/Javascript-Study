// 옵셔널
function abc(a: number, b?: number) {}

abc(1);
abc(2, 345);

let obj: { a: string; b?: string } = { a: 'hello', b: 'world' };
obj = { a: 'Hi' };
