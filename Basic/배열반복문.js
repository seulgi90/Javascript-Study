// 배열 반복문

const numbers = [1, 2, 3, 4];

// for
const forResult = [];
for (let i = 0; i < 4; i++) {
    forResult.push(numbers[i] * 2);
}
console.log('forResult= ', forResult) // forResult=  [ 2, 4, 6, 8 ]

// forEach
const forEachResult = [];
numbers.forEach(number => {
    forEachResult.push(number * 2);
});
console.log('forEachResult= ', forEachResult) // forEachResult= [ 2, 4, 6, 8 ]

// map
const mapResult = numbers.map((num, i) => {
    return numbers[i] * 2;
})
console.log('mapResult= ', mapResult) // mapResult=  [ 2, 4, 6, 8 ]

const fillResult = Array(9).fill();
console.log('fillResult= ', fillResult) // fillResult=  [undefined, undefined,undefined, undefined,undefined, undefined,undefined, undefined,undefined]


// reduce
const numbers2 = [1, 2, 3, 4];
console.log('numbers reduce==', numbers2.reduce((a, c) => a + c)) // 10,  a: 누적 값
console.log('numbers reduce==', numbers2.reduce((a, c) => a * c)) // 24
console.log('numbers reduce==', numbers2.reduce((a, c) => (a * c), 2)) // 48 , 2자리 : 초기값 설정