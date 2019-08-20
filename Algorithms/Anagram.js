/* 
Anagram is a word created with same letters from another word
E.g: "Iceman" and "cinema"
We use frequency counter pattern to solve this. 
We created counter hash map/object for string 1 and compare those with string 2 through a loop
*/

function isAnagram(a, b){
    if(a.length !== b.length) return false;

    let hash = {};

    for (let el of a) hash[el] = hash[el] ? hash[el] + 1 : 1;

    for (let el of b){
        if(hash[el]) hash[el]--;
        else return false; 
    }

    return true;
}

anagram("adee", "edae")