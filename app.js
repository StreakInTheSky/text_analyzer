function main() {
	var submittedByWord = [];
	var submittedBySentence = [];
	var uniqueWordList = [];
	
	// put user input into arrays
	$('form').submit(function(event){
		event.preventDefault();
		submittedByWord = $('#user-text').val().split(' '); //needs refinement
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
		addResults('Average word length', getAverage(submittedByWord).toFixed(2) + ' characters');
		addResults('Average sentence length', getAverage(submittedBySentence).toFixed(2) + ' characters');

		$('.text-report').removeClass('hidden');
	}
}

$(document).ready(main);