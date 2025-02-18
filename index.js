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
GitHub: <a href="https://github.com/your-username">github.com/aehabdelouadoud</a><br>
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

