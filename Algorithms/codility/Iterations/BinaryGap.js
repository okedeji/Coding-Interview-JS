const getLength = (binaryArray = Array, gap = Array)=>{
    let fOne = binaryArray.indexOf("1"); // get index of the first "1"
    
    if(fOne > -1){ // "1" exists in the array
        let newBArray = binaryArray.slice(fOne + 1), // new binary array that eliminates the first "1". Added one bcos array index starts from zero
            nextOne = newBArray.indexOf("1"); // find the next "1"

        gap.push(nextOne > 0 ? nextOne : 0); // add index to gap array if "1" is not index 0 in gap array
        return getLength(newBArray, gap); // a recursion to loop over the binary array until it eliminates the last "1"

    }

    let longestBinaryGap = Math.max(...gap); //spread the gap array in the Math.max function to get the maximum number
    console.log(longestBinaryGap);
    return longestBinaryGap; // the maximum number
}

const binaryGap = (N = Number, min = Number, max = Number)=>{
    if(Number.isInteger(N) && N >= min && N <= max){
        let binary = N.toString(2), // (N >>> 0).toString(2) if it's a signed integer
            binaryArray = binary.split(""), // split with no seperator
            gap = []; //empty array to track each lenght of gap 

        return getLength(binaryArray, gap);
    }

    console.log(0)
    return 0; //N !integer || N not in range
    
}

binaryGap(66561, 1, 2147483647); 

// ====================================== New Learnt =====================================================
// the >>> Bitwize operation helps convert signed integer to an unsigned 
// integer which will can use toString(2) to then convert to binary
/* 
I learnt the usage of Bitwise XOR operator: 
-- it makes an exclusive comparison between two values. 
-- it converts the value to binary before comparison
-- the result cannot be reversed to the resulting values
-- same values are equal to 0 | 3 ^ 3 = 0
-- diffent value wil be calculated in binary
*/