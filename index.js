/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

const quotes = [ 
    { text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius", explanation: "This quote reflects the Stoic commitment to integrity and virtue. Stoicism teaches that we should live according to moral principles, striving to act and speak truthfully and justly in all situations. Our behavior, not circumstances, defines who we are." }, 
    { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius", explanation: "This quote emphasizes the Stoic belief that we cannot control external events, but we can control our reactions to them. The power lies within our ability to manage our thoughts, emotions, and attitudes, and recognizing this inner control brings a sense of calm and resilience." }, 
    { text: "It is not what happens to you, but how you react to it that matters.", author: "Epictetus", explanation: "Epictetus teaches that life's events are neutral; it is our interpretation and reaction to these events that determine their impact on us. By focusing on our response rather than the event itself, we can maintain composure and wisdom in challenging situations." }, 
    { text: "The more we value things outside our control, the less control we have.", author: "Marcus Aurelius", explanation: "When we place too much importance on external factors—like wealth, reputation, or material success—we give up our own agency. Stoicism teaches that only our own actions and judgments are truly within our control, and by shifting our focus to these, we maintain inner freedom and peace." }, 
    { text: "We suffer more in imagination than in reality.", author: "Seneca", explanation: "Seneca highlights that much of our suffering comes from our minds exaggerating future problems or dwelling on fears that may never come to pass. By learning to live in the present and not allowing our thoughts to create unnecessary anxiety, we can reduce mental distress."}, 
    // Add more quotes as needed 
]; 
 
function displayQuote() { 
    const today = new Date(); 
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24); 
    const quoteIndex = dayOfYear % quotes.length; // Loop through quotes 
    const quote = quotes[quoteIndex]; 
 
    document.getElementById('quote').innerText = quote.text; 
    document.getElementById('author').innerText = `- ${quote.author}`; 
    document.getElementById('explanation').innerText = `- ${quote.explanation}`; 
} 
 
displayQuote(); 


window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
