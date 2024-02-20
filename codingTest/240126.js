//문자열 내 p와 y의 개수
// function solution(s){
//     var answer = true;
//     //p의 개수, y의 개수 저장 변수
//     let pCnt = 0;
//     let yCnt = 0;

//     //받아온 문자열 펼쳐서 배열에 저장
//     //배열 저장할 변수
//     let stringArr = [];
//     //문자열 펼쳐서 넣기
//     stringArr = s.split('');
//     //반복문 돌면서 
//     stringArr.forEach((element)=>{
//         //p이면 pCnt 1증가
//         if(element === 'p'|| element === 'P'){
//             pCnt++;
//         }else if(element === 'y' || element === 'Y'){
//             yCnt++;
//         }
//     })
//     if(pCnt === yCnt){
//         answer = true;
//     }else{
//         answer = false;
//     }

//     return answer;
// }
// console.log(solution("pPoooyY"))


//제곱근 판단
function solution(n) {
    var answer = 0;
    //n이 양의 정수 x의 제곱 이라면(x가 n의 제곱근이라면)
    //변수 x 선언
    let x = Math.sqrt(n);
 
    //x의 정수 여부 판별
    if(isInteger(x)){
        //x+1 제곱 리턴
        answer = Math.pow(x+1, 2)
    }else{
        //n이 x 제곱근 아니면 -1 리턴
        answer = -1;
    }
    return answer;
}
solution(16)
//내림차순 정렬
// function solution(n) {
//     var answer = 0;
//     //n 펼치기
//     // 숫자를 문자열로 바꾸고 펼치기
//     let nSplitArr = n.toString().split('')
//     //내림차순으로 정렬
//     //sort()함수 이용해서 내림차순
//     let nSortArr = nSplitArr.sort((a,b)=>{
//         return b-a;
//     })
//     //문자로 각각 나눠서 펼쳐진 nSortArr를 합치고 다시 숫자로 바꾸기
//     answer = Number(nSortArr.join(''))

//     return answer;
// }

// //하샤드 수
// function solution(x) {
//     var answer = true;

//     //하샤드 수이려면 x의 자릿수 합으로 x가 나눠져야함
//     //1. x의 자릿수의 합
//     //x를 문자열로 바꾸고 펼쳐서 배열에 넣고 자리수 합 구하기
//     //문자열로 바꾸고 펼쳐서 배열에 넣기
//     let xSplitArr = x.toString().split('');

//     let xSplitArrSum = 0;
//     xSplitArr.forEach((element)=>{
//         //문자를 숫자로 바꾸면서 자리수 합 구하기
//         xSplitArrSum += Number(element);
//     })
//     //2. 자릿수 합으로 x가 나눠지는지 판별
//     if(x % xSplitArrSum === 0){
//         return answer;
//     }else{
//         return false;
//     }

// }
// solution(10)