# Seive of Eratosthenes

This is a quick fix/fomula for finding prime numbers in a range of 1 to n.

A complete explanation of the concept can be found [here](https://www.smartickmethod.com/blog/math/operations-and-algebraic-thinking/divisibility/prime-numbers-sieve-eratosthenes/) and on this [Wikipedia Page](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

### Below is the Javascript Implementation

```js
function sieveE (max) {
  // Make array of length max and fill with true
  const sieve = new Array(max).fill(true);
  let primes = [];

  // Iterate from 2 until square root of max
  for (let i = 2; i < Math.sqrt(max); i++) {
    // If sieve[index] is true, mark all it's multiples to false
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < max; j += i) sieve[j] = false;
    }
  }  

  // Now we can copy out all the primes/true from the sieve array
  sieve.map((el, idx)=>{
      if(el && idx > 1) primes.push(idx);
  })

  return primes;
}
```