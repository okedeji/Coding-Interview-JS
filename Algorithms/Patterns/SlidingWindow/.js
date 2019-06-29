// https://leetcode.com/problems/minimum-window-substring/description/
let minWindow = (s, t) => {   
    let left = 0, hash = {}, missingChar = t.length, min = [0, s.length]; 
        
    for(let i = 0; i < t.length; i++) hash[t[i]] = 0;

    for(let right = 0; right < s.length; right++){
        if(s[right] in hash){ 
            if(hash[s[right]] === 0) missingChar -= 1;

            hash[s[right]] += 1;
        }

        while(missingChar === 0){
            if((right - left) < (min[1] - min[0])){
                min[0] = left;
                min[1] = right;
            }

            if(s[left] in hash){
                hash[s[left]] -= 1;

                if(hash[s[left]] === 0) missingChar += 1;
            }


            left += 1;
        }
    }

    return s.slice(min[0], min[1] + 1);
};

minWindow("ADOBECODEBANC", "ABC")

// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
let findAnagrams = (s, p) => {
    let hash = {}, left = 0, result = [];
    if(p.length > s.length) return result;

    for (let i = 0; i < p.length; i++) hash[p[i]] = 1;

    let missingChar = Object.keys(hash).length;

    for (let right = 0; right < s.length;) {
        if (s[right] in hash) {
            hash[s[right]] -= 1;
            if (hash[s[right]] === 0) missingChar--;
        }
        
        right++;

        while (missingChar === 0) {
            if (s[left] in hash) {
                hash[s[left]] += 1;
                if (hash[s[left]] > 0) missingChar++;
            }

            if ((right - left) === p.length) result.push(left);
            
            left++;
        }

    }

    return result;
};

findAnagrams("cbaebabacd", "abc")

// https://leetcode.com/problems/substring-with-concatenation-of-all-words/
let findSubstring = function(s, words) {
    if(s == "" || words.length === 0) return [];

    const wordLen = words[0].length;

    let left = 0, hash = {}, result = [], word2CheckL, word2CheckR;

    for(let i = 0; i < words.length; i++){
        words[i] in hash ? hash[words[i]] += 1 : hash[words[i]] = 1;   
    }

    let missingWord = Object.keys(hash).length;

    for (let i = 0; i < wordLen; i++){
        left = i;
        for(let right = i; right < s.length;){
            word2CheckR = s.slice(right, (right + wordLen));

            // Expand the window
            if(word2CheckR in hash){
               hash[word2CheckR] -= 1;
               if(hash[word2CheckR] === 0) missingWord--;
            }

            right += wordLen;

            // Shrink the window
            while(missingWord === 0){
                word2CheckL = s.slice(left, (left + wordLen));
                if(word2CheckL in hash){
                    hash[word2CheckL] += 1;
                    if(hash[word2CheckL] > 0) missingWord++; 
                }
                if((right - left) === (words.length * wordLen)) result.push(left)  

                left += wordLen;
            }
        }  
    }
    console.log(sample)
    return result;
    
};

findSubstring("aaaaaaaa", ["aa","aa","aa"])

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
let lengthOfLongestSubstring = function(s) {
    
    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')
    
    for (i=0; i < s.length; i++) {
        let current = map[arr[i]]
        if (current!=null && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        
        map[arr[i]] = i
    }
    
    return maxLen
    
    
};

lengthOfLongestSubstring("abcabcbbyz")

// https://leetcode.com/problems/permutation-in-string/
var checkInclusion = function(s1, s2) {
    if(s1 == "" || s2 == "") return false;
    let left = 0, hash = {}, res, permlen = s1.length;

    for(let i = 0; i < s1.length; i++){
       hash[s1[i]] = true
    }

    let missingChar = Object.keys(hash).length, temp = missingChar;

    for(let right = 0; right < s2.length; right++){
        if(s2[right] in hash){
            missingChar--
            if(temp - missingChar === 1) left = right;  
        }

        if(missingChar === 0){
            res = right - left === permlen - 1 ? true : false;
            missingChar = temp;
        }
        if(res === true) return res;
    }

    return res
};

checkInclusion("ab", "gtsbahsdha")