//O(nlogn) time O(n) space
function sortedSquaredArray(array) {
  
    const result = new Array(array.length).fill(0);

      for(let i = 0; i < array.length; i++){
          result[i] = array[i]**2;
      }
       return result.sort((a,b)=>a-b)
  }
  