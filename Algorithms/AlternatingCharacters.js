// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=strings

function alternatingCharacters(s) {
    let delCount = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) delCount++;
    }

    return delCount;
}