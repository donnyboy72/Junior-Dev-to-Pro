---
layout: default
title: Interactive Debugging Simulator
---

<style>
    .debugging-simulator-container {
        background: var(--card-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 2rem;
        margin-top: 2rem;
        backdrop-filter: blur(8px);
    }

    .system-diagram {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding: 20px 0;
    }

    .node {
        width: 130px;
        height: 110px;
        background: rgba(15, 23, 42, 0.6);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
    }

    .node:hover {
        border-color: var(--accent-color);
        background: rgba(56, 189, 248, 0.1);
    }

    .node.active {
        border-color: var(--accent-color);
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
    }

    .node.broken {
        border-color: #ef4444;
        animation: shake 0.5s infinite;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }

    .node-label {
        font-size: 0.85rem;
        font-weight: bold;
        color: var(--text-primary);
        margin-top: 8px;
    }

    .node-icon {
        font-size: 2rem;
    }

    .arrow {
        color: rgba(255, 255, 255, 0.2);
        font-size: 1.5rem;
        margin: 0 10px;
    }

    .logs-panel {
        background: #0f172a;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        font-family: 'ui-monospace', monospace;
        height: 250px;
        overflow-y: auto;
        margin-bottom: 2rem;
    }

    .log-entry {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }

    .log-time { color: #94a3b8; margin-right: 10px; }
    .log-info { color: #38bdf8; }
    .log-error { color: #ef4444; font-weight: bold; }
    .log-warn { color: #f59e0b; }

    .inspector-panel {
        background: rgba(0, 0, 0, 0.2);
        padding: 1.5rem;
        border-radius: 0.75rem;
        border-left: 4px solid var(--accent-color);
    }

    .inspector-panel h3 { margin-top: 0 !important; color: var(--text-primary) !important; margin-bottom: 0.5rem !important; }
    .inspector-panel p { color: var(--text-secondary); margin-bottom: 1rem !important; font-size: 0.95rem; }

    .hint-btn {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: var(--accent-color);
        padding: 5px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        margin-top: 10px;
    }

    .hint-btn:hover { background: rgba(255, 255, 255, 0.2); }

    .btn-reset {
        margin-top: 2rem;
        padding: 0.75rem 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: var(--text-secondary);
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
    }

    .btn-reset:hover { background: rgba(255, 255, 255, 0.2); color: var(--text-primary); }
</style>

<div class="debugging-simulator-container">
    <div class="status-bar" style="margin-bottom: 1.5rem; color: #ef4444; font-weight: bold;">
        ⚠️ SYSTEM STATUS: ERROR - User "Donav" cannot log in.
    </div>

    <div class="system-diagram">
        <div class="node" id="node-request" onclick="inspect('request')">
            <span class="node-icon">👤</span>
            <span class="node-label">User Request</span>
        </div>
        <span class="arrow">➔</span>
        <div class="node" id="node-frontend" onclick="inspect('frontend')">
            <span class="node-icon">🖥️</span>
            <span class="node-label">Frontend</span>
        </div>
        <span class="arrow">➔</span>
        <div class="node" id="node-api" onclick="inspect('api')">
            <span class="node-icon">⚙️</span>
            <span class="node-label">API Gateway</span>
        </div>
        <span class="arrow">➔</span>
        <div class="node" id="node-db" onclick="inspect('db')">
            <span class="node-icon">🗄️</span>
            <span class="node-label">Database</span>
        </div>
    </div>

    <div class="logs-panel" id="logs-panel">
        <div class="log-entry"><span class="log-time">[10:00:01]</span> <span class="log-info">SYSTEM</span> Simulator initialized. Click a component to inspect its logs.</div>
    </div>

    <div class="inspector-panel">
        <h3 id="inspector-title">Investigation Console</h3>
        <p id="inspector-text">A user reported that they are seeing a "Login Failed" message on the website. Your job is to trace the request through the system to find where it's breaking.</p>
        <button class="hint-btn" id="hint-btn" onclick="showHint()">Get a Hint</button>
        <p id="hint-text" style="display: none; margin-top: 10px; font-style: italic; color: var(--accent-color);"></p>
    </div>

    <button class="btn-reset" onclick="resetSimulator()">Restart Investigation</button>
</div>

<script>
    const data = {
        request: {
            title: "User Request Details",
            text: "The user is sending a POST request to <code>/api/login</code> with credentials. The browser shows the request was sent successfully but received a <strong>500 Internal Server Error</strong>.",
            logs: [
                { time: "10:05:22", type: "info", msg: "POST /api/login HTTP/1.1" },
                { time: "10:05:22", type: "info", msg: "User-Agent: Mozilla/5.0" },
                { time: "10:05:23", type: "error", msg: "Failed to load resource: the server responded with a status of 500" }
            ],
            hint: "The request reached the server, but something went wrong on the backend. Move to the Frontend or API to see more."
        },
        frontend: {
            title: "Frontend (React) Logs",
            text: "The frontend received the login button click and dispatched the API call. It's now displaying a generic 'Something went wrong' message to the user.",
            logs: [
                { time: "10:05:22", type: "info", msg: "Button clicked: 'Login'" },
                { time: "10:05:22", type: "info", msg: "Calling API: https://api.jrdev.com/login" },
                { time: "10:05:23", type: "warn", msg: "API returned 500. Displaying ErrorToast." }
            ],
            hint: "The frontend is doing its job correctly. It sent the request and handled the error. The bug must be further downstream."
        },
        api: {
            title: "API Gateway (Node.js) Logs",
            text: "The API server received the request and tried to query the database to verify the user's password.",
            logs: [
                { time: "10:05:22", type: "info", msg: "Incoming Request: POST /login" },
                { time: "10:05:22", type: "info", msg: "Authenticating user: 'Donav'" },
                { time: "10:05:23", type: "error", msg: "Uncaught Exception: ConnectionRefusedError: Failed to connect to database at 127.0.0.1:5432" },
                { time: "10:05:23", type: "error", msg: "Stack Trace: at Pool.connect (/app/node_modules/pg/lib/pool.js:12)" }
            ],
            hint: "Look closely at the error: <code>ConnectionRefusedError</code>. It seems the API cannot talk to the Database. Is the database running?"
        },
        db: {
            title: "Database (PostgreSQL) Status",
            text: "The database service is currently <strong>offline</strong>. It crashed 5 minutes ago due to an 'Out of Memory' error.",
            logs: [
                { time: "10:00:15", type: "warn", msg: "Low memory warning: 95% usage" },
                { time: "10:00:45", type: "error", msg: "FATAL: could not write to log file: No space left on device" },
                { time: "10:00:46", type: "error", msg: "Process terminated. Exit code 1." }
            ],
            hint: "You found the root cause! The database is down because the disk is full. This is why the API is throwing connection errors."
        }
    };

    function inspect(id) {
        // Update UI state
        document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
        document.getElementById(`node-${id}`).classList.add('active');

        // Update Inspector
        const component = data[id];
        document.getElementById('inspector-title').textContent = component.title;
        document.getElementById('inspector-text').innerHTML = component.text;
        
        // Update Logs
        const panel = document.getElementById('logs-panel');
        panel.innerHTML = '';
        component.logs.forEach(log => {
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            entry.innerHTML = `<span class="log-time">[${log.time}]</span> <span class="log-${log.type}">${log.type.toUpperCase()}</span> ${log.msg}`;
            panel.appendChild(entry);
        });
        panel.scrollTop = panel.scrollHeight;

        // Reset hint
        document.getElementById('hint-text').style.display = 'none';
        
        // Add special visual for DB if found
        if (id === 'db') {
            document.getElementById('node-db').classList.add('broken');
            document.querySelector('.status-bar').textContent = "✅ ROOT CAUSE FOUND: Database is Offline (Disk Full)";
            document.querySelector('.status-bar').style.color = "#10b981";
        }
    }

    function showHint() {
        const activeNode = document.querySelector('.node.active');
        if (!activeNode) {
            document.getElementById('hint-text').textContent = "Start by clicking on the 'User Request' to see what the user experienced.";
        } else {
            const id = activeNode.id.replace('node-', '');
            document.getElementById('hint-text').textContent = data[id].hint;
        }
        document.getElementById('hint-text').style.display = 'block';
    }

    function resetSimulator() {
        document.querySelectorAll('.node').forEach(n => {
            n.classList.remove('active', 'broken');
        });
        document.getElementById('logs-panel').innerHTML = '<div class="log-entry"><span class="log-time">[10:00:01]</span> <span class="log-info">SYSTEM</span> Simulator initialized. Click a component to inspect its logs.</div>';
        document.getElementById('inspector-title').textContent = "Investigation Console";
        document.getElementById('inspector-text').innerHTML = "A user reported that they are seeing a 'Login Failed' message on the website. Your job is to trace the request through the system to find where it's breaking.";
        document.getElementById('hint-text').style.display = 'none';
        document.querySelector('.status-bar').textContent = '⚠️ SYSTEM STATUS: ERROR - User "Donav" cannot log in.';
        document.querySelector('.status-bar').style.color = "#ef4444";
    }
</script>

## How to Debug this System

In professional software development, you rarely have just one file to look at. You have to trace a request through multiple "layers".

### The Strategy: Tracing the Flow
1.  **Start at the UI**: What did the user see? What request did the browser send?
2.  **Check the API Gateway**: Did the request reach the server? If so, what did the server try to do?
3.  **Inspect the Backend Logic**: Did the code crash? Did it fail to talk to a dependency?
4.  **Verify the Infrastructure**: Are the databases, caches, and third-party services running?

### Common Red Herrings
Sometimes the error message you see isn't the real problem.
- A **500 error** in the browser just means "something went wrong on the server".
- A **Connection Refused** error in the API logs usually means the next service in line (the database) is down.

### Real-World Tip
When you find an error like `No space left on device`, the solution isn't just to restart the database. It's to find out *what* filled up the disk (usually logs) and clean it up!
