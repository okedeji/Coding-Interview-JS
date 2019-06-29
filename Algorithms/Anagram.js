/* 
Anagram is a word created with same letters from another word
E.g: "Iceman" and "cinema"
We use frequency counter pattern to solve this. 
We created counter objects and compare those objects
*/

function anagram(a, b){
    //String must be same length
    if(a.length !== b.length) return false 

    //Check if each letter of A is in B
    //Create two counter objects for A and B
    let count1 = {}, count2 = {};

    //Pass each item to the coounters with respects to their frequencies
    for (let elem of a) count1[elem] = count1[elem] ? count1[elem] + 1 : 1;

    for (let elem of b) count2[elem] = count2[elem] ? count2[elem] + 1 : 1;

    
    //Compare the each counters with each other and
    //return false if not equal, true if otherwise
    for (let key in count1){
        if(count1[key] !== count2[key]){
            return false;
        }
    }
    return true
}

anagram("adee", "edae")