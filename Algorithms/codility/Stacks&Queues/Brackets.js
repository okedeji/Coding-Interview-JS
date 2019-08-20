function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {"}": "{", "]": "[", ")":"("}, stack = [];
    
    for(let i = 0; i < S.length; i++){
        if(stack.length !== 0 && hash[S[i]] === stack[stack.length - 1]){
            stack.pop()
        }
        else stack.push(S[i])
    }
    
    if(stack.length === 0)return 1
    else return 0
}