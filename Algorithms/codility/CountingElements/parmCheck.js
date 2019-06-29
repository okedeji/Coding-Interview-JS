function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min = 1, hash = {};
        
    for(let i of A) hash[i] = true;

    for(let i of A){
        if(min in hash) min++
        else return 0;
    }
    return 1;
}

solution([1, 2, 3])