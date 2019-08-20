// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function countTriplets(arr, r) { //Brute force. Out of time for 4 test cases
    let hash = {}, count = 0;

    for(let el of arr) {
        if(el in hash) hash[el] += 1
        else hash[el] = 1
    }

    for(let i = 0; i < arr.length; i++){
        let op1 = arr[i] * r;
        for(let j = 0; j < hash[op1]; j++){
            let op2 = op1 * r;
            for(let k = 0; k < hash[op2]; k++){
                count++
            }
        }
    }

    return count;
}

countTriplets([1,3,9,9,27,81], 3)