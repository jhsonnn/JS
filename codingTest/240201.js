// function solution(arr, divisor) {
//     var answer = [];

const { indexOf } = require("lodash");

//     arr.forEach(element => {
//         //나누어 떨어지는 경우
//         if(element % divisor === 0)
//         {
//             answer.push(element);
//         }
//     });

//     //answer가 비어있다면 (나누어 떨어지는 수가 없던 경우)
//     if(answer.length === 0){
//         answer.push(-1);
//     }else{
//         //나누어 떨어지는 수가 있는 경우
//         answer.sort((a,b)=>{
//             return a-b;
//         })
//     }
//     return answer;
// }

// console.log(solution([3,2,6], 10))


// function solution(numbers) {
//     var answer = 0;
//     let arr = [0,1,2,3,4,5,6,7,8,9];
//     let index;

//     numbers.forEach((numsElement)=>{
//         //같은 요소가 있는 arr의 인덱스 구하고
//         index = arr.indexOf(numsElement);
        
//         //-1 ; indexOf는 찾는 요소가 없으면 -1반환
//         //찾는 요소가 있다면
//         if(index !== -1){
//             //해당 인덱스의 수를 제거
//             arr.splice(index, 1); //1; index에서 시작해서 1개 요소 삭제
//         } 
//     })

//     arr.forEach((element)=>{
//         answer+=element;
//     })
//     //찾은 숫자 더한 값
//     return answer;
// }






// function solution(phone_number) {
//     var answer = '';

//     for(let i = 0; i< phone_number.length; i++){
//         //4자리 빼두고 앞의 것만
//         if(i < phone_number.length -4){
//             answer += '*';
//         }else{
//             answer += phone_number[i];
//         }
//     }

//     return answer;
// }


function solution(arr) {
    var answer = [];
    let min = 0;

    //가장 작은 값 구하기
    min = Math.min(...arr);
  
    //가장 작은 값 제외한 것들만 다시 배열 저장
    answer = arr.filter((element)=>{
        return element !== min;
    })

    if(answer.length === 0){
        answer.push(-1);
    }

    return answer;
}

solution([4,3,2,1])