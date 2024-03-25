// reduce
const numbers2 = [1, 2, 3, 4];
console.log('numbers reduce==', numbers2.reduce((a, c) => {
    return a + c
})) // 10,  a: 누적 값

console.log('numbers reduce==', numbers2.reduce((a, c) => a * c)) // 24 , 리턴 생략 가능

console.log('numbers reduce==', numbers2.reduce((a, c) => (a * c), 2)) // 48 , 2자리 : 초기값 설정

// 배열 -> 객체 리터럴로 변경
const str = ['철수', '영희', '영자', '영호'];
console.log(str.reduce((a, c , i) => { a[i] = c; return a }, {})) // { '0': '철수', '1': '영희', '2': '영자', '3': '영호' }
