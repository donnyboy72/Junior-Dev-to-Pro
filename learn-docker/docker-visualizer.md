---
layout: default
title: Interactive Docker Visualizer
---

<style>
    .docker-project-container {
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 2rem;
        margin-top: 2rem;
        backdrop-filter: blur(8px);
    }

    .visualizer-stage {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 20px 0;
    }

    .stage-box {
        width: 140px;
        height: 140px;
        background: rgba(15, 23, 42, 0.6);
        border: 2px dashed rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        transition: all 0.4s ease;
        flex-shrink: 0;
    }

    .stage-box.active {
        border-color: var(--accent-color);
        background: rgba(56, 189, 248, 0.1);
        transform: scale(1.05);
        border-style: solid;
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
    }

    .stage-box.completed {
        border-color: #10b981;
        background: rgba(16, 185, 129, 0.05);
        border-style: solid;
    }

    .stage-label {
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--text-secondary);
        margin-top: 10px;
        text-transform: uppercase;
    }

    .stage-icon {
        font-size: 2.5rem;
        margin-bottom: 5px;
        opacity: 0.3;
        transition: opacity 0.3s ease;
    }

    .active .stage-icon, .completed .stage-icon {
        opacity: 1;
    }

    .flow-arrow {
        color: rgba(255, 255, 255, 0.1);
        font-size: 1.5rem;
        margin: 0 10px;
        transition: color 0.3s ease;
    }

    .flow-arrow.active {
        color: var(--accent-color);
    }

    .controls {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
        font-family: inherit;
        font-size: 0.9rem;
    }

    .btn-build { background: var(--accent-color); color: #0f172a; }
    .btn-run { background: #818cf8; color: #f8fafc; }
    .btn-expose { background: #10b981; color: #f8fafc; }
    .btn-reset { background: rgba(255, 255, 255, 0.1); color: var(--text-secondary); border: 1px solid rgba(255, 255, 255, 0.2); }

    .btn:hover:not(:disabled) { transform: translateY(-2px); filter: brightness(1.1); }
    .btn:active:not(:disabled) { transform: translateY(0); }
    .btn:disabled { opacity: 0.3; cursor: not-allowed; }

    .explanation-panel {
        background: rgba(0, 0, 0, 0.2);
        padding: 1.5rem;
        border-radius: 0.75rem;
        border-left: 4px solid var(--accent-color);
    }

    .explanation-panel h3 { margin-top: 0 !important; margin-bottom: 0.5rem !important; color: var(--text-primary) !important; }
    .explanation-panel p { margin-bottom: 0.5rem !important; font-size: 0.95rem; color: var(--text-secondary); }
    
    .code-snippet {
        background: #0f172a;
        padding: 10px;
        border-radius: 6px;
        font-family: monospace;
        font-size: 0.85rem;
        color: #e2e8f0;
        margin-top: 10px;
        display: none;
    }

    .active .code-snippet { display: block; }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    .pulse { animation: pulse 2s infinite ease-in-out; }
</style>

<div class="docker-project-container">
    <div class="visualizer-stage">
        <!-- Dockerfile -->
        <div class="stage-box active" id="box-dockerfile">
            <span class="stage-icon">📄</span>
            <span class="stage-label">Dockerfile</span>
            <div class="code-snippet">FROM node<br>COPY . .<br>CMD ["npm", "start"]</div>
        </div>

        <div class="flow-arrow" id="arrow-1">➔</div>

        <!-- Image -->
        <div class="stage-box" id="box-image">
            <span class="stage-icon">📦</span>
            <span class="stage-label">Image</span>
            <div class="code-snippet">my-app:v1</div>
        </div>

        <div class="flow-arrow" id="arrow-2">➔</div>

        <!-- Container -->
        <div class="stage-box" id="box-container">
            <span class="stage-icon">🗄️</span>
            <span class="stage-label">Container</span>
            <div class="code-snippet">ID: a1b2c3d4</div>
        </div>

        <div class="flow-arrow" id="arrow-3">➔</div>

        <!-- Running App -->
        <div class="stage-box" id="box-app">
            <span class="stage-icon">🌐</span>
            <span class="stage-label">Running App</span>
            <div class="code-snippet">Port 8080</div>
        </div>
    </div>

    <div class="controls">
        <button class="btn btn-build" id="btn-build">docker build -t my-app .</button>
        <button class="btn btn-run" id="btn-run" disabled>docker run -d my-app</button>
        <button class="btn btn-expose" id="btn-expose" disabled>Expose Port 8080</button>
        <button class="btn btn-reset" id="btn-reset">Reset</button>
    </div>

    <div class="explanation-panel">
        <h3 id="info-title">The Dockerfile</h3>
        <p id="info-text">Everything starts with a <strong>Dockerfile</strong>. This is a text file that contains instructions on how to build your application environment.</p>
    </div>
</div>

<script>
    const steps = [
        {
            id: 'dockerfile',
            title: 'The Dockerfile',
            text: 'Everything starts with a <strong>Dockerfile</strong>. This is a text file that contains instructions on how to build your application environment.'
        },
        {
            id: 'image',
            title: 'The Image',
            text: 'When you run <code>docker build</code>, Docker follows the instructions in your Dockerfile to create a <strong>Docker Image</strong>. Think of an image as a "blueprint" or a static snapshot of your app.'
        },
        {
            id: 'container',
            title: 'The Container',
            text: 'Running <code>docker run</code> creates a <strong>Container</strong> from your image. A container is a live, running instance of your image. It’s isolated from other containers and your host machine.'
        },
        {
            id: 'app',
            title: 'The Running App',
            text: 'Finally, by mapping ports, your application becomes accessible to the outside world. Your isolated container is now serving web traffic on <strong>localhost:8080</strong>!'
        }
    ];

    let currentStep = 0;

    const btnBuild = document.getElementById('btn-build');
    const btnRun = document.getElementById('btn-run');
    const btnExpose = document.getElementById('btn-expose');
    const btnReset = document.getElementById('btn-reset');

    const boxes = {
        dockerfile: document.getElementById('box-dockerfile'),
        image: document.getElementById('box-image'),
        container: document.getElementById('box-container'),
        app: document.getElementById('box-app')
    };

    const arrows = {
        1: document.getElementById('arrow-1'),
        2: document.getElementById('arrow-2'),
        3: document.getElementById('arrow-3')
    };

    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');

    function updateStep(stepIndex) {
        currentStep = stepIndex;
        const step = steps[stepIndex];

        // Update Text
        infoTitle.textContent = step.title;
        infoText.innerHTML = step.text;

        // Update Boxes
        Object.keys(boxes).forEach((key, index) => {
            boxes[key].classList.remove('active', 'completed', 'pulse');
            if (index < stepIndex) {
                boxes[key].classList.add('completed');
            } else if (index === stepIndex) {
                boxes[key].classList.add('active', 'pulse');
            }
        });

        // Update Arrows
        Object.keys(arrows).forEach((key, index) => {
            arrows[key].classList.remove('active');
            if (index < stepIndex) {
                arrows[key].classList.add('active');
            }
        });

        // Update Buttons
        btnBuild.disabled = stepIndex !== 0;
        btnRun.disabled = stepIndex !== 1;
        btnExpose.disabled = stepIndex !== 2;
    }

    btnBuild.addEventListener('click', () => updateStep(1));
    btnRun.addEventListener('click', () => updateStep(2));
    btnExpose.addEventListener('click', () => updateStep(3));
    
    btnReset.addEventListener('click', () => {
        updateStep(0);
        infoTitle.textContent = steps[0].title;
        infoText.innerHTML = steps[0].text;
    });

</script>

## Understanding the Lifecycle

This visualizer demonstrates the primary workflow of Docker.

### 1. Dockerfile (Source)
The Dockerfile is your **recipe**. It defines exactly what goes into your environment (OS, dependencies, environment variables).

### 2. Image (Build)
The Image is your **packaged product**. It's unchangeable (immutable) and can be shared on Docker Hub. If you change your code, you build a new image.

### 3. Container (Run)
The Container is the **running process**. You can start, stop, and delete containers. You can even run many containers from the *same* image simultaneously.

### 4. Running App (Exposure)
By default, containers are isolated. You must explicitly "expose" or map ports to let traffic reach your app.
