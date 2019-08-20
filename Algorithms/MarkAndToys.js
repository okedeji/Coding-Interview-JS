// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&h_r=next-challenge&h_v=zen&isFullScreen=true&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D=sorting

function maximumToys(prices, k) {
    let count = 0, total = 0;

    prices.sort((a, b) => a - b) // O(nlogn)

    for (let i of prices) {
        if (total > k) break;
        total += i
        count++
    }

    return count - 1;
}

maximumToys([1,12,5,111,200,1000,10], 50)