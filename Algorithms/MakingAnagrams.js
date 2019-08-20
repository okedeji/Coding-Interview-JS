// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=strings

function makeAnagram(a, b) {
    let aHash = {}, delCount = 0;
    for (let el of a) {
        el in aHash ? aHash[el]++ : aHash[el] = 1;
    }

    for (let el of b) {
        aHash[el] ? aHash[el]-- : delCount++;
    }

    for (let el of Object.keys(aHash)) {
        if (aHash[el]) delCount += aHash[el];
    }

    return delCount;
}

makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")