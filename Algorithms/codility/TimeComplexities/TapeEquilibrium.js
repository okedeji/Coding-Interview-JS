function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sumA = A.reduce((a, b) => a + b), beforeP = 0, difference, temp;

    for(let i = 0; i < A.length - 1; i++){
        beforeP += A[i];
        temp = Math.abs((sumA - beforeP) - beforeP);
        difference = difference === undefined ? temp : Math.min(temp, difference)
    }

    return difference;

}

solution([1, 2, 3, 4, 2])