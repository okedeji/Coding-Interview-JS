# Is Prime
Checks if a given number is prime number 

> Simply checking if the input integer can be fully divided (without a remainder) by all integers greater than 1 and  lower than it's square root. If it can, then it's not a prime, else it is a prime number
```js
const isPrime = num => {
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) return false; 
    return num > 1;
}
```