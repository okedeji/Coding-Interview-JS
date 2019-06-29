var romanToInt = function(s) {
    let nums = { 'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL':40, 'L': 50, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000 },
        result = 0;
    
    for(let i = 0; i < s.length;){
        if(nums[s[i]+s[i+1]]){
           result += nums[s[i]+s[i+1]];
           i += 2;
        } 
        else if(nums[s[i]]){
           result += nums[s[i]] 
           i++
        }
    }
    return result;
};

// LeetCode
romanToInt("XIV")