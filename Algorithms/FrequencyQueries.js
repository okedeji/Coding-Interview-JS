// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D%5B%5D%5B%5D=dictionaries-hashmaps

function freqQuery(queries) { //Brute force
    let arr = [], hash = {}, res = [];

    for (let i = 0; i < queries.length; i++) {
        let _0 = queries[i][0],
            _1 = queries[i][1];
        if (_0 === 1) {
            arr.push(_1)
            _1 in hash ? hash[_1]++ : hash[_1] = 1
            continue;
        }
        if (_0 === 2) {
            let idx = arr.indexOf(_1); //RED FLAG
            arr.splice(idx, 1);
            continue;
        }
        if (_0 === 3) {
            let freq = 0
            for (let j = 0; j < arr.length; j++) { //RED FLAG
                if (hash[arr[j]] === _1) {
                    freq = Math.max(1, 0)
                }
            }
            res.push(freq)
            continue;
        }
    }

    return res;
}

function freqQuery(queries) { //Improvement but not yet efficient
    let arr = [], hash = {}, res = [], idxCount = 0;

    for (let i = 0; i < queries.length; i++) {
        let _0 = queries[i][0],
            _1 = queries[i][1];
            
        if (_0 === 1) {
            arr.push(_1)
            if (_1 in hash) {
                hash[_1].count++
                hash[_1].idx.push(idxCount)
                idxCount++
            } else { 
                hash[_1] = {
                    count: 1,
                    idx: [idxCount]
                }
                idxCount++ 
            }
            continue;
        }
        if (_0 === 2) {
            if (_1 in hash) {  //RED FLAG CLEANED HERE
                arr[hash[_1].idx.pop()] = undefined
                hash[_1].count--
            }
            continue;
        }
        if (_0 === 3) {
            let freq = 0
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === undefined) continue;
                if (hash[arr[j]].count === _1) {
                    freq = Math.max(1, 0)
                    break;
                }
            }
            res.push(freq)
            continue;
        }
    }

    return res;
}

// https://codereview.stackexchange.com/questions/202546/frequency-queries-hackerrank
function freqQuery(queries) { // Efficient O(n)
    const frequencies = [];
    const frequencyTracker = [];
    const result = [];

    for (const query of queries) {
        const action = query[0];
        const value = query[1];
        let index;

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? --frequencyTracker[index] : null;
        }

        if (action === 1) {
            typeof frequencies[value] === 'undefined' ? frequencies[value] = 1 : ++frequencies[value];
        }

        if (action === 2 && frequencies[value]) {
            --frequencies[value];
        }

        if (action === 1 || action === 2) {
            index = frequencies[value];
            frequencyTracker[index] ? ++frequencyTracker[index] : frequencyTracker[index] = 1;
        }

        if (action === 3) {
            result.push(frequencyTracker[value] > 0 ? 1 : 0);
        }
    }

    return result;
}