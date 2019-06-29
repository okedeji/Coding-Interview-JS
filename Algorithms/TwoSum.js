var twoSumLong = function(nums, target) { 
/* 
    Long version with two pointer pattern
*/
    let pointA = 0, pointZ = nums.length -1, arr = [...nums];
    nums.sort((a, b) => a - b)
    
    for(let i = 0; i < nums.length; i++){
      if(nums[pointA] + nums[pointZ] == target){
          break; 
      } 
      else if(nums[pointA] + nums[pointZ] > target) pointZ--
      else if(nums[pointA] + nums[pointZ] < target) pointA++
    }

    if(nums[pointA] == nums[pointZ]){
        pointA = arr.indexOf(nums[pointA]);
        arr.splice(pointA, 1)
        pointZ = arr.indexOf(nums[pointZ]) + 1;

        if(nums[1] == arr[0]) return [pointA, pointZ]
        else return [pointZ, pointA]    
    }else{
        pointA = arr.indexOf(nums[pointA]);
        pointZ = arr.indexOf(nums[pointZ]);

        if(nums[0] == arr[0]) return [pointA, pointZ]
        else return [pointZ, pointA]   
    }
};

var twoSumShort = function(nums, target) {
/* 
    Shorter version with hash Table
*/
    let Hash = {};
    
    for(let i = 0; i < nums.length; i++){
        Hash[nums[i]] = i;
    }

    for(let j = 0; j < nums.length; j++){
        let complement = target - nums[j]
        if(Hash[complement] && j !== Hash[complement]) return [j, Hash[complement]]
    }
}

// LeetCode

twoSumLong([2,7,11,15], 9);
twoSumShort([2,7,11,15], 9);