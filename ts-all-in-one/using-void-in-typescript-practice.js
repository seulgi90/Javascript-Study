"use strict";
/**  void의 두 가지 사용법 */
// 리턴타입이 void
function a() {
    // 함수에 직접적인 리턴값이 void 인 경우에만 리턴 사용 불가
}
// 함수나 메서드의 반환 유형이 void인 경우 이는 반환 값을 사용할 의도가 없다
// TypeScript는 해당 값이 존재하지 않는 것처럼 처리
// 매개변수가 void
function b(callback) { }
b(() => {
    return '3'; // 리턴값을 가질 수 있다
});
const human = {
    talk() {
        return 'abc';
    }, // 리턴값을 가질 수 있다
};
let target = [];
// forEach([1,2,3], el => target.push(el)); // callback: (el: number) => undefined로 정의했기때문에 error
// 타입 수정 적용 : 매개변수가 void
forEach([1, 2, 3], el => target.push(el));
const aa = {
    talk() {
        return 3;
    },
};
const bb = aa.talk();
// const result = bb;
