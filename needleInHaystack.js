var strStr = function(haystack, needle) {
    //find the length of needle = 3 
    //iterate of haystack as chunks of needle ; i, i+3
    if(needle.length==0){
        return 0
    }

    for(let i = 0; i < haystack.length; i++){
        if(haystack.slice(i,i+needle.length)===needle){
            return i
        }
    }
    return -1
};