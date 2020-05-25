(function() {

  // quotes
  const quotes = [
    {
      quote:'"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy."',
      author:'Ray Croc'
    },
    {
      quote:'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful',
      author:'L. R. Ellert'
    },
    {
      quote:'Children really brighten up a household. They never turn the lights off.',
      author:'Ralph Bus'
    },
    {
      quote:'Congratulations! today is your day. You\'re off to Great Places! You\'re off and away.',
      author:'Dr Seuss'
    },
    {
      quote:'We must dare to think unthinkable thoughts.',
      author: 'James W. Fulbright'
    },
    {
      quote:'Remember to focus on goals that are within your control',
      author: 'Tony Dungy'
    },
    {
      quote:'A positive philosophy turns into a positive attitude, which turns into positive actions, which turns into positive results, which turns into a positive lifestyle. A positive life',
      author: 'Jeff Olson'
    },
    {
      quote:'In any project, the important factor is your belief. Without belief there can be no successful outcome.',
      author: 'William James'
    },
    {
      quote: 'I can give you a six-word formula for success: Think things through, then follow through.',
      author: 'Captain Edward V. Rickenbacker'
    },
    {
      quote: 'Begin challenging your own assumptions. Your assumptions are your windows on the world. Scrub them off every once in awhile, or the light won\'t come in.',
      author: 'Alan Alda'
    },
    {
      quote: 'No man has a chance to enjoy permanent success until he begins to look in a mirror for the real cause of all his mistakes.',
      author: 'Napolean Hill'
    },
    {
      quote: 'Thought is the strongest thing we have. Work done by true and profound thought - that is a real force.',
      author: 'Albert Schweitzer'
    },
    {
      quote: 'As you go through life, you\'ll have maybe a handful of friends who are in it for the long haul. A true testament to their character is how consistent they are throughout that friendship.',
      author: 'Jerry Kramer'
    },

  ];

  // Grab button element
  const button = document.getElementById("btn");

  // Event listener to button that generates random object from quotes array on click
  button.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    // modify text content of h3 and paragraph tags
    document.getElementById('quote').textContent = quotes[random].quote;
    document.getElementById('author').textContent = quotes[random].author;

  });
})();