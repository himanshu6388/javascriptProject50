
const quotes = [
    {
        quote:"It takes courage to grow up and become who you really are.",
        author:" E.E. Cummings"
    },
    {
        quote:"Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
        author:" Beyoncé"
    },
    {
        quote:"Nothing is impossible. The word itself says 'I'm possible!",
        author:" Audrey Hepburn"
    },
    {
        quote:"Keep your face always toward the sunshine, and shadows will fall behind you." ,
        author:" Walt Whitman"
    },
    {
        quote:"Attitude is a little thing that makes a big difference.",
        author:"Winston Churchill"
    },
    {
        quote:"All our dreams can come true, if we have the courage to pursue them.",
        author:"Walt Disney"
    },
    {
        quote:"Don't sit down and wait for the opportunities to come. Get up and make them.",
        author:" Madam C.J. Walker"
    },
    {
        quote:"Champions keep playing until they get it right.",
        author:" Billie Jean King"
    },
    {
        quote:"You are never too old to set another goal or to dream a new dream." ,
        author:" C.S. Lewis"
    }
];
 
function getRandomQuote(){
    const index = Math.floor(Math.random()*quotes.length);
    return quotes[index];
}
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

function displayQuote(){
    const {quote, author} = getRandomQuote();
    quoteElement.textContent = quote;
    authorElement.textContent = author;
}