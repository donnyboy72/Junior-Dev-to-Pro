# Docker + Git Workflow

At professional software companies, Git and Docker are used together to build, test, and deploy applications.

---

# The Local Development Workflow

As a junior developer, your daily workflow will likely look like this:

### Step 1: Clone the Repository
```bash
git clone https://github.com/company/project
```

### Step 2: Navigate to Project
```bash
cd project
```

### Step 3: Start Development Environment
```bash
docker compose up
```

### Step 4: Edit Code
You make changes in your IDE. Docker often uses "volumes" to update the container automatically.

### Step 5: Commit and Push
```bash
git add .
git commit -m "Add login validation"
git push
```

---

# The Professional Deployment Pipeline

Once you push your code, a larger automated process begins.

```text
Developer (Your machine)
   ↓
Git Repository (GitHub/GitLab)
   ↓
CI/CD Pipeline (Automated Testing)
   ↓
Docker Image Built (Standardized Package)
   ↓
Docker Registry (Storage for Images)
   ↓
Production Servers (The App is Live!)
```

### Diagram

```text
Developer
   ↓
Git Commit
   ↓
CI/CD Pipeline
   ↓
Docker Image Built
   ↓
Docker Registry
   ↓
Production Servers
```

---

# Next Lesson

➡ **[Common Docker Mistakes](common-docker-mistakes.md)**
