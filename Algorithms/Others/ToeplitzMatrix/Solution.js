function isToeplitz(arr) { // O(N*M)
    for(let i = 0; i < arr.length -1; i++){
        for(let j = 0; j < arr[i].length -1; j++){
          if(arr[i][j] !== arr[i+1][j+1]) return false; 
        }
    }
    return true;
}