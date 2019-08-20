// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=sorting
// Simple Bubble Sort 
function countSwaps(a) { // O(n^2) worst case
    let count = 0, res;

    for (let i of a) {
        let isSwap = false;
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                count++;
                isSwap = true;
            }
        }
        if (!isSwap) break;
    }

    res = `Array is sorted in ${count} swaps.\nFirst Element: ${a[0]} \nLast Element: ${a.pop()}`;
    
    return res;
}

countSwaps([6,4,1])