var isValid = function(s) {    
    let Hash = {")": "(", "}": "{", "]": "["},
        stack = [];
    
    for(i = 0; i < s.length; i++){
        if(stack.length !== 0 && Hash[s[i]] === stack[stack.length -1]) stack.pop()
        else stack.push(s[i])
    };
    
    if(stack.length == 0) return true;
    return false;
};

// LeetCode
isValid("[](){}");