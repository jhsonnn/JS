const { max } = require("lodash");

// function solution(sizes) {
//     var answer = 0;
    
//     //각 요소들(배열)을 돌면서 해당 요소 안의 요소들 정렬
//     // 요소 중 큰 수는 0번 인덱스, 작은 수는 1번 인덱스에 저장
//     sizes.forEach(arrElement => {
//         let maxElement = Math.max(...arrElement);
//         let minElement = Math.min(...arrElement);
//         arrElement[0] = maxElement;
//         arrElement[1] = minElement;
//     });

//     let width = Math.max(...sizes.map(arrElement => arrElement[0]));
//     let height = Math.max(...sizes.map(arrElement => arrElement[1]));

//     answer = width * height;
//     return answer;
// }

// function solution(s, n) {
//     var answer = '';
//     let arr = [];
//     let queue = [];
//     queue.front = 0;
//     queue.rear = 0;

//     //문자열 쪼개기
//     if(s){
//         arr = s.split('');
//         queue = arr.slice();
//     }

//     //console.log(arr)
//     console.log(queue)
    
//     return answer;
// }

// solution("AB", 1)

function solution(s) {
    var answer = 0;
    let sResult = '';
    let str = '';

    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])){
            sResult += s[i];
        }else{
            str += s[i];
            checkIsStr();
        }
    }

    function checkIsStr(){
        switch (str) {
            case 'zero':
                sResult += 0;
                str = '';
                break;
            case 'one':
                sResult += 1;
                str = '';
                break;
            case 'two':
                sResult += 2;
                str = '';
                break;
            case 'three':
                sResult += 3;
                str = '';
                break;
            case 'four':
                sResult += 4;
                str = '';
                break;
            case 'five':
                sResult += 5;
                str = '';
                break;
            case 'six':
                sResult += 6;
                str = '';
                break;
            case 'seven':
                sResult += 7;
                str = '';
                break;
            case 'eight':
                sResult += 8;
                str = '';
                break;
            case 'nine':
                sResult += 9;
                str = '';
                break;
            default:
                break;
        } 
    }

    // 문자열인 answer을 숫자로 바꾸기
    answer = parseInt(sResult);
    return answer;
}

console.log(solution("one4seveneight"))