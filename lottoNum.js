
function lottoNumbers(){
    
    const lottoNum = []
   
    for(let i = 0; lottoNum.length<6; i++){
        let randomNumber = Math.floor(Math.random()*45 +1)
        lottoNum.push(randomNumber)
    }
    
    return lottoNum

}

const arr=[]
solution(3)
function solution(n){
    for(let i = 1; i<=n; i++){
        arr.push({round: i, numbers: lottoNumbers()})
    }
}
console.log(arr)
