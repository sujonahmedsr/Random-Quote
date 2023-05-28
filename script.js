let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let button = document.querySelector('button');

let sound = document.querySelector('.fa-volume-up');
let copyBtn = document.querySelector('.fa-copy');
let tweet = document.querySelector('.fa-twitter');

button.addEventListener('click', ()=>{
    button.innerText = "Loading Quote..";
    fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(result=>{
        quote.innerText = result.content;
        author.innerText = result.author;
        button.innerText = "New Quote";
    })
})

sound.addEventListener('click', ()=>{
    let speech = new SpeechSynthesisUtterance(`${quote.innerText}  by  ${author.innerText}`);
    speechSynthesis.speak(speech);
})


copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);
});

tweet.addEventListener("click", ()=>{
    let tweeter =  `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweeter, "_blank");
})