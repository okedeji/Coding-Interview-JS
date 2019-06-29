const solution = (N) => {
    let NString = N.toString();
    console.log(NString)
    regex = NString.replace (/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    console.log(regex)
}

// solution(1000000)

const merged = (n, ar) => {
    let check = []
    ar.sort((a,b)=> a - b)
    console.log(ar)
    for(let i = 0; i < n; i++){
        if(ar[i] == ar[i+1]){
            check.push(ar[i])
            i = i+2;
            console.log(i)
        }
    }
    console.log(check)
    return check.length
}

merged(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])