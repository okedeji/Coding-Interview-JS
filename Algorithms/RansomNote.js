// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
    let hash = {};

    for(let word in magazine){
        magazine[word] in hash ? hash[magazine[word]]++ : hash[magazine[word]] = 1;  
    }

    for(let word of note){
        if(word in hash){
            if(hash[word] === 0) return "No"
            hash[word]--
        }
        else return "No"
    }
    
    return "Yes";
}

checkMagazine(["two", "times", "three", "is", "not", "four"], ["two", "times", "two", "is", "four"])