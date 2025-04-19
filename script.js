// Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle'); //get darkmode button for toggle
darkModeToggle.addEventListener('click', dark) //add click event to mode
    function dark() {        
document.body.classList.toggle('dark-mode');   // clickable button to on or off dark mode    
};

//typing effect
const typingEffect = document.getElementById('typing-effect');
const texts = ['Web Developer', 'Designer', 'Coder']; // Array of texts to repeat
let textIndex = 0; // Current text index at start
let charIndex = 0; // Current character index at start

function type() {
    if (charIndex < texts[textIndex].length) {    //web=> 3<7(web developer)
        typingEffect.textContent += texts[textIndex].charAt(charIndex); 
        charIndex++; //increment
        setTimeout(type, 150); // Speed of typing
    } else {
        setTimeout(erase, 2000); // Pause before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typingEffect.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;  //decrement
        setTimeout(erase, 50); // Speed of erasing
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to next text
        setTimeout(type, 500); // Pause before typing next text
    }
}

// Start the typing effect
type();

// Back to Top Button
 const backToTop = document.getElementById('backToTop'); //back to top button made


window.addEventListener('scroll', scroll)
function scroll() {
    if (window.scrollY > 300) { // Show button after scrolling 300px  on  y axis
        backToTop.style.display = 'block';   //display as button
        backToTop.style.opacity = '1';       //visible
    } else {
        backToTop.style.opacity = '0';      //not visible
        setTimeout(disp,300)
            function disp()
            { backToTop.style.display = 'none'; }// Fade-out effect
    }
};

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
