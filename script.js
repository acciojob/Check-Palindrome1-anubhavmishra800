// complete the given function
function palindrome(str){

	//1- Converting to lowercase
	str = str.toLowerCase();
	
	//2- Removing space  { .trim() : removes whitespace from the string }
	str = str.trim();

	let i = 0;
	let last = str.length-1;

	//3- Checking
	while(i<last){
		if(str.charAt(i)!==str.charAt(last)){
			return false;
		}
		i++;
		last--;
	}
	return true;
}
module.exports = palindrome
