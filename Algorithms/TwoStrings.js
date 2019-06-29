// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function twoStrings(s1, s2) {
    let hash = {};

    for(let letter of s1) hash[letter] = true;

    for(let letter of s2) if(letter in hash) return "YES";

    return "NO";
}

twoStrings("hi", "world")