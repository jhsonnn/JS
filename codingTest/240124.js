// function solution(x, n) {
//     var answer = [];
//     for(let i = 0; i < n; i++){
//         answer.push(x + ((i+1)-1)*x);
//     }
//     return answer;
// }


// console.log(solution(2,5))




// function solution(n)
// {
//     var answer = 0;

//     let nStringArray = [];
//     let nArrayToNum = [];

//     //num -> string 변환한 걸 배열에 넣기
//     nStringArray = String(n).split('');

//     //다시 숫자로 변환해서 새로운 배열 생성
//     //map : 배열 각 요소에 대해서 주어진 함수 호출하고 새로운 배열 생성하는 메서드
//     nArrayToNum = nStringArray.map(Number);

//     //n을 number로 변환한 배열 합 구하기
//     nArrayToNum.forEach((element)=>{
//         answer += element;
//     })

//     return answer;
// }

// console.log(solution(123))




//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// function solution(n) {
//     var answer = [];
//     var answerToNumber = [];
    
//     //n을 문자열로 바꾼 다음 배열에 자리수대로 나눠서 저장
//     answer = String(n).split('');
//     //나눠서 저장한 걸 뒤집기
//     answer = answer.reverse(); //[ '5', '4', '3', '2', '1' ]
//     // 숫자로 변환
//     answer = answer.map(Number);
//     /*
//     // 한꺼번에 표현
//     answer = String(n).split('').reverse().map(Number);
//     */
//     return answer;
// }
// solution(12345)


