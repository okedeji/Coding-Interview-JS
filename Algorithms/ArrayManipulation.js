// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function arrayManipulation(n, queries) { // Brute force 0(n * m)
    let arr = new Array(n).fill(0);

    for (let i = 0; i < queries.length; i++){
        for (let j = queries[i][0] - 1; j < queries[i][1]; j++){
            arr[j] += queries[i][2]
        }
    }
    return Math.max(...arr)
}

function arrayManipulation(n, queries) { // Improvement 0(n * m)
    let allQueries = [], res = 0;

    for (let i = 0; i < queries.length; i++) {
        allQueries = allQueries.concat(queries[i].slice(0, 2))
    }

    let maxIdx = Math.max(...allQueries);

    for (let i = 1; i <= maxIdx; i++){
        let temp = 0;
        for (let j = 0; j < queries.length; j++){
            if (i >= queries[j][0] && i <= queries[j][1]) {
                temp += queries[j][2]
            }
        }
        res = Math.max(temp, res)
    }
    return res;
}

function arrayManipulation(n, queries){ //Best 0(n + m)
    let diffArr = new Array(n).fill(0), max = 0;

    for(let i = 0; i < queries.length; i++){ // create a difference Array
        diffArr[queries[i][0] -1] += queries[i][2];
        diffArr[queries[i][1]] += -queries[i][2];
    }

    for (let i = 1; i < diffArr.length; i++){ // Convert the difference Array to Prefix Sum Array so that each items can be evenly distributed across specified indices
        diffArr[i] += diffArr[i - 1]
    }
    
    // return Math.max(...diffArr) spread won't work for large array because of it's itterable nature

    for (let i = 0; i < diffArr.length - 1; i++) { // Get the max item from the prefix sum
        max = Math.max(max, diffArr[i]);
    }

    return max;
}

arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]])