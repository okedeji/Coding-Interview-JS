// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function countingValleys(n, s) {
    let res = 0, base = Math.floor(n/2);

    for(let i = 0; i < n; i++){
        if(s[i] === "U") base++
        if(s[i] === "D"){
            if(base === Math.floor(n/2)) res++
            base--
        }
    }

    return res;

}

countingValleys(8, "DDUUUUDD")