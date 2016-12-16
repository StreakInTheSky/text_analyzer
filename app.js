// prevent default on form submit
function main() {
	var submittedByWord;
	var submittedBySentence;
	var uniqueWordList = [];
	
	// put user input into array
	$('form').submit(function(event){
		event.preventDefault();
		submittedByWord = $('#user-text').val().split(' ');
		submittedBySentence = $('#user-text').val().split(/[\.\?\!\"]+\s+(?=[A-Z\"])/);
		getUniqueWords();
		getAvgWordLengths();
	})

	// get each unique word and put into array
	function getUniqueWords(){
		submittedByWord.forEach(function(word){
			if (uniqueWordList.indexOf(word) === -1){
				uniqueWordList.push(word);
			}
		})
	}
	// get lengths of each word, put into array, and calculate average
	function getAvgWordLengths(){
		var wordLengths = submittedByWord.map(function(word){
			return word.length;
		})
		var totalWordLengths = wordLengths.reduce(function(length, carry){
			return length + carry;
		})
		return totalWordLengths / submittedByWord.length;
	}
	// put input into array of sentences

	
	// on submit reveal text-report
}
	


$(document).ready(main);