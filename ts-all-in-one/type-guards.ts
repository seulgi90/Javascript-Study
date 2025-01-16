/** 타입 가드(타입 좁히기) */

function numOrStr(a: number | string) {
  // 스트링 타입도 고려하여 검사하기 때문에 error
  // a.toFixed(1);
  if (typeof a === 'string') {
    a.split(',');
  } else {
    a.toFixed(1);
  }
}

numOrStr('123');
numOrStr(1);

function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    a.concat(4);
  } else {
    a.toFixed(3);
  }
}

numOrNumArray(123);
numOrNumArray([1, 2, 3]);

// 클래스 자체가 타입이 될 수 있다
class A1 {
  aaa() {}
}
class B1 {
  bbb() {}
}

function aOrb(param: A1 | B1) {
  // 클래스 간에는 'instanceof' 로 구별
  if (param instanceof A1) {
    param.aaa();
  } else {
    param.bbb();
  }
}
// aOrb(A1); // 'typeof A1'형식의 인수는 'A | B' type의 매개변수에 할당 불가 Error
aOrb(new A1());
aOrb(new B1());

type Bn = { type: 'b'; bbb: string };
type Cn = { type: 'c'; ccc: string };
type Dn = { type: 'd'; ddd: string };
type An = Bn | Cn | Dn;
function typeCheck(a: An) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}

function typeCheck1(a: An) {
  if ('bbb' in a) {
    a.bbb;
  } else if ('ccc' in a) {
    a.ccc;
  } else {
    a.ddd;
  }
}

/** 커스텀 타입 가드 */
interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
// 리턴타입에 'is' 사용 : 타입을 구분해주는 커스텀 함수를 직접 만들수 있다
function catOrDog(a: Cat | Dog): a is Dog {
  // 타입 판별 부분
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}
const cat: Cat | Dog = { meow: 3 };
if (catOrDog(cat)) {
  console.log(cat.meow);
}
if ('meow' in cat) {
  console.log(cat.meow);
}

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    console.log(a.bow);
  }
  if ('meow' in a) {
    console.log(a.meow);
  }
}
