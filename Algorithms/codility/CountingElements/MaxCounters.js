function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = new Array(N).fill(0), lastMax = 0, tempMax = 0;

    for(let i = 0; i < A.length; i++){
        if(A[i] <= N){
            let max = Math.max(lastMax, arr[A[i] - 1]);
            arr[A[i] - 1] = max + 1;
            tempMax = Math.max(arr[A[i] - 1], tempMax);
        }else if(A[i] > N) lastMax = tempMax;
    }
    
    for(let i = 0; i < arr.length; i++) arr[i] = Math.max(arr[i], lastMax);
    
    return arr;
}

solution(5, [3,4,4,6,1,4,4])