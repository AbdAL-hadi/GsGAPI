document.addEventListener("DOMContentLoaded", fetchQuotes);

let quotes = [];

function fetchQuotes() {
    fetch("https://dummyjson.com/quotes")
        .then(response => response.json())
        .then(data => {
            quotes = data.quotes;
            displayQuotes(quotes);
        })
        .catch(error => {
            document.getElementById("quote-list").innerHTML = `<li style="color:red;">Error fetching quotes: ${error.message}</li>`;
        });
}

function displayQuotes(quotes) {
    const quoteList = document.getElementById("quote-list");
    quoteList.innerHTML = quotes.map(quote => `<li>${quote.quote}</li>`).join("");
}

function filterQuotes() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.quote.toLowerCase().includes(searchValue));
    displayQuotes(filteredQuotes);
}