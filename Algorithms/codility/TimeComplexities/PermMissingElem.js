solution([2,3,1,5,6]) 

function solution(A) {
    if (A.length === 0) return 1
    
    let actualSum = A.reduce((total, elem)=> total + elem),// array.reduce will reduce all element in an array to their total sum
        requiredSize = A.length + 1, // the length plus the missing item
        requiredSum = (requiredSize) * (requiredSize + 1) / 2; //Gauss Law = (n * (n + 1))/2
    
    console.log(requiredSum - actualSum)
    return requiredSum - actualSum;

    A.reduce()
}

// ============================ Learnt ====================================

/* 
The Gauss Formula (helps get the perfect sum of consecutive numbers) 

==> S = n[2a+(n-1)d]/2 if starts with any number or (n * (n + 1))/2 if starts with 1

where   S = perfect sum
        n = number of terms to be summed
        a = first term
        d = difference between terms
*/