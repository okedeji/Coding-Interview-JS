function solution(A, K) {

    if(A.length == K || K == 0){
        return A
    }

    for (let i = 0; i < K; i++) {
        let lastIndex = A[A.length - 1];
        A.unshift(lastIndex);
        A.pop()
    }
    
    console.log(A);
    return A;
}

solution([7,9,3,6], 3)