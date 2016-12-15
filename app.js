// prevent default on form submit
function main() {
	var submittedText;
	var uniqueWordList = [];

	// put user input into array
	$('form').submit(function(event){
		event.preventDefault();
		submittedText = $('#user-text').val().split(' ');
	})

	// get each unique word and put into array
	function getUniqueWords(){
		submittedText.forEach(function(word){
			if (uniqueWordList.indexOf(word) === -1) {
				uniqueWordList.push(word);
			}
		})
	}

	// get length of each word and put into array

	// on submit reveal text-report
}
	


$(document).ready(main);