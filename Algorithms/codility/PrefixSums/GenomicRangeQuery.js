// Naive 1 = O(N * M)
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let substr = [], res = [], min = Infinity,
        hash = {A: 1, C: 2, G: 3, T: 4};

    for(let i = 0; i < P.length; i++){
        substr.push(S.slice(P[i], Q[i] + 1))
    }

    for(let i = 0; i < substr.length; i++){
        for(let j = 0; j < substr[i].length; j++){
            min = Math.min(hash[substr[i][j]], min)
        }
        res.push(min);
        min = Infinity;
    }
    console.log(substr)
    return res;
}

// Naive 2 = O(N * M)
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let res = [], i = 0, truty = true, min = Infinity,
        hash = {A: 1, C: 2, G: 3, T: 4};

    while(truty){
        if(P[i] == Q[i] + 1){
            res.push(min)
            i++, min = Infinity;
        }
        else{
            min = Math.min(hash[S[P[i]]], min)
            P[i]++
        }

        if(i == P.length) truty = false;
    }

    return res
}

// Prefix sum ==> O(N + M)
function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    let A = 0, C = 0, G = 0, T = 0,
        count = new Array([0,0,0,0]),
        pointP, pointQ, result = [];
    
    // add to the jagged array (count) and change their inner arrays to their prefix sum
    for (let i = 0; i < S.length; i++ ){
        if( S[i] === "A") A++
        if( S[i] === "C") C++
        if( S[i] === "G") G++
        if( S[i] === "T") T++
       
        count.push( [ A, C, G, T ] );
    }
    
    for (let i = 0; i < P.length; i++ ){
        pointP = count[ P[i] ];
        pointQ = count[ Q[i] + 1 ];
        
        if(pointQ[0] - pointP[0] > 0 ) result.push( 1 );
        else if (pointQ[1] - pointP[1] > 0 ) result.push( 2 );
        else if (pointQ[2] - pointP[2] > 0 ) result.push( 3 );
        else result.push( 4 );
    }
    
    return result;
}


solution("CAGCCTA", [2,5,0], [4,5,6])