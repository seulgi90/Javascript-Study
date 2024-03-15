// 함수 선언문
function a(parameter) {
    console.log(parameter)
}

a('argument : 인수')

// 함수 표현식
const b = function() {}

// 화살표 함수
const c = () => {}

// 매개변수로 x,y,z를 받아 곱한 값을 반환하는 multiply 함수를 만들어보세요. 단, 화살표 함수로 만드세요

// const multiply = (x, y, z) => {
//     return x * y * z;
// }
const multiply = (x, y, z) => x * y * z; // 중괄호와 리턴 생략된 축약형

console.log(multiply(2,3,4))