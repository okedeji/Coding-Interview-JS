https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, ar) {
    let counter = {};

    for (let elem of ar) {
        counter[elem] = counter[elem] ? counter[elem] + 1 : 1;
    }
    let count = 0;

    for (let key in counter) {
        if (counter[key] % 2 === 0) {
            count = count + counter[key] / 2;
        } else if (counter[key] == 2) {
            count = count + 1
        } else if (counter[key] > 2 && counter[key] % 2 != 0) {
            count = count + Math.floor(counter[key] / 2)
        }
    }
    return count;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])