https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function repeatedString(s, n) {
    let repeatTimes = Math.floor(n/s.length), remains = s.slice(0, (n % s.length)), 
        countAs = 0, res = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === "a")countAs++;
    }

    res = countAs * repeatTimes;

    for(let i = 0; i < remains.length; i++){
        if(remains[i] === "a")res++;
    }
    
    return res;
}

repeatedString("aba", 10)