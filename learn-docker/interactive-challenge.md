---
layout: default
title: Docker Captain's Challenge Game
---

<style>
    .game-container {
        width: 100%;
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1.5rem;
        backdrop-filter: blur(12px);
        padding: 2rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        margin-top: 2rem;
    }

    .game-layout {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 2rem;
    }

    .terminal-window {
        background: #000;
        border-radius: 0.75rem;
        padding: 1.5rem;
        font-family: 'Consolas', 'Monaco', monospace;
        font-size: 0.9rem;
        height: 350px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .terminal-header {
        display: flex;
        gap: 6px;
        margin-bottom: 1rem;
        border-bottom: 1px solid #333;
        padding-bottom: 0.5rem;
    }

    .dot { width: 12px; height: 12px; border-radius: 50%; }
    .red { background: #ff5f56; }
    .yellow { background: #ffbd2e; }
    .green { background: #27c93f; }

    .terminal-output {
        flex: 1;
        overflow-y: auto;
        color: #d1d5db;
        line-height: 1.5;
    }

    .prompt { color: var(--success-color); margin-right: 10px; }

    .task-card {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5rem;
        border-radius: 1rem;
        border-left: 4px solid #0db7ed;
    }

    .task-title {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #0db7ed;
    }

    .choices {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .choice-btn {
        background: rgba(13, 183, 237, 0.1);
        border: 1px solid rgba(13, 183, 237, 0.2);
        color: var(--text-primary);
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
        text-align: left;
        transition: var(--transition);
        font-size: 0.9rem;
    }

    .choice-btn:hover {
        background: rgba(13, 183, 237, 0.2);
        border-color: #0db7ed;
    }

    .dockerfile-view {
        background: #1e1e1e;
        padding: 1rem;
        border-radius: 0.5rem;
        font-family: monospace;
        font-size: 0.85rem;
        color: #ccc;
        white-space: pre;
        border: 1px solid #444;
        margin-top: 1rem;
    }

    .dockerfile-view span.keyword { color: #569cd6; font-weight: bold; }
    .dockerfile-view span.value { color: #ce9178; }

    .hidden { display: none; }

    #level-indicator {
        background: #0db7ed;
        color: #000;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-weight: 800;
        font-size: 0.8rem;
        float: right;
    }

    @media (max-width: 900px) {
        .game-layout { grid-template-columns: 1fr; }
    }
</style>

<div class="game-container">
    <div id="level-indicator">Level 1/3</div>
    <p>Master the art of containerization by solving real-world deployment puzzles.</p>

    <div class="game-layout">
        <div class="main-stage">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <div id="terminal-output" class="terminal-output">
                    <div><span class="prompt">$</span>docker version 24.0.5...</div>
                </div>
            </div>
            
            <div id="dockerfile-display" class="dockerfile-view"># Empty Dockerfile</div>
        </div>

        <div class="sidebar">
            <div id="task-container" class="task-card">
                <div id="task-title" class="task-title">The First Layer</div>
                <p id="task-desc">Which base image should we use for a small Node.js app?</p>
                <div id="choices" class="choices"></div>
            </div>

            <div id="feedback-container" class="task-card hidden">
                <div id="feedback-title" class="task-title">Correct!</div>
                <p id="feedback-text"></p>
                <button id="continue-btn" class="choice-btn" style="width: 100%; margin-top: 1rem; text-align: center;">Next Step</button>
            </div>

            <div id="completion-card" class="task-card hidden" style="text-align: center;">
                <h2 style="color: var(--success-color);">Success! 🐳</h2>
                <button onclick="location.reload()" class="choice-btn" style="width: 100%; margin-top: 1rem; text-align: center;">Play Again</button>
            </div>
        </div>
    </div>
</div>

<script>
    (function() {
        const gameData = [
            {
                level: 1,
                title: "The Base Image",
                desc: "We're containerizing a Node.js app. Select the best base image for size and security.",
                choices: [
                    {
                        text: "FROM ubuntu:latest",
                        correct: false,
                        feedback: "Too heavy! Ubuntu is a full OS. Use an image optimized for size.",
                        dockerfile: "FROM ubuntu:latest\nRUN apt-get update..."
                    },
                    {
                        text: "FROM node:18-alpine",
                        correct: true,
                        feedback: "Perfect! Alpine Linux is incredibly small (~5MB).",
                        dockerfile: "FROM node:18-alpine"
                    }
                ]
            },
            {
                level: 1,
                title: "Layer Optimization",
                desc: "What should we copy first to take advantage of caching?",
                choices: [
                    {
                        text: "COPY . .",
                        correct: false,
                        feedback: "Not quite. Any code change will force a full reinstall.",
                        dockerfile: "FROM node:18-alpine\nCOPY . ."
                    },
                    {
                        text: "COPY package.json .",
                        correct: true,
                        feedback: "Smart! Docker will cache the 'npm install' layer.",
                        dockerfile: "FROM node:18-alpine\nWORKDIR /app\nCOPY package.json . \nRUN npm install\nCOPY . ."
                    }
                ]
            },
            {
                level: 2,
                title: "Data Persistence",
                desc: "How do we keep uploaded files after a restart?",
                choices: [
                    {
                        text: "Save to /app/uploads",
                        correct: false,
                        feedback: "Containers are ephemeral! Data is lost on restart.",
                        dockerfile: "FROM node:18-alpine\n..."
                    },
                    {
                        text: "Use Docker Volumes",
                        correct: true,
                        feedback: "Exactly. Volumes persist outside the container lifecycle.",
                        dockerfile: "FROM node:18-alpine\nWORKDIR /app\n...\nVOLUME /app/uploads\nCMD [\"npm\", \"start\"]"
                    }
                ]
            }
        ];

        let currentStep = 0;
        const terminalOutput = document.getElementById('terminal-output');
        const dockerfileDisplay = document.getElementById('dockerfile-display');
        const taskContainer = document.getElementById('task-container');
        const feedbackContainer = document.getElementById('feedback-container');
        const completionCard = document.getElementById('completion-card');

        function typeTerminal(text, type = 'info') {
            const line = document.createElement('div');
            line.innerHTML = `<span class="prompt">$</span>${text}`;
            if (type === 'error') line.style.color = 'var(--error-color)';
            if (type === 'success') line.style.color = 'var(--success-color)';
            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        function loadStep() {
            const step = gameData[currentStep];
            document.getElementById('level-indicator').textContent = `Level ${step.level}/3`;
            document.getElementById('task-title').textContent = step.title;
            document.getElementById('task-desc').textContent = step.desc;
            
            const choicesDiv = document.getElementById('choices');
            choicesDiv.innerHTML = '';
            
            step.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice.text;
                btn.onclick = () => {
                    if (choice.correct) {
                        typeTerminal(`docker build -t app .`, 'info');
                        setTimeout(() => {
                            typeTerminal(`Build successful!`, 'success');
                            dockerfileDisplay.innerHTML = choice.dockerfile.replace(/(FROM|RUN|COPY|WORKDIR|CMD|VOLUME)/g, '<span style="color:#569cd6">$1</span>');
                            showFeedback(true, choice.feedback);
                        }, 500);
                    } else {
                        typeTerminal(`Build failed!`, 'error');
                        showFeedback(false, choice.feedback);
                    }
                };
                choicesDiv.appendChild(btn);
            });

            taskContainer.classList.remove('hidden');
            feedbackContainer.classList.add('hidden');
        }

        function showFeedback(isCorrect, text) {
            taskContainer.classList.add('hidden');
            feedbackContainer.classList.remove('hidden');
            document.getElementById('feedback-text').textContent = text;
            const title = document.getElementById('feedback-title');
            const continueBtn = document.getElementById('continue-btn');

            if (isCorrect) {
                title.textContent = "Correct!";
                title.style.color = "var(--success-color)";
                continueBtn.textContent = "Next Challenge";
                continueBtn.onclick = () => {
                    currentStep++;
                    if (currentStep < gameData.length) loadStep();
                    else {
                        feedbackContainer.classList.add('hidden');
                        completionCard.classList.remove('hidden');
                    }
                };
            } else {
                title.textContent = "Try Again";
                title.style.color = "var(--error-color)";
                continueBtn.textContent = "Back to Task";
                continueBtn.onclick = () => {
                    feedbackContainer.classList.add('hidden');
                    taskContainer.classList.remove('hidden');
                };
            }
        }

        loadStep();
    })();
</script>
