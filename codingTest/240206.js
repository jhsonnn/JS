// function solution(a, b) {
//     var answer = 0;
//     let arr = [];



//     for(let i = 0; i<a.length; i++){
//         for(let j = 0; j<b.length; j++){
//             if(i === j){
//                 arr[i] = a[i]*b[j];
//             }
//         }
//     }
//     arr.forEach(element=>{
//         answer += element;
//     })

//     return answer;
// }
// solution([1,2,3,4], [-3,-1,0,2]);


// function solution(s) {
//     var answer = '';

//     if(s.length %2 ===0){
//         answer = s[s.length/2 -1] + s[s.length/2];
//     }else{
//         answer = s[parseInt(s.length/2)];
//     }
//     return answer;
// }

// solution("abcde")

// function solution(n) {
//     var answer = '';
//     let cnt = 0;

//     while(!(cnt === n)){//n = 3
//         if(cnt === 0){
//             answer += '수';
//             ++cnt; //n = 3, cnt = 1, answer = '수'
//         }else{
//             if(answer.charAt(answer.length - 1) === '박'){
//                 answer += '수'; //n = 3, cnt = 2, answer = '수박수'
//             }else{
//                 answer += '박';
//             }
//             ++cnt; //n = 3, cnt = 2, answer = '수박'
//                     // n = 3, cnt = 3, answer = '수박수'
//         }
//     }
//     return answer;
// }

// function solution(left, right) {
//     var answer = 0;

//     for(let i = left; i<=right; i++){
//         let cnt = 0;

//         //만약 left 가 13이면 1~13까지의 수로 나눠주게 되므로 13의 약수가 무엇인지 알게 됨
//         for(let j = 1; j<= i; j++){
//             if(i % j === 0){
//                 //13의 약수 개수
//                 ++cnt;
//             }
//         }
//         //13의 약수가 짝수 개일 때 13을 answer에 더해줌
//         if(cnt % 2 === 0){
//             answer += i;
//         }else{
//             answer -= i;
//         }
//     }

//     return answer;
// }

// solution(13, 17)



// function solution(s) {
//     let answer = [];

//     //문자열 => 문자 배열 => 정렬 -> 문자열로 다시 합치기
//     //문자가 아스키코드로 표현되기 때문에 sort 사용하면 자동 내림 차순 정렬 될 것이라고 생각
//     //JS는 문자열이 유니코드 기반이기 때문에 아스키 코드처럼 생각하면 안됨.
//     //생각해보기
//     //answer = s.split('').sort((a,b)=>b-a).join('')
//     //answer = s.split('').sort((a, b) => a.localeCompare(b)).join('');

//     answer = s.split('').sort().reverse().join('')

//     return answer;

// }

// console.log(solution("Zbcdefg"))


function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    //answer = (구해야하는 것 - money)
    //구해야하는 것(놀이기구 이용금액)
    //price / money / count / result
    //3     / 20    / 4     / 10
    //놀이기구 이용금액
    //= 3 + (3*2) + (3*3) + (3*4)
    //=>다음 항에서 3 증가(등비수열)
    //즉, 놀이기구 이용금액은 등차수열의 합 이용
    //sn = n(2a+(n-1)d)/2

    //놀이기구 이용금액
    sum = (count * (2*price + (count-1)*price))/2;
    //금액이 부족할 경우
    if(sum > money){
        answer = sum - money;
    }else{
        answer = 0;
    }


    return answer;
}