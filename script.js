// List of random love letters
const loveLetters = [
    "I have found my favorite place in the world—it's your heart.",
    "You make me feel like I'm walking on clouds. Every moment with you is a dream come true.",
    "My heart beats for you, and every second spent away from you is a lifetime.",
    "You are the sunshine that brightens my life. I'm so grateful for you.",
    "If I could rearrange the alphabet, I’d put U and I together.",
    "Every time I see you, my heart skips a beat. You are my everything!",
    "You are the reason my world is full of color, and my life is full of love.",
    "If love were a crime, I’d be guilty for loving you endlessly.",
    "My love for you is like a rose—ever-growing and always beautiful.",
    "You are the spark that lights up my life, and every moment with you is magic."
  ];
  
  // Function to generate a random love letter
  function generateLetter() {
    const randomIndex = Math.floor(Math.random() * loveLetters.length);
    const letter = loveLetters[randomIndex];
  
    // Display the letter
    document.getElementById("letter").textContent = letter;
  
    // Generate a heart animation
    generateHearts();
  }
  
  // Function to create floating hearts
  function generateHearts() {
    const heartContainer = document.getElementById("heart-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animation = 'float-heart 3s ease-out forwards';
  
    // Add heart to container
    heartContainer.appendChild(heart);
  
    // Remove heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
  
  // Keyframe animation for floating hearts
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes float-heart {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-100px); opacity: 0; }
    }
  `, styleSheet.cssRules.length);
  