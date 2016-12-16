// prevent default on form submit
function main() {
	var submittedByWord = [];
	var submittedBySentence = [];
	var uniqueWordList = [];
	
	// put user input into array
	$('form').submit(function(event){
		event.preventDefault();
		submittedByWord = $('#user-text').val().split(' ');
		submittedBySentence = $('#user-text').val().split(/[\.\?\!\"\s]+\s+(?=[A-Z\"])/); //removes punctuation, need to find fix
		getUniqueWords();
		printAnalytics();
	})

	// get each unique word and put into array
	function getUniqueWords(){
		submittedByWord.forEach(function(word){
			if (uniqueWordList.indexOf(word) === -1){
				uniqueWordList.push(word);
			}
		})
	}

	// // get lengths of each word, put into array, and calculate average
	// function getAvgWordLengths(){
	// 	var wordLengths = submittedByWord.map(function(word){
	// 		return word.length;
	// 	})
	// 	var totalWordLengths = wordLengths.reduce(function(length, carry){
	// 		return length + carry;
	// 	})
	// 	return totalWordLengths / submittedByWord.length;
	// }

	// // take sentences and counts the length of each
	// function getAvgSentenceLengths(){
	// 	var sentenceLengths = submittedBySentence.map(function(sentence){
	// 		return sentence.length; 
	// 	})
	// 	var totalSentenceLengths = sentenceLengths.reduce(function(length, carry){
	// 		return length + carry;
	// 	})
	// 	return totalSentenceLengths / submittedBySentence.length;
	// }
	// can simplify above two functions by creating single function to calculate average of array
	function getAverage(submitted){
		var itemLength;
		var totalAllLengths;
		
		itemLength = submitted.map(function(item){
			return item.length;
		})
		totalAllLengths = itemLength.reduce(function(length, carry){
			return length + carry;
		})
		return totalAllLengths / submitted.length;
	}



	// on submit reveal text-report
	function printAnalytics(){
		$('.text-report dd').addClass('js-report-results');
		$('.text-report dt').addClass('js-report-type')

		function addResults(reportType, reportAnswer) {
			$(".js-report-type:contains('" + reportType + "')").next('.js-report-results').append(reportAnswer);
		}

		addResults('Word count', submittedByWord.length);
		addResults('Unique word count', uniqueWordList.length);
		addResults('Average word length', getAverage(submittedByWord).toFixed(2));
		addResults('Average sentence length', getAverage(submittedBySentence).toFixed(2));

		$('.text-report').removeClass('hidden');
	}
}

$(document).ready(main);