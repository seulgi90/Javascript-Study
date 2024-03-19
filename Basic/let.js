// var와 let의 차이

// 변수는 scope 라는 것을 가진다
// var 는 함수 스코프를 가지고
// let은 블록 스코프를 가진다

function b() {
    var a = 1;
}
console.log('a= ', a)

function d() {
    let c = 1;
}
console.log('c= ', c) // ReferenceError: c is not defined : 블록 밖에서 접근 불가

if (true) {
    var a = 1;
}
console.log('if a= ',a) // if a= 1

if (true) {
    let b = 1;
}
console.log('let b= ',b) // Uncaught ReferenceError: b is not definedat
