/**  void의 두 가지 사용법 */

// 리턴타입이 void
function a(): void {
     // 함수에 직접적인 리턴값이 void 인 경우에만 리턴 사용 불가
}


// 함수나 메서드의 반환 유형이 void인 경우 이는 반환 값을 사용할 의도가 없다
// TypeScript는 해당 값이 존재하지 않는 것처럼 처리
// 매개변수가 void
function b(callback: () => void): void {

}
b(()=> {
    return '3'; // 리턴값을 가질 수 있다
})

// 메서드가 void
interface Human {
    talk: () => void;
}

const human: Human = {
    talk() { return 'abc'; } // 리턴값을 가질 수 있다
}

// 타입선언
// function forEach(arr: number[], callback: (el: number) => undefined): void;
// 위에서 선언한 메서드의 실제 구현부 작성하기 싫다면 앞쪽에 declare
// 타입만 선언하고 싶을 때 declare(구현은 다른 파일에 있어야 함)
declare function forEach(arr: number[], callback: (el: number) => void ): void;

let target: number[] = [];
// forEach([1,2,3], el => target.push(el)); // callback: (el: number) => undefined로 정의했기때문에 error
// 타입 수정 적용 : 매개변수가 void
forEach([1,2,3], el => target.push(el));

interface A {
    talk: () => number;
}

const aa: A = {
    talk() { return 3; }
}

const bb = aa.talk();
const result = bb;