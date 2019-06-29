var reverse = function(x) {
    let reversed = 0;

    if(x > 0) reversed = parseInt(x.toString().split("").reverse().join(""))
    else reversed = -parseInt(x.toString().split("").reverse().join(""))
    
    if( x > -(2**31) && reversed < ((2**31) - 1)) return reversed
    
    return 0
}

// LeetCode
reverse(123)