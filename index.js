// 객체 리터럴

// - 배열과의 차이점 :  객체 리터럴은 속성들의 이름과 속성 값으로 구성
const obj = {
  bc: 'hello ',
  '2ca': 'hello2', // 숫자가 속성 이름의 제일 앞에있거나, 띄어쓰기가 있을 경우 '' 로 감싸줘야한다 
  'c a' : 'hello3',
  'c-a' : 'hello4',
}; 

obj.bc; // hello
obj['bc']; // hello
// obj.2ca; // error
obj['2ca']; // 문자열로 감싸준 속성 이름은 대괄호로 써줘야한다