// 타입은 소문자로 기입 유의
const a: number = 5;
const b: string = 'A';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123; // 모든 타입 허용, true, string ...등
const g: true = true; // 무조건 true 값만
const h: 5 = 5; // 타입 자리에 고정 된 원시값도 가능

// 매개변수 자리 바로 뒤가 리턴 타입자리, 함수형일 경우 리턴은 콜론 뒤에 사용
function add(x:number, y: number): number { return x + y; }

function add5(x:number, y: number): number; // 타입만 선언 한 뒤
function add5(x, y) {
    return x + y;
}
const result = add5(1,2)

// 함수 표현식의 타입을 변수 선언 부분에 지정, 화살표 함수 일 경우 리턴은 화살표 뒤에 사용
const add2: (x:number, y: number) => number = (x, y) => x + y;
// 타입을 별칭으로 빼서 사용 할 수 있는 예제
// type alias : type으로 타입을 선언하는 방식
type Add3 = (x: number, y: number) => number;
const add3: Add3 = (x, y) => x + y;
// 인터페이스를 통한 타입 지정
interface Add4 {
    (x:number, y:number): number;
}
const add4: Add4 = (x, y) => x + y;

// 객체 타입 지정
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 }

// 배열 타입 지정
let arr0: string[] = []; // 빈배열도 타입 선언해야함에 유의
const arr: string[] = [ '123', '456']
// 제네릭을 활용한 배열 타입 지정
const arr2: Array<string> = [ '123', '456']
const arr3: Array<number> = [ 123, 456]
function rest(...args: string[]) {}

// 튜플(길이가 고정 된 배열), 지정 된 타입 만큼의 길이만 가능
const arr4: [number, number, string] = [ 123, 456, 'hello']
// const arr5: [number, number, string] = [ 123, 456, 'hello', 'wow'] // 에러

// 타입 강제 변환: as unknown
let aa = 123;
aa = 'hello' as unknown as number;

type World = 'world'; // 타입이 'world'
type Greeting = `hello ${World}`;
// Alias for:`hello ${World}`
// Initial type: "hello world"
const w: World = 'world'
const resultW = w;

type WorldnHell = 'world' | 'hell';
type Hello = `Hello ${WorldnHell}`

const enum EDirection {
    Up,
    Down,
    Left,
    Right
}
const a1 = EDirection.Up

