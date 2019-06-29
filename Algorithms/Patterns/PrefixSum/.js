// https://app.codility.com/demo/results/training75GMZR-W6S/
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