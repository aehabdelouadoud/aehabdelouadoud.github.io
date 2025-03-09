// Terminal commands and outputs
const commands = {
  "man man": `
Available commands:<br>
- <span class="command">man man</span>: Show this help message.<br>
- <span class="command">cat [file]</span>: Display the contents of a file.<br>
- <span class="command">ls</span>: List available files/directories.<br>
- <span class="command">clear</span>: Clear the terminal.<br>
  `,
  "cat about": `
I am a very enthusiastic and driven individual with a huge passion
for IT and Business, complemented by a strong interest in public
speaking and reading. My commitment to continuous learning and
innovation fuels my pursuit of excellence in both academic and pro-
fessional settings. I would like to use all the diverse skills and expe-
riences in contributing meaningfully toward collaborative projects
and leaving a lasting positive impact.
  `,
  "cat projects": `
There's no projects yet in the list :(
  `,
  "cat skills": `
- JavaScript<br>
- Python<br>
- Bash<br>
- Git<br>
- HTML/CSS<br>
- Fennel<br>
- Lua<br>
  `,
  "cat contact": `
Contact:<br>
Email: <a href="mailto:aitelhaj.abdelouadoud.reachme@proton.me">aitelhaj.abdelouadoud.reachme@proton.me</a><br>
GitHub: <a href="https://github.com/aehabdelouadoud">github.com/aehabdelouadoud</a><br>
  `,
  "cat books": `
Comming soon!
  `,
  "cat social": `
Comming soon!
  `,
  "cat edu": `
Comming soon!
  `,
"cat tools": `
1. <a href="https://neovim.io/" target="_blank" rel="noopener noreferrer">Neovim</a><br>
2. <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a><br>
3. <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a><br>
4. <a href="https://wiki.archlinux.org/" target="_blank" rel="noopener noreferrer">Linux (Arch)</a>, 
   <a href="https://nixos.org/" target="_blank" rel="noopener noreferrer">NixOS</a><br>
5. <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">Bash</a><br>
6. <a href="https://fishshell.com/" target="_blank" rel="noopener noreferrer">Fish</a><br>
7. <a href="https://github.com/tmux/tmux" target="_blank" rel="noopener noreferrer">Tmux</a><br>
8. <a href="https://www.gnu.org/software/make/" target="_blank" rel="noopener noreferrer">Make</a><br>
9. <a href="https://cmake.org/" target="_blank" rel="noopener noreferrer">CMake</a><br>
`,
  "cat languages": `
Comming soon!
  `,
  "cat learning": `
Comming soon!
  `,
  "cat working_on": `
Comming soon!
  `,
  "cat life_motto": `
Learn.
  `,
  "cat sysinfo": `
           .             ​       aehabdelouadoud@world<br>
          .c.           ┌───────────────────────────────────┐<br>
         .ccc.           ​ OS : Ait El Haj Abdelouadoud<br>
        .lllll.          ​ Kernel :  UNIVERSE0x<br>
       ..;'olll.         ​ WM : Hyprland <br>
      .dolllcccl.        ​ Shell : fish<br>
     .lcc'   'ccc.       ​ Uptime : 19 years<br>
    .ccc'     'cc:.      ​ CPU : RYŪ 0x1000<br>
   .cccc'     'c:;..    └───────────────────────────────────┘<br>
  ."'             '".             "ななころびやおき" 龍<br>
<br>
arch in ~ <br>
  λ echo "少ないほど豊か" > life-motto.txt<br>
  `,
};

// Available files/directories for autocompletion
const files = ["about", "projects", "skills", "contact", "books", "sysinfo", "social", "edu", "languages", "learning", "working_on", "life_motto", "tools"];

// Get DOM elements
const input = document.getElementById("input");
const output = document.getElementById("output");

// Focus on input field
input.focus();

// Handle user input
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = input.value.trim();
    input.value = ""; // Clear input field

    // Display the command in the output
    output.innerHTML += `<p><span class="prompt">$</span> ${command}</p>`;

    // Handle commands
    if (command === "clear") {
      output.innerHTML = ""; // Clear the terminal
    } else if (command === "ls") {
      output.innerHTML += `<p>${files.join("    ")}</p>`; // List files
    } else if (command.startsWith("cat ")) {
      const file = command.split(" ")[1];
      if (files.includes(file)) {
        output.innerHTML += `<p>${commands[`cat ${file}`]}</p>`; // Display file contents
      } else {
        output.innerHTML += `<p>File not found: ${file}</p>`; // Handle invalid file
      }
    } else if (commands[command]) {
      output.innerHTML += `<p>${commands[command]}</p>`; // Display command output
    } else {
      output.innerHTML += `<p>Command not found: ${command}</p>`; // Handle invalid commands
    }

    // Scroll to the bottom of the output
    output.scrollTop = output.scrollHeight;
  } else if (e.key === "Tab") {
    e.preventDefault(); // Prevent default tab behavior
    const inputText = input.value.trim();
    const matchingFiles = files.filter((file) => file.startsWith(inputText.split(" ")[1] || ""));

    if (matchingFiles.length === 1) {
      // Autocomplete the file name
      input.value = `cat ${matchingFiles[0]}`;
    } else if (matchingFiles.length > 1) {
      // Show matching files
      output.innerHTML += `<p>${matchingFiles.join("    ")}</p>`;
    }
  }
});

