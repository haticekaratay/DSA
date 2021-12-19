//my solution O(n) time O(1) space
function isValidSubsequence(array, sequence) {
	let i = 0
	let j = 0
	while(j<sequence.length && i<array.length){
		if(array[i]===sequence[j]){
			i++
			j++
		}else{
			i++
		}
	}
	return j===sequence.length
}