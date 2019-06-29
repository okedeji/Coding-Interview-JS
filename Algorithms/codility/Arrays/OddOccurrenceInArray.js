function ooia(A) {

    var  result = 0;
    for (var number of A) result ^= number; //use bitwise XOR to get the number that occured odd number of times

    console.log(result)
    return result
}

ooia([5, 3, 9, 3, 9, 3, 9, 7, 9, 3, 5]) 

// ====================================== New Learnt =====================================================
// the XOR make sure each values that can be paired equals to zero until it remains the only one that has 
// no pair which will be our value that appears odd nunber of times
/* 
Learnt the usage of Bitwise XOR operator: 
-- it makes an exclusive comparison between two values. 
-- it converts the value to binary before comparison
-- the result cannot be reversed to the resulting values
-- same values are equal to 0. i.e  3 ^ 3 = 0
-- diffent value wil be calculated in binary
*/
