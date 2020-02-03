console.log("heeey")


var quote_area = document.getElementById("quote");
var author_area = document.getElementById('author')

function display_quote() {
	let random = Math.floor(Math.random() * quotes.length);

    quote_area.textContent = quotes[random].quote;
    author_area.textContent = quotes[random].author;
}


const quotes = [
    {
      quote:
        "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
      author: "Mark Twain"
    },
    {
      quote:
        "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
      author: "Madeleine L'Engle"
    },
    {
      quote:
        "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
      author: "Stephen King"
    },
    {
      quote:
        "One day I will find the right words, and they will be simple.",
      author: "Jack Kerouac, The Dharma Bums"
    },
	{
      quote:
        "Either write something worth reading or do something worth writing.",
      author: "Benjamin Franklin"
    },
    {
      quote:
        "I kept always two books in my pocket, one to read, one to write in.",
      author: "Robert Louis Stevenson"
    },
    {
      quote:
        "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote:
        "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      quote:
        "Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.",
      author: "Albert Camus"
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote:
        "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      quote:
        "What the mind of man can conceive and believe, the mind of man can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      quote:
        "The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.",
      author: "Mark Twain"
    },
    {
      quote:
        "Impossible is a word to be found only in the dictionary of fools.",
      author: "Napoleon Bonaparte"
    },
    {
      quote:
        "The only way of finding the limits of the possible is by going beyond them into the impossible.",
      author: "Arthur C. Clarke"
    },
    {
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines, Sail away from the safe harbor, Catch the trade winds in your sails. Explore. Dream. Discover.",
      author: "Mark Twain"
    },
    {
      quote:
        "It is hard to fail but it is worse never to have tried to succeed.",
      author: "Theodore Roosevelt"
    },
    {
      quote:
        "Be thankful for what you have; you’ll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.",
      author: "Oprah Winfrey"
    },
    {
      quote:
        "Simplicity is the key to brilliance.",
      author: "Bruce Lee"
    },
    {
      quote:
        "There is no end. There is no beginning. There is only the infinite passion of life.",
      author: "Federico Fellini"
    },
    {
      quote:
        "For every minute you are angry you lose sixty seconds of happiness.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote:
        "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
      author: "Helen Keller"
    },
    {
      quote:
        "People are just as happy as they make up their minds to be.",
      author: "Abraham Lincoln"
    },
    {
      quote:
        "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.",
      author: "J.K. Rowling"
    },
    {
      quote:
        "Not all of us can do great things. But we can do small things with great love.",
      author: "Mother Teresa"
    }
  ];


// “If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.”
// – A.A. Milne

// Famous Quotes About Life

// Life is like riding a bicycle. To keep your balance, you must keep moving.”
// – Albert Einstein

// In three words I can sum up everything I’ve learned about life: It Goes On.”
// – Robert Frost


// You only live once, but if you do it right, once is enough.”
// – Mae West

// Today you are You, that is truer than true. There is no one alive who is Youer than You.”
// – Dr. Seuss, Happy Birthday to You!

// To live is the rarest thing in the world. Most people exist, that is all.”
// – Oscar Wilde

// You’ve gotta dance like there’s nobody watching, Love like you’ll never be hurt, Sing like there’s nobody listening, And live like it’s heaven on earth.”
// – William W. Purkey

// There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
// – Albert Einstein

// Good friends, good books, and a sleepy conscience: this is the ideal life.”
// – Mark Twain

// Life is what happens to us while we are making other plans.”
// – Allen Saunders

// Sometimes the questions are complicated and the answers are simple.”
// – Dr. Seuss

// Don’t cry because it’s over, smile because it happened.”
// – Dr. Seuss

// Life isn’t about finding yourself. Life is about creating yourself.”
// – George Bernard Shaw

// Famous Quotes About Success

// Success is not final, failure is not fatal: it is the courage to continue that counts.
// – Winston S. Churchill

// I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.
// – Herbert Bayard Swope


// We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.
// – Maya Angelou

// Do one thing every day that scares you.
// – Eleanor Roosevelt

// Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.
// – Thomas A. Edison

// It does not matter how slowly you go as long as you do not stop.
// – Confucius