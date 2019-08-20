// Note: Counting Sort will do better with O(N) instead of O(NlogN) Merge Sort
// I learnt counting sort after solving this problem.

function wordCountEngine(document) { // O(NlogN)
    // your code goes here
    function merge(arr1, arr2){
      let results = [];
      let i = 0;
      let j = 0;
      while(i < arr1.length && j < arr2.length){
          if(arr2[j][1] < arr1[i][1]){
              results.push(arr1[i]);
              i++;
          } else if(arr2[j][1] > arr1[i][1]) {
              results.push(arr2[j])
              j++;
          } else if(arr1[i][1] === arr2[j][1]){
              results.push(arr1[i])
              i++;
          }
      }
      while(i < arr1.length) {
          results.push(arr1[i])
          i++;
      }
      while(j < arr2.length) {
          results.push(arr2[j])
          j++;
      }
      return results;
  }
    
  function mergeSort(arr){
      if(arr.length <= 1) return arr;
      let mid = Math.floor(arr.length/2);
      let left = mergeSort(arr.slice(0,mid));
      let right = mergeSort(arr.slice(mid));
      return merge(left, right);
  }

  let docArr = document.split(" "), hash = {}, res = [];

  for(let el of docArr){
    let elem = el.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ") // Of course, Stack Overflow helped here ;)
    if(elem != ""){
      elem in hash ? hash[elem]++ : hash[elem] = 1
    }
  }
  
  for(key in hash){
    res.push([key, hash[key].toString()])
  }
  
  return mergeSort(res)
}