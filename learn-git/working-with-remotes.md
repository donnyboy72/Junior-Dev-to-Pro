---
layout: default
title: Working with Remotes
---

# Working with Remotes

So far, you have been working with Git entirely on your own computer. In a professional environment, you need to share your code with others and back it up online. This is where **remotes** come in.

A **remote** is a version of your project that is hosted on the internet or another network.

---

# What is GitHub?

While Git is the tool that tracks changes, **GitHub** is a website that hosts your Git repositories. It acts as the "Central Hub" for your code.

Other popular hosts include GitLab and Bitbucket, but GitHub is the industry standard.

---

# Connecting a Local Repo to GitHub

If you have a project on your computer and want to put it on GitHub, follow these steps:

1. Create a new repository on [GitHub.com](https://github.com).
2. Copy the **Repository URL** (it ends in `.git`).
3. In your local terminal, link your local repo to GitHub:


git remote add origin https://github.com/your-username/your-repo-name.git


### What is "origin"?
`origin` is just a nickname for your remote URL. You could name it anything, but `origin` is the standard convention.

---

# Pushing Changes

Once your local repo is linked, you can "push" your commits up to GitHub.

Run:


git push -u origin main


### Breakdown:
- `push`: Send local commits to the remote.
- `-u`: Sets the "upstream" tracking, so next time you can just type `git push`.
- `origin`: The nickname for your GitHub repo.
- `main`: The branch you are pushing.

---

# Cloning a Repository

If you want to download an existing project from GitHub to your computer, you **clone** it.

Run:


git clone https://github.com/username/project.git


This does three things automatically:
1. Creates a folder named `project`.
2. Initializes Git inside it.
3. Downloads all the files and the entire commit history.

---

# Pulling Changes

If someone else (or you, from another computer) has pushed changes to GitHub, you need to "pull" those changes down to your local machine.

Run:


git pull origin main


This fetches the changes from GitHub and merges them into your local files.

---

# Summary of Remote Commands

| Command | Description |
| :--- | :--- |
| `git remote add origin <url>` | Links your local repo to a remote URL. |
| `git push` | Sends local commits to the remote. |
| `git pull` | Downloads and merges remote changes. |
| `git clone <url>` | Downloads an entire repository for the first time. |
| `git remote -v` | Lists the remote URLs linked to your project. |

---

# Common Beginner Mistakes

### Forgetting to Push
Committing only saves changes **locally**. If your computer crashes or you want others to see your work, you **must push**.

### Authentication Errors
If Git asks for a password on Windows/Mac, you usually need to set up a **Personal Access Token (PAT)** or use **SSH keys**. GitHub no longer accepts standard account passwords for command-line Git.

### Pushing to the Wrong Branch
Always check which branch you are on with `git status` before pushing.

---

# Next Lesson

Now that you can share your code, it's time to learn how to work on new features without breaking your main project.

Continue to:

➡ **[Branching](branching.md)**