const asciiArt = document.querySelector(".ascii-art");
const introArt = document.querySelector(".intro-art");

// ASCII art lines
const name = [
  "▄▀█ █▀▀ █░█ ▄▄ ▄▀█ █▄▄ █▀▄ █▀▀ █░░ █▀█ █░█ ▄▀█ █▀▄ █▀█ █░█ █▀▄",
  "█▀█ ██▄ █▀█ ░░ █▀█ █▄█ █▄▀ ██▄ █▄▄ █▄█ █▄█ █▀█ █▄▀ █▄█ █▄█ █▄▀",
];

const intro = [
  "$ Welcome to my universe 0x01! ",
  "$ Get ready to dive into the MATRIX",
  "$ before getting started",
  "$ Make sure you are in a quit place, wearing your headphones",
  "$ click the buttom up so you can hear the beatings of my universe",
  "$ Type man man to see available commands.",
];

// Function to simulate typing animation with optional text replacement
function typeText(element, text, speed = 20, replaceText = false, delayAfterFirstText = 0) {
  return new Promise((resolve) => {
    let index = 0;

    // Check if the text should replace previous content or be appended
    if (replaceText) {
      element.textContent = ''; // Clear previous text if replacing
    }

    // Print the first part of the text
    const interval = setInterval(() => {
      if (index < text.length) {
        if (!replaceText) {
          element.textContent += text.charAt(index); // Append text
        } else {
          element.textContent = text.substring(0, index + 1); // Replace text
        }
        index++;
      } else {
        clearInterval(interval);
        
        // Wait for a few milliseconds before resolving (so user can read)
        setTimeout(() => {
          resolve();
        }, delayAfterFirstText); // Delay in milliseconds
      }
    }, speed);

  });
}

// Function to wait for the spacebar to continue the animation
function waitForSpaceBar() {
  return new Promise((resolve) => {
    // Event listener for spacebar
    const onKeyPress = (event) => {
      if (event.key === ' ') {  // Check if the spacebar is pressed
        document.removeEventListener('keydown', onKeyPress);  // Remove listener
        resolve();  // Continue the process
      }
    };
    
    // Add event listener for the spacebar
    document.addEventListener('keydown', onKeyPress);
  });
}

// Animate the ASCII art line by line
async function animateAsciiArt() {
  for (const line of name) {
    await typeText(asciiArt, line + "\n"); // Add a newline after each line
  }
  for (const line of intro) {
    await typeText(introArt, line + "\n", 70, true, 1500); // Add a newline after each line
  }
}

// Start the animation
animateAsciiArt();

// Sound
var audio = document.getElementById("rainSound");
var playPauseButton = document.getElementById("playPauseButton");

// Start by setting the audio to be unmuted
audio.muted = false;  // No need to set audio.paused as it's false by default

// Event listener for the play/pause/mute/unmute button
playPauseButton.addEventListener("click", function() {
  if (audio.paused && !audio.muted) {
    // If audio is paused and unmuted, play the audio
    audio.play();
    playPauseButton.innerHTML = "Pause Rain";  // Change button text
    playPauseButton.style.color = "#000";  // Set text color to white
    playPauseButton.style.backgroundColor = "#00ff00"; // Keep the button green when playing
  } else if (!audio.paused && !audio.muted) {
    // If audio is playing and unmuted, pause the audio
    audio.pause();
    playPauseButton.innerHTML = "Play Rain";   // Change button text
    playPauseButton.style.color = "#000";  // Set text color to white
    playPauseButton.style.backgroundColor = "#00ff00"; // Reset to default green
  } else if (!audio.paused && audio.muted) {
    // If audio is playing but muted, unmute and keep playing
    audio.muted = false;
    playPauseButton.innerHTML = "Mute Rain";  // Change button text
    playPauseButton.style.color = "#000";  // Set text color to white
    playPauseButton.style.backgroundColor = "#00ff00"; // Keep the button green
  } else if (audio.paused && audio.muted) {
    // If audio is paused and muted, unmute and play the audio
    audio.muted = false;
    audio.play();
    playPauseButton.innerHTML = "Pause Rain";  // Change button text
    playPauseButton.style.color = "#000";  // Set text color to white
    playPauseButton.style.backgroundColor = "#00ff00"; // Keep the button green
  }
});
//
//

// Matrix-style background effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()';
const fontSize = 14;
const columns = canvas.width/fontSize;
const drops = [];

for(let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00FF00';
  ctx.font = fontSize + 'px monospace';

  for(let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);
    
    if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Add particles effect
document.addEventListener('DOMContentLoaded', function() {
  const particleCount = 50;
  for(let i = 0; i < particleCount; i++) {
    createParticle();
  }
});

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  document.body.appendChild(particle);
  
  // Random position and animation
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.animation = 
    `float ${3 + Math.random() * 5}s linear infinite`;
  
  setTimeout(() => particle.remove(), 10000);
}
