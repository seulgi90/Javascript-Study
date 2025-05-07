class A {
  a: string;
  b: number;

  constructor(a: string, b: number) {
    this.a = a;
    this.b = b;
  }
}

type AA = A;
const a: A = new A('123', 123); // a는 A의 인스턴스
const b: typeof A = A; // typeof A : A 클래스 자체의 타입 (생성자 함수 타입), b는 A 생성자 함수 자체

// 인스턴스
const aa: A = new A('hello', 123);
// aa는 이런 객체:
// {
//   a: 'hello',
//   b: 123
// }

// 생성자 (클래스 자체)
const bb: typeof A = A;
const c = new bb('world', 456);
//

/** 인터페이스 있으면 클래스는 그 인터페이를 따라야한다 */
interface D1 {
  readonly a: string;
  b: string;
}

class E implements D1 {
  private a: string = '123';
  protected b: string = 'world';
  c: string = 'wow';
}

class G extends E {}
// new G().a; // 인스턴스(new로는)에서는 접근 불가
// new G().b; // 인스턴스(new로는)에서는 접근 불가
new G().c;
