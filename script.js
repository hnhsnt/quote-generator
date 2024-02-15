const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
    loader.hidden = false; // we don't want it to be hidden;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
    loading();

    setTimeout(() => {
        // Pick a random quote from apiQuotes array
        const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        // Check if author field is blank and replace it with 'unknown'
        if (!quote.author) {
            authorText.textContent = 'unknown';
        } else {
            authorText.textContent = quote.author;
        }

        // Check quote length to determine styling
        if (quote.text.length > 120) {
            quoteText.classList.add('long-quote'); // we'll add this class that's been manipulated in CSS
        } else {
            quoteText.classList.remove('long-quote');
        }

        // Set quote, hide loader
        quoteText.textContent = quote.text;
        complete();
    }, 700);
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();