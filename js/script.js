(function() {

var quoteButton = $('#quote-button'); 
var quoteOutput = $('#quote-output'); 

//convert special HTML characters in quote array
//http://stackoverflow.com/questions/784586/convert-special-characters-to-html-in-javascript
function HtmlEncode(s) {
    return $('<div>').text(s).html();
}

function HtmlDecode(s) {
    return $('<div>').html(s).text();
}

console.log(trumpQuotes); 

function generateTrumpQuote() {
	//use Math.Randon to generate a random number
var randomNumber = Math.floor(Math.random() * trumpQuotes.length); 
 console.log(randomNumber);
 quoteOutput.html('"' + trumpQuotes[randomNumber] + '"'); 

// Taken from: https://dev.twitter.com/web/javascript/loading
 window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) { t._e.push(f); };
  return t;

}(document, "script", "twitter-wjs"));

  // Update tweet button
  // Some quotes have markup so just take the sanitized text from the DOM: 
   
  var twitterText = quoteOutput.text();
  var Params = {
  	text: twitterText, 
  	url: 'file:///Users/timbeckett/Code/Tutorials/FreeCodingCamp/random_quote_machine/index.html'
  }
  $('#twitter-button').attr("href", "https://twitter.com/intent/tweet?" + $.param(Params));
};

function animationEffect() {

	var animationArray = ['animated bounceInDown', 'animated bounceInUp', 'animated zoomInDown', 'animated rotateInUpRight', 'rotate rotateOut', 'animated lightSpeedIn', 'animated fadeInDownBig', 'animated fadeInLeftBig', 'animated fadeInUpBig', 'animated flipInX', 'animated rotateInDownLeft'];
	var randomNumber = Math.floor(Math.random() * animationArray.length); 
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'; 
	$('#quote-box').addClass(animationArray[randomNumber]).one(animationEnd, function() {
		$(this).removeClass(animationArray[randomNumber]); 
		}); 
}; 


quoteButton.on('click', function() {
	HtmlEncode(trumpQuotes); 
    HtmlDecode(trumpQuotes); 
	generateTrumpQuote();
	animationEffect(); 
	}); 
})($); //End of (document).ready