// Check for screen size
$(function() {
	$(window).resize(function() {
		if (window.innerWidth < 812){
			$('.screen').addClass('hide');
		} else {
			$('.screen').removeClass('hide');
		}
	}).resize();
});


// Copyright snippet
$(document).ready(function() {
	$('.copyright').append('©' + ' ' + new Date().getFullYear() + ' ' + 'Mariota. All rights reserved.');
});


// API: Joke Loading
var lock = false;
var jokes = [];
loadJoke();

function loadJoke(retry) {
    if (!lock || retry) {
        lock = true;
        $('.humour__reload').addClass('animate');
        $.get('https://official-joke-api.appspot.com/random_joke')
        .done(function(joke) {
            if (!jokes.includes(joke.id)) {
                jokes.push(joke.id);
                $('.humour__joke').text(joke.setup + ' ' + joke.punchline);
                $('.humour__tag').text(joke.type);
                $('.splash').addClass('hide');
                $('.humour__reload').removeClass('animate');
                lock = false;
            } else {
                loadJoke(true);
            }
        });
    }
}
