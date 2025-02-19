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
About Me:
I am a very enthusiastic and driven individual with a huge passion
for IT and Business, complemented by a strong interest in public
speaking and reading. My commitment to continuous learning and
innovation fuels my pursuit of excellence in both academic and pro-
fessional settings. I would like to use all the diverse skills and expe-
riences in contributing meaningfully toward collaborative projects
and leaving a lasting positive impact.
  `,
  "cat projects": `
Projects:
There's no projects yet in the list :(
  `,
  "cat skills": `
Skills:
- JavaScript<br>
- Python<br>
- Bash<br>
- Git<br>
- HTML/CSS<br>
  `,
  "cat contact": `
Contact:<br>
Email: <a href="mailto:aitelhaj.abdelouadoud.reachme@proton.me">aitelhaj.abdelouadoud.reachme@proton.me</a><br>
GitHub: <a href="https://github.com/aehabdelouadoud">github.com/aehabdelouadoud</a><br>
  `,
};

// Available files/directories for autocompletion
const files = ["about", "projects", "skills", "contact"];

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
  "Welcome to my portfolio!",
  "Get ready to dive into the MATRIX",
  "Type man man to see available commands.",
];

// Function to simulate typing animation
function typeText(element, text, speed = 20) {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

// Animate the ASCII art line by line
async function animateAsciiArt() {
  for (const line of name) {
    await typeText(asciiArt, line + "\n"); // Add a newline after each line
  }
  for (const line of intro) {
    await typeText(introArt, line + "\n"); // Add a newline after each line
  }
}

// Start the animation
animateAsciiArt();

// Sound
var audio = document.getElementById("rainSound");
var playPauseButton = document.getElementById("playPauseButton");

// Start by setting the audio to be unmuted and paused
audio.muted = false;
audio.paused = true;

// Event listener for the play/pause/mute/unmute button
playPauseButton.addEventListener("click", function() {
  if (audio.paused && !audio.muted) {
    // If audio is paused and unmuted, play the audio
    audio.play();
    playPauseButton.innerHTML = "Pause Rain";  // Change button text
  } else if (!audio.paused && !audio.muted) {
    // If audio is playing and unmuted, pause the audio
    audio.pause();
    playPauseButton.innerHTML = "Play Rain";   // Change button text
  } else if (!audio.paused && audio.muted) {
    // If audio is playing but muted, unmute and keep playing
    audio.muted = false;
    playPauseButton.innerHTML = "Mute Rain";  // Change button text
  } else if (audio.paused && audio.muted) {
    // If audio is paused and muted, unmute and play the audio
    audio.muted = false;
    audio.play();
    playPauseButton.innerHTML = "Pause Rain";  // Change button text
  }
});

