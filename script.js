// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get quotes from API using an asynchronous fetch request within a try-catch statement
// An asynchronous function can run at any time independently and it won't stop the browser from completing the loading of a page
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';

//     try { // allows us to attempt/complete a fetch a request
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) { // we can catch our error information and do something with it
//         // handle the errors here
//     }
// }

// On Load
// getQuotes();
newQuote();