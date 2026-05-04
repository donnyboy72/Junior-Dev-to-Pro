---
layout: default
title: "Git Mission: The Feature Launch"
---

<style>
    .game-container {
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 2rem;
        margin-top: 2rem;
        backdrop-filter: blur(8px);
    }

    .mission-panel {
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid var(--accent-color);
        padding: 1.5rem;
        border-radius: 0.75rem;
        margin-bottom: 2rem;
    }

    .mission-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .mission-title {
        color: var(--accent-color);
        font-weight: 800;
        font-size: 1.2rem;
        margin: 0 !important;
    }

    .mission-badge {
        background: var(--accent-color);
        color: #0f172a;
        padding: 2px 10px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: bold;
    }

    .mission-task {
        font-size: 1rem;
        color: var(--text-primary);
        line-height: 1.5;
        margin-bottom: 0 !important;
    }

    #game-canvas {
        width: 100%;
        height: 300px;
        background: rgba(15, 23, 42, 0.4);
        border-radius: 0.75rem;
        margin-bottom: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .terminal-status {
        background: #0f172a;
        padding: 1rem;
        border-radius: 0.5rem;
        font-family: 'ui-monospace', monospace;
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .terminal-line { margin-bottom: 4px; }
    .t-prompt { color: #10b981; margin-right: 8px; }
    .t-branch { color: #818cf8; }

    .game-controls {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }

    .btn {
        padding: 0.75rem 1.25rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
        font-size: 0.85rem;
    }

    .btn-git { background: var(--accent-color); color: #0f172a; }
    .btn-git:hover { transform: translateY(-2px); filter: brightness(1.1); }
    .btn-git:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }

    .feedback-box {
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        display: none;
        margin-bottom: 1rem;
    }

    .feedback-error { background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; color: #f87171; }
    .feedback-success { background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; color: #34d399; }

    circle.commit { transition: all 0.3s ease; }
    path.connection { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 0.6s forwards; }
    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes pop { 0% { transform: scale(0); } 80% { transform: scale(1.2); } 100% { transform: scale(1); } }
    .new-node { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center; }
</style>

<div class="game-container">
    <div class="mission-panel">
        <div class="mission-header">
            <h3 class="mission-title" id="m-title">Mission 1: The Initial Save</h3>
            <span class="mission-badge" id="m-progress">1 / 5</span>
        </div>
        <p class="mission-task" id="m-task">Your project is ready to go. Use <code>git commit</code> to create your first snapshot on the <strong>main</strong> branch.</p>
    </div>

    <div class="feedback-box" id="feedback"></div>

    <div class="terminal-status">
        <div class="terminal-line"><span class="t-prompt">$</span> git status</div>
        <div class="terminal-line">On branch <span class="t-branch" id="t-branch">main</span></div>
        <div class="terminal-line" id="t-msg">Nothing to commit, working tree clean</div>
    </div>

    <div id="game-canvas">
        <svg id="git-svg" width="100%" height="100%" viewBox="0 0 800 300"></svg>
    </div>

    <div class="game-controls">
        <button class="btn btn-git" onclick="doAction('commit')">git commit</button>
        <button class="btn btn-git" onclick="doAction('branch')">git branch feature</button>
        <button class="btn btn-git" onclick="doAction('checkout-main')">git checkout main</button>
        <button class="btn btn-git" onclick="doAction('checkout-feature')">git checkout feature</button>
        <button class="btn btn-git" onclick="doAction('merge')">git merge feature</button>
    </div>

    <button class="btn" style="background: rgba(255,255,255,0.1); color: var(--text-secondary);" onclick="resetGame()">Reset Mission</button>
</div>

<script>
    const svg = document.getElementById('git-svg');
    const feedback = document.getElementById('feedback');
    const mTitle = document.getElementById('m-title');
    const mTask = document.getElementById('m-task');
    const mProgress = document.getElementById('m-progress');
    const tBranch = document.getElementById('t-branch');
    const tMsg = document.getElementById('t-msg');

    let state = {
        step: 1,
        commits: [],
        currentBranch: 'main',
        hasFeatureBranch: false,
        head: null
    };

    const missions = [
        {
            title: "Mission 1: The First Save",
            task: "Your project is ready to go. Use <code>git commit</code> to create your first snapshot on the <strong>main</strong> branch.",
            validate: (action) => action === 'commit' && state.currentBranch === 'main',
            error: "You need to commit your changes to the main branch first!"
        },
        {
            title: "Mission 2: Safe Experimentation",
            task: "You want to build a new experimental feature. Create a new branch named <code>feature</code>.",
            validate: (action) => action === 'branch',
            error: "Use 'git branch feature' to start your experimental timeline."
        },
        {
            title: "Mission 3: The Parallel Universe",
            task: "Now that the branch exists, <strong>switch to it</strong> (checkout) and <strong>make a commit</strong> there.",
            validate: (action) => action === 'commit' && state.currentBranch === 'feature',
            error: "You must be on the 'feature' branch to make an experimental commit!"
        },
        {
            title: "Mission 4: The Context Switch",
            task: "Urgent! A bug was found on the production site. <strong>Switch back to main</strong> to prepare for a fix.",
            validate: (action) => action === 'checkout-main' && state.currentBranch === 'main',
            error: "Use 'git checkout main' to move your HEAD back to the production branch."
        },
        {
            title: "Mission 5: Combining Success",
            task: "The feature is complete! While on <code>main</code>, use <code>git merge feature</code> to bring those changes in.",
            validate: (action) => action === 'merge' && state.currentBranch === 'main',
            error: "You must be on 'main' to merge 'feature' into it!"
        }
    ];

    function showFeedback(msg, isSuccess) {
        feedback.textContent = msg;
        feedback.style.display = 'block';
        feedback.className = `feedback-box ${isSuccess ? 'feedback-success' : 'feedback-error'}`;
        if (isSuccess) setTimeout(() => { feedback.style.display = 'none'; }, 3000);
    }

    function doAction(action) {
        const currentMission = missions[state.step - 1];

        // 1. Logic Updates
        if (action === 'checkout-main') state.currentBranch = 'main';
        if (action === 'checkout-feature' && state.hasFeatureBranch) state.currentBranch = 'feature';
        if (action === 'branch') state.hasFeatureBranch = true;

        // 2. Validation
        if (currentMission.validate(action)) {
            // Action specific visual effects
            if (action === 'commit') {
                const parent = state.commits.filter(c => c.branch === state.currentBranch).pop() || (state.currentBranch === 'feature' ? state.commits.filter(c => c.branch === 'main').pop() : null);
                addCommit(state.currentBranch, parent);
            }
            if (action === 'merge') {
                const mainHead = state.commits.filter(c => c.branch === 'main').pop();
                const featureHead = state.commits.filter(c => c.branch === 'feature').pop();
                addCommit('main', mainHead, featureHead);
            }

            // Success
            state.step++;
            if (state.step > missions.length) {
                showFeedback("CONGRATULATIONS! You've mastered the basic Git flow!", true);
                mTitle.textContent = "All Missions Complete!";
                mTask.textContent = "You successfully navigated a professional branching and merging workflow. You're ready for real team collaboration!";
                mProgress.textContent = "5 / 5";
            } else {
                showFeedback("Great job! Moving to next mission...", true);
                updateMissionUI();
            }
        } else {
            // Failure with specific help
            if (action === 'checkout-feature' && !state.hasFeatureBranch) {
                showFeedback("You can't checkout a branch that doesn't exist yet! Create it first.", false);
            } else {
                showFeedback(currentMission.error, false);
            }
        }

        render();
        updateTerminal();
    }

    function addCommit(branch, parent, mergeParent = null) {
        const x = parent ? parent.x + 80 : 50;
        const y = branch === 'main' ? 180 : 100;
        const commit = { id: state.commits.length, branch, x, y, parent: parent ? parent.id : null, mergeParent: mergeParent ? mergeParent.id : null };
        state.commits.push(commit);
    }

    function render() {
        svg.innerHTML = '';
        // Connections
        state.commits.forEach(c => {
            if (c.parent !== null) {
                const p = state.commits[c.parent];
                drawPath(p.x, p.y, c.x, c.y, "rgba(148, 163, 184, 0.4)");
            }
            if (c.mergeParent !== null) {
                const mp = state.commits[c.mergeParent];
                drawPath(mp.x, mp.y, c.x, c.y, "#10b981");
            }
        });
        // Nodes
        state.commits.forEach(c => {
            const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.classList.add("new-node");
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", c.x); circle.setAttribute("cy", c.y); circle.setAttribute("r", 8);
            circle.setAttribute("fill", c.branch === 'main' ? '#38bdf8' : '#818cf8');
            circle.classList.add("commit");
            // HEAD pointer
            const branchHead = state.commits.filter(com => com.branch === state.currentBranch).pop();
            if (branchHead && branchHead.id === c.id) {
                circle.setAttribute("stroke", "#fff"); circle.setAttribute("stroke-width", "3"); circle.setAttribute("r", 10);
            }
            g.appendChild(circle);
            svg.appendChild(g);
        });
    }

    function drawPath(x1, y1, x2, y2, color) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`;
        path.setAttribute("d", d); path.setAttribute("stroke", color); path.setAttribute("stroke-width", "3");
        path.setAttribute("fill", "none"); path.classList.add("connection");
        svg.appendChild(path);
    }

    function updateMissionUI() {
        const m = missions[state.step - 1];
        mTitle.textContent = m.title;
        mTask.innerHTML = m.task;
        mProgress.textContent = `${state.step} / 5`;
    }

    function updateTerminal() {
        tBranch.textContent = state.currentBranch;
        tMsg.textContent = state.commits.filter(c => c.branch === state.currentBranch).length > 0 ? "nothing to commit, working tree clean" : "Untracked files present. Use git commit.";
    }

    function resetGame() {
        state = { step: 1, commits: [], currentBranch: 'main', hasFeatureBranch: false, head: null };
        svg.innerHTML = '';
        feedback.style.display = 'none';
        updateMissionUI();
        updateTerminal();
    }

    updateMissionUI();
</script>

## Why this Workflow Matters

In this game, you practiced the **Git Flow** used by professional teams:

1.  **Main Branch**: This is your "source of truth." It should always be stable and deployable.
2.  **Feature Branching**: You never work directly on `main`. By creating a `feature` branch, you keep your experiments separate.
3.  **Context Switching**: Developers often have to jump between a feature they are building and a quick fix on `main`. `git checkout` is how you travel between these timelines.
4.  **Merging**: Once your work is tested and ready, you bring it back home to `main`.

### Pro Tip
Always run `git status` before you commit or switch branches. It's the best way to keep track of where you are!
