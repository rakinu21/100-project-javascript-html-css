const quotes = [
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali",
  },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
];




const quotesText = document.querySelector('.quotes');
const authorText = document.querySelector('.author');
const btn = document.querySelector('.btn');

const initial = quotes[0];

  quotesText.textContent = initial.quote;
  authorText.textContent = initial.author;

btn.addEventListener('click', () => {

  
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quotesText.textContent = quote.quote;
  authorText.textContent = quote.author;
});

