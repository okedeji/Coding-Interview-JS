var isPalindrome = function(x) {
    if(x < 0) return false;
    let xString = x.toString(),
        half = Math.ceil(xString.length / 2),
        result = true;

    for(let i = 0, j = xString.length -1; i < half; i++){
        if(xString[i] !== xString[j]) result = false;
        j--
    }
    return result;
};

// LeetCode
isPalindrome(1221)