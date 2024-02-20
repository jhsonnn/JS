

// function solution(s) {
//     var answer = true;

const { forEach } = require("lodash");

//     if(s.length === 4 || s.length === 6){
//         for(const element of s){
//             let num = Number(element);
//             // 숫자로 바꿀 수 있는지 확인하는 함수
//             // 못바꾸면 true, 변환가능하면 false
//             if(isNaN(num)){
//                 answer = false;
//             }
//         }
//     }else{
//         answer =  false;
//     }

//     return  answer;
// }
// //console.log(answer)
// console.log(solution("1234"))


// function solution(arr1, arr2) {
//     var answer = [];
//     for(let i = 0; i < arr1.length; i++){
//         answer.push([]);
//         for(let j = 0; j < arr1[i].length; j++){
//             answer[i][j] = arr1[i][j] + arr2[i][j]
//             //console.log(answer[i][j])
//         }
//     }
//     return answer;
// }

// solution([[1,2],[2,3]],[[3,4],[5,6]])

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
    
//     for(let i = 0; i<b; i++){
//         let star = '';
//         for(let j = 0; j<a ; j++){
//             star += '*';
//         }
//         console.log(star);
//     }
// });


// function solution(n, m) {
//     var answer = [];
//     let nDivisor = [];
//     let mDivisor = [];

//     //n약수
//     for(let i = 1; i<=n; i++){
//         if(n%i === 0){
//             nDivisor.push(i);
//         }
//     }
//     //m약수
//     for(let i = 1; i<=m; i++){
//         if(m%i === 0){
//             mDivisor.push(i);
//         }
//     }

//     //최대공약수 구하기
//     //두 수의 약수를 담은 배열 중에서 공통된 요소 중의 최대값
//     let commonNumArr = [];
//     commonNumArr = nDivisor.filter(element => mDivisor.includes(element))

//     let gcd = 1;
//     gcd = Math.max(...commonNumArr)
//    //console.log(x)
   

//    //최소공배수 구하기
//     let lcm = 1;
//     //최대공약수*(최대공약수로 n,m 나누면 생기는 각각의 몫)
//     //최대공약수로 n,m을 나누면 생기는 몫 먼저 구하기
//     let nQuotient = 1;
//     let mQuotient = 1;

//     nQuotient = n / gcd;
//     mQuotient = m / gcd;

//     lcm = gcd * nQuotient * mQuotient;

    
//     answer = [gcd, lcm];
//     return answer;
// }

// solution(3, 12)


// function solution(arr)
// {
//     var answer = [];
//     let bCheck = false;

//     for(let i = 0; i<arr.length; i++){
//         if(!answer.includes(arr[i])){
//             answer.push(arr[i])
//         }
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 bCheck = true;
//                 break;
//             }
//         }     
//     }

//     return answer;
// }

// console.log(solution([1,1,3,3,0,1,1]))


function solution(arr)
{
    var answer = [];
    let bCheck = false;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i])
        }
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                bCheck = true;
                break;
            }
        }     
    }

    return answer;
}
console.log(solution([1,1,3,3,0,1,1]))


// function solution(arr)
// {
//     var answer = [];
//     let bCheck = false;

//     for(let i = 0; i<arr.length; i++){
//         answer.push(arr[i])
//         for(let j = i+1; j<arr.length; j++){
//             if(answer.includes(arr[i])){
//                 answer.pop();
//             }
//             if(arr[i] !== arr[j]){
//                 answer.push(arr[j]);
//                 break;
//             }
//         }     
//     }

//     return answer;
// }

// console.log(solution([1,1,3,3,0,1,1]))


function solution(n) {
    var answer = 0;
    let num3 = '';

    //3진수로 바꾸기
    for(; n>0; n=Math.floor(n/3)){
        //n=Math.floor(n/3) => 3진수 구할 때 몫을 3으로 나눠주는 과정 반복하니까
        let remainder = n % 3; //한자리씩
        num3 += remainder; //3진수를 거꾸로 넣은 값
    }
    //console.log(num3);

    //3진수를 10진수로 바꾸기
    answer = parseInt(num3, 3); //3: 3진수
    console.log(answer)
    return answer;
}

solution(125)
