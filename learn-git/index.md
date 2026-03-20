---
layout: default
title: Learn Git
---

# Learn Git

Git is one of the most important tools used in professional software development. It allows developers to track changes to code, collaborate with others, and safely experiment without losing work.

This section is designed to teach Git **from the ground up**, assuming you have never used it before.

By the end of this section you should understand:

- What Git is
- How to install Git
- How to create repositories
- How to track and commit changes
- How branching works
- How to work with remote repositories like GitHub
- How to fix common Git mistakes
- The workflows used by real development teams

---

# What is Git?

Git is a **version control system**.

Version control systems track changes to files over time.

Instead of having files like:
project_final
project_final2
project_final3_reallyfinal
Git allows you to track every change made to a project in a structured way.

This allows you to:

- See what changed
- Revert to previous versions
- Work with multiple developers
- Experiment without breaking the main project

---

# Git vs GitHub

This is one of the most common beginner confusions.

### Git

Git is the **tool installed on your computer** that tracks file changes.

### GitHub

GitHub is a **website that hosts Git repositories online**.

Git works locally on your computer. GitHub allows collaboration and backup.

---

# Git Basics

A typical Git workflow looks like this:
edit files
↓
git add
↓
git commit
↓
git push
Explanation:

### edit files
You modify your code.

### git add
You tell Git which files you want to include in the next snapshot.

### git commit
Git saves a snapshot of your project.

### git push
You send those changes to a remote repository like GitHub.

---

# Git Concepts

Understanding these terms will make learning Git much easier.

### Repository (repo)

A repository is a folder that Git tracks.

Example:
my-project/


Inside that folder Git stores a hidden directory:


.git/


This folder contains all version history.

---

### Commit

A commit is a **snapshot of your project at a specific moment**.

Good commits should include clear messages explaining what changed.

Example:


Add user login validation


---

### Branch

A branch is an independent line of development.

Example:


main
└── feature-login


Developers create branches to work on features without breaking the main codebase.

---

# Installing Git

Choose your operating system.

- [Installing Git on Windows](installing-git.md)
- [Installing Git on macOS](installing-git.md)
- [Installing Git on Linux](installing-git.md)

---

# Learning Path

Follow these sections in order if you are new to Git.

1. [Installing Git](installing-git.md)
2. [Configuring Git](configuring-git.md)
3. [Basic workflow](basic-workflow.md)
4. [Working with remote repositories](working-with-remotes.md)
5. [Branching](branching.md)
6. [Merging](merging.md)
7. [Resolving conflicts](resolving-conflicts.md)
8. [Fixing common mistakes](fixing-mistakes.md)
9. [**Interactive Visual Git Guide**](git-visualizer.md)

---

# What You Will Learn Next

Continue with the first step:

➡ **[Installing Git](installing-git.md)**
