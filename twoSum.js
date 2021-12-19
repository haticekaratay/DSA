//O(nlogn) time complexity and O(1) space complexity solution
function twoNumberSum(array, targetSum) {
	array.sort((a,b)=>a-b)
	let left = 0;
	let right = array.length-1;
	while(left<right){
		let tempSum = array[left] + array[right]
		if(tempSum === targetSum){
			return[array[left],array[right]]
		}else if(tempSum < targetSum){
			left++
		}else if(tempSum > targetSum){
			right--
		}
	}
	return []
}
