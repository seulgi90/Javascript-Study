// 배열

// - 배열에서 요소 찾기  : includes
const target = ['가', '나', '다', '라', '마']

const result = target.includes('다')
const result2 = target.includes('카')

console.log(result) // true
console.log(result2) // false

// -배열에서 요소의 값의 인덱스: indexOf , lastIndexOf(뒤에서 부터 찾음)
const target2 = ['라', '나', '다', '라', '마']

const result3 = target2.indexOf('다')
const result4 = target2.lastIndexOf('라')
const result5 = target2.indexOf('가')

console.log(result3) // 2
console.log(result4) // 3
console.log(result5) // -1 : 값을 찾지 못하면 -1을 반환

// '라'를 모두 제거하세요, indexOf 와 splice를 사용하세요
const arr = ['가', '라', '다', '라', '마', '라']

for (let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf('라') !== -1) {
        arr.splice(i, 1)
    }
}

console.log(arr)
