// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function isAnagram(a, b){ // get if its two strings is anagramic pair
    if(a.length !== b.length) return false;

    let hash = {};

    for (let elem of a) hash[elem] = hash[elem] ? hash[elem] + 1 : 1;

    for (let el of b){
        if(hash[el]) hash[el]--;
        else return false; 
    }

    return true;
}

function sherlockAndAnagrams(s) {
    const duplicatesCount = s.split('').filter((v, i) => s.indexOf(v) !== i).length  
    if (!duplicatesCount) return 0; // early return if there is no duplicate letter

    let subStr = [], pairs = 0;

    for(let i = 0; i < s.length; i++){ // get all substrings of input string s in an array
        for(let j = i+1; j <= s.length; j++){
           subStr.push(s.slice(i, j));
        }
    }

    for(let i = 0; i < subStr.length; i++){ //compare each element of substr array with other elements under greater indices
        let currentElement = subStr[i],
            otherElements = subStr.slice(i + 1);

         for(let j = 0; j < otherElements.length; j++){
            if(isAnagram(currentElement, otherElements[j])) pairs++; // increase pair if the comparison is anagramic
         }
    }

    return pairs;
}