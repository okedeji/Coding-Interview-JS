// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=arrays

function minimumSwaps(arr) { // Brute force O(n^2)
    let swap = 0;

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] !== i + 1) {
            let idxI = arr.indexOf(i + 1);
            [arr[i], arr[idxI]] = [arr[idxI], arr[i]]
            swap++
        }
    }

    return swap;
}

function minimumSwaps(arr) { // O(n)
    let swap = 0, hash = {};

    arr.forEach((el, idx) => {
        hash[el] = idx;
    })
    

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] !== i + 1) {
            let t = arr[i];
            arr[i] = i + 1;
            arr[hash[i + 1]] = t
            hash[t] = hash[i+ 1]
            swap++
        }
    }

    return swap;
}

minimumSwaps([2,3,4,1,5])