// function sleep(){
    
// }
// async function main(){
//     console.log("3")

// }

// main();

var promise = new Promise(resolve => {
    setTimeout(()=>{
        //promise 반환값 설정
        resolve(1);
    }, 1000)
})

//promise에서 값을 반환하면 실행
promise.then(value=>{
    console.log(value)
})