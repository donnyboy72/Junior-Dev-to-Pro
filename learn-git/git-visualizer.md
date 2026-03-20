---
layout: default
title: Interactive Git Visualizer
---

<style>
    .git-project-container {
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 2rem;
        margin-top: 2rem;
        backdrop-filter: blur(8px);
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

    .btn-commit { background: var(--accent-color); color: #0f172a; }
    .btn-branch { background: #818cf8; color: #f8fafc; }
    .btn-checkout { background: #f59e0b; color: #0f172a; }
    .btn-merge { background: #10b981; color: #f8fafc; }
    .btn-reset { background: rgba(255, 255, 255, 0.1); color: var(--text-secondary); border: 1px solid rgba(255, 255, 255, 0.2); }

    .btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
    .btn:active { transform: translateY(0); }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    #visualizer-canvas {
        width: 100%;
        height: 400px;
        background: rgba(15, 23, 42, 0.4);
        border-radius: 0.75rem;
        margin-bottom: 2rem;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .explanation-panel {
        background: rgba(0, 0, 0, 0.2);
        padding: 1.5rem;
        border-radius: 0.75rem;
        border-left: 4px solid var(--accent-color);
    }

    .explanation-panel h3 { margin-top: 0 !important; margin-bottom: 0.5rem !important; color: var(--text-primary) !important; }
    .explanation-panel p { margin-bottom: 0 !important; font-size: 0.95rem; color: var(--text-secondary); }

    .status-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }

    .current-branch-tag {
        color: var(--accent-color);
        font-weight: bold;
    }

    circle.commit { transition: all 0.3s ease; cursor: pointer; }
    circle.commit:hover { r: 12; }
    path.connection { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 0.6s forwards; }
    
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes pop { 0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); } }
    .new-node { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center; }
</style>

<div class="git-project-container">
    <div class="status-bar">
        <span>Current Branch: <span id="current-branch" class="current-branch-tag">main</span></span>
        <span id="commit-count">Commits: 1</span>
    </div>

    <div id="visualizer-canvas">
        <svg id="git-svg" width="100%" height="100%" viewBox="0 0 800 400"></svg>
    </div>

    <div class="controls">
        <button class="btn btn-commit" id="btn-commit">git commit</button>
        <button class="btn btn-branch" id="btn-branch">git branch feature</button>
        <button class="btn btn-checkout" id="btn-checkout" disabled>git checkout [branch]</button>
        <button class="btn btn-merge" id="btn-merge" disabled>git merge feature</button>
        <button class="btn btn-reset" id="btn-reset">Reset</button>
    </div>

    <div class="explanation-panel">
        <h3 id="info-title">Welcome to the Git Visualizer</h3>
        <p id="info-text">Click "git commit" to add a new snapshot of your code to the timeline.</p>
    </div>
</div>

<script>
    const svg = document.getElementById('git-svg');
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');
    const branchTag = document.getElementById('current-branch');
    const commitCount = document.getElementById('commit-count');
    
    const btnCommit = document.getElementById('btn-commit');
    const btnBranch = document.getElementById('btn-branch');
    const btnCheckout = document.getElementById('btn-checkout');
    const btnMerge = document.getElementById('btn-merge');
    const btnReset = document.getElementById('btn-reset');

    let state = {
        commits: [],
        branches: { 'main': { color: '#38bdf8', y: 200 } },
        currentBranch: 'main',
        head: null,
        featureBranchCreated: false
    };

    const CONFIG = {
        startX: 50,
        spacing: 80,
        nodeRadius: 8,
        mainY: 200,
        featureY: 100
    };

    function init() {
        state.commits = [];
        state.currentBranch = 'main';
        state.featureBranchCreated = false;
        svg.innerHTML = '';
        
        // Initial commit
        addCommit('Initial commit', 'main');
        updateUI();
    }

    function addCommit(message, branchName, parent = null) {
        // If parent is not provided, use the current head of the branch
        if (!parent) {
            parent = state.commits.filter(c => c.branch === branchName).pop();
        }

        const x = parent ? parent.x + CONFIG.spacing : CONFIG.startX;
        const y = branchName === 'main' ? CONFIG.mainY : CONFIG.featureY;
        
        const commit = {
            id: state.commits.length,
            message,
            branch: branchName,
            x,
            y,
            parent: parent ? parent.id : null
        };

        state.commits.push(commit);
        state.head = commit;
        render();
        return commit;
    }

    function render() {
        svg.innerHTML = '';
        
        // Draw connections first
        state.commits.forEach(commit => {
            if (commit.parent !== null) {
                const parent = state.commits[commit.parent];
                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                
                let d;
                if (parent.y === commit.y) {
                    d = `M ${parent.x} ${parent.y} L ${commit.x} ${commit.y}`;
                } else {
                    // Curved line for branching/merging
                    d = `M ${parent.x} ${parent.y} C ${parent.x + 40} ${parent.y}, ${commit.x - 40} ${commit.y}, ${commit.x} ${commit.y}`;
                }
                
                path.setAttribute("d", d);
                path.setAttribute("stroke", "rgba(148, 163, 184, 0.4)");
                path.setAttribute("stroke-width", "3");
                path.setAttribute("fill", "none");
                path.classList.add("connection");
                svg.appendChild(path);
            }
        });

        // Draw nodes
        state.commits.forEach(commit => {
            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.classList.add("new-node");

            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", commit.x);
            circle.setAttribute("cy", commit.y);
            circle.setAttribute("r", CONFIG.nodeRadius);
            circle.setAttribute("fill", commit.branch === 'main' ? '#38bdf8' : '#818cf8');
            circle.classList.add("commit");
            
            // Highlight current head (the actual HEAD based on current branch)
            const branchHead = state.commits.filter(c => c.branch === state.currentBranch).pop();
            if (branchHead && branchHead.id === commit.id) {
                circle.setAttribute("stroke", "#fff");
                circle.setAttribute("stroke-width", "3");
                circle.setAttribute("r", CONFIG.nodeRadius + 2);
            }

            g.appendChild(circle);

            // Add branch labels if it's a head
            const isMainHead = state.commits.filter(c => c.branch === 'main').pop().id === commit.id;
            const isFeatureHead = state.featureBranchCreated && state.commits.filter(c => c.branch === 'feature').pop()?.id === commit.id;

            if (isMainHead || isFeatureHead) {
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", commit.x);
                text.setAttribute("y", commit.y + 25);
                text.setAttribute("fill", (isMainHead && state.currentBranch === 'main') || (isFeatureHead && state.currentBranch === 'feature') ? "var(--accent-color)" : "var(--text-secondary)");
                text.setAttribute("font-size", "12");
                text.setAttribute("font-weight", "bold");
                text.setAttribute("text-anchor", "middle");
                text.textContent = isMainHead ? 'main' : 'feature';
                g.appendChild(text);
            }

            svg.appendChild(g);
        });
    }

    function updateUI() {
        branchTag.textContent = state.currentBranch;
        commitCount.textContent = `Commits: ${state.commits.length}`;
        
        btnBranch.disabled = state.featureBranchCreated;
        btnCheckout.disabled = !state.featureBranchCreated;
        btnMerge.disabled = !state.featureBranchCreated || state.currentBranch !== 'main';

        if (state.featureBranchCreated) {
            const target = state.currentBranch === 'main' ? 'feature' : 'main';
            btnCheckout.textContent = `git checkout ${target}`;
        } else {
            btnCheckout.textContent = "git checkout [branch]";
        }
    }

    btnCommit.addEventListener('click', () => {
        const branchHead = state.commits.filter(c => c.branch === state.currentBranch).pop();
        addCommit(`Commit ${state.commits.length}`, state.currentBranch, branchHead);
        infoTitle.textContent = "New Commit Created";
        infoText.textContent = `A new snapshot was added to the '${state.currentBranch}' branch. In Git, a commit records changes to your files.`;
        updateUI();
    });

    btnBranch.addEventListener('click', () => {
        state.featureBranchCreated = true;
        const mainHead = state.commits.filter(c => c.branch === 'main').pop();
        state.currentBranch = 'feature';
        addCommit('Start feature', 'feature', mainHead);
        infoTitle.textContent = "Branch 'feature' Created";
        infoText.textContent = "You've created a new branch and switched to it automatically! You are now working in a parallel timeline.";
        updateUI();
    });

    btnCheckout.addEventListener('click', () => {
        state.currentBranch = state.currentBranch === 'main' ? 'feature' : 'main';
        infoTitle.textContent = `Switched to ${state.currentBranch}`;
        infoText.textContent = `You used 'git checkout' to move your HEAD pointer to the ${state.currentBranch} branch.`;
        render();
        updateUI();
    });

    btnMerge.addEventListener('click', () => {
        const featureHead = state.commits.filter(c => c.branch === 'feature').pop();
        const mainHead = state.commits.filter(c => c.branch === 'main').pop();
        
        state.currentBranch = 'main';
        const mergeCommit = addCommit("Merge branch 'feature'", 'main', mainHead);
        
        // Manual draw connection from feature branch head to merge commit
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${featureHead.x} ${featureHead.y} C ${featureHead.x + 40} ${featureHead.y}, ${mergeCommit.x - 40} ${mergeCommit.y}, ${mergeCommit.x} ${mergeCommit.y}`;
        path.setAttribute("d", d);
        path.setAttribute("stroke", "#10b981");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none");
        path.classList.add("connection");
        svg.appendChild(path);

        state.featureBranchCreated = false;
        infoTitle.textContent = "Merged branch 'feature'";
        infoText.textContent = "The changes from 'feature' have been combined back into 'main'. The 'feature' branch history is now part of 'main'.";
        updateUI();
    });

    btnReset.addEventListener('click', () => {
        init();
        infoTitle.textContent = "Visualizer Reset";
        infoText.textContent = "Start over by making your first commit.";
    });

    init();
</script>

## How to use this project

1.  **Commit**: Click `git commit` to save your work.
2.  **Branch**: Click `git branch feature`. This creates a new timeline and **switches you to it**.
3.  **Work**: Make a few commits on the `feature` branch.
4.  **Checkout**: Click `git checkout main` to switch back to the main branch. Notice how the "HEAD" (the highlighted circle) moves.
5.  **Merge**: Once back on `main`, click `git merge feature` to combine the work.

## Key Concepts

- **Commit**: A snapshot of your code at a specific point in time.
- **Branch**: A separate timeline for developing features or fixing bugs.
- **Checkout**: The act of switching between branches. It moves your "HEAD" pointer.
- **Merge**: Combining the history and changes from one branch into another.
- **HEAD**: The current location (pointer) of where you are working in the Git history.
