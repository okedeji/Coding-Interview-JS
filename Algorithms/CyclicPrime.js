function sievee(N){
    let sieve = new Array(N).fill(true),
        primes = [];
  
    for(let i = 2; i < Math.sqrt(N); i++){
      if(sieve[i]){
        for(let j = Math.pow(i, 2); j < N; j += i) sieve[j] = false;
      }
    }
  
    sieve.map((el, idx) => {
      if(idx > 1 && el) primes.push(idx);
    })
  
    return primes;
}
  
function Cyclics (N) {
    let arrN = N.toString().split(""), res = [];

    for(let i = 0; i < arrN.length - 1; i++){
        let first = arrN.slice(0, 1), last = arrN.slice(1);
        arrN = last.concat(...first)
        res.push(parseInt(arrN.join("")))
    }

    return res
}
  
function isPrime (N){
    for(let i = 2; i < Math.sqrt(N); i++){
        if(N % i === 0) return false;
    }
    return N > 1;
}
  
function CyclicPrimes(N){
    let allPrimes = sievee(N), res = 0;
  
    for(let i = 0; i < allPrimes.length; i++){
        let prime = allPrimes[i];
    
        if(prime < 12) res++;
        else{
            let allCyclics = Cyclics(prime), tempCount = 0;
    
            for(let j = 0; j < allCyclics.length; j++){
                if(isPrime(allCyclics[j])) tempCount++;
                if(tempCount === allCyclics.length) res++, tempCount == 0;
            }
        }
    }
    return res;
}
  
function test (){
    try {
        let cases = [
            [1, 0],
            [10,4],
            [100, 13],
            [1000, 25],
            [100000, 43],
            [1000000, 55],
        ]
    
        for(let each of cases){
            console.log(`Input = ${each[0]} || Expecting = ${each[1]}`)
            console.log(`Output = ${CyclicPrimes(each[0])}`)
        }
    }
    catch(error) {
        console.error(error);
    }
}
  
test()