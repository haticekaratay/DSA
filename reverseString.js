var reverseString = function(s) {
    let i = 0
    let j = s.length -1
    while(j>=i){
        swap(s,i,j)
        i++
        j--
    }
};

function swap(s,i,j){
    let temp = ""
    temp = s[i]
    s[i] = s[j]
    s[j] = temp
}