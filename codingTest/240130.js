// 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요

// function solution(a, b) {
//     var answer = 0;
//     let arr = [];
//     let arrLength = Math.abs(a - b) + 1;

//     if(a === b){
//         arr[0] = a;
//     }else if(a-b<0){
//         arr[0] = a;
//         arr[arrLength-1] = b;
//     }else if(a-b>0){
//         arr[0] = b;
//         arr[arrLength-1] = a;
//     }

//     for(let i = 0; i < arrLength; i++){
//         arr[i] = arr[0]+i;
//         answer += arr[i];
//     }

//     return answer;
// }

// console.log(solution(3,3))



//어떤 정수들이 있습니다. 
//이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
//이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
//실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// function solution(absolutes, signs) {
//     var answer = 0;

//     for(let i = 0; i<absolutes.length; i++){
//         let sign = signs[i] ? 1 : -1;

//         answer += absolutes[i] * sign;
//     }

//     return answer;
// }

// console.log(solution([4,7,12], [true,false,true]))




function solution(num) {
    var answer = 0;
    let cnt = 0;

    while(num !== 1){        
        if(num%2 === 0){
            num /= 2;
        }else if(num%2 === 1){
            num = num*3 + 1;
        }
        answer = ++cnt;

        if(cnt === 500){
            answer = -1;
            break;
        }
    }

    return answer;
}
console.log(solution(16))


//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
//"김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
//seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
// function solution(seoul) {
//     var answer = '';
//     let index;

//     for(let i = 0; i<seoul.length; i++){
//         if(seoul[i]==='Kim'){
//             answer = `김서방은 ${i}에 있다`;
//         }
//     }
//     return answer;
// }

// console.log(solution(["Jane", "Kim"]))