/* 배열 선언 */
 let arr =[];
 let arr2 = new Array();

/* 배열 추가 삭제 :뒤에서 */
arr.push("🍕");
arr.push("🍔");
arr.push("🍟");
console.log(arr);

arr.pop();
console.log(arr);

/* 배열 추가 삭제 :앞에서 */
arr.unshift("😀");
arr.unshift("😁");
console.log(arr);

arr.shift();
console.log(arr);

/* 배열 순회 */
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}
/* 배열의 length 속성*/
console.log(arr);

//배열 비우기
arr.length = 0;
console.log(arr); 

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;
let s = String(arr);
console.log(arr);
/* 문자열 split하면 배열반환*/
 let sarr = s.split(',');
 console.log(sarr)
/* 배열 정렬 */
let num = [1,3,5,2,4];
 num.sort((a,b) => {return b -a});
 console.log(num);

/* 배열 섞기*/
 num.sort(() => Math.random()-0.5)
 console.log(num); 

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */

let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union =  [... setA, ...setB]
console.log(union);

//교집합
// filter 골라 가져오기 
let intersection = setA.filter((item) =>setB.includes(item)) 
console.log(intersection);

//map 다가져오기 거기서 변형
let setA2 = setA.map((item) => item*2)
console.log(setA2);

//차집합
let difference =  setA.filter((item) =>setB.includes(item)) 
console.log(difference);

//합집합 수정
union = [...difference,... setB]
console.log(union);


