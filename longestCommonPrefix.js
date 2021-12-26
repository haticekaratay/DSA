var longestCommonPrefix = function(strs) {
    //find shortest string in the array
   let prefix = ""
   let shortestString = strs[0]
   for(let i = 1; i<strs.length; i++){
      if(strs[i].length < shortestString){
          shortestString = strs[i]
      }
   }
    // take first or any string in the array and compare all others based on this
   for(let i = 0; i < shortestString.length; i++){
       let char = strs[0][i]
       for(let j = 0; j < strs.length; j++ ){
           if(strs[j][i] !== char){
               return prefix
           }
       }
       prefix += char
   }
    return prefix
  
};