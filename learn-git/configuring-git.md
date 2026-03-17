---
layout: default
title: Configuring Git
---

# Configuring Git

After installing Git, the next step is configuring it.

Configuration tells Git who you are so that commits can be properly tracked.

Every commit records:

- the author's name
- the author's email
- the commit message
- the timestamp

Without configuring Git, your commits may not be properly associated with you.

---

# Checking Your Current Configuration

Before setting anything, you can check your current configuration.

Open a terminal and run:


git config --list


This command shows all Git configuration values currently set on your system.

If Git was just installed, this list may be very small.

---

# Setting Your Name

Your name appears in commits.

Run:


git config --global user.name "Your Name"


Example:


git config --global user.name "Jane Developer"


---

# Setting Your Email

Your email is also recorded in commits.

Run:


git config --global user.email "youremail@example.com"


Example:


git config --global user.email "jane.dev@gmail.com"


If you use GitHub, you should use the same email associated with your account.

---

# Understanding the --global Flag

The `--global` flag means the setting applies to **all repositories on your computer**.

Git configuration exists at three levels:

### System

Applies to every user on the computer.

### Global

Applies to your user account.

### Local

Applies to a specific repository.

Most developers set their name and email using `--global`.

---

# Verifying Your Configuration

You can check the values you set with:


git config user.name
git config user.email


Example output:


Jane Developer
jane.dev@gmail.com


---

# Setting a Default Editor

Git sometimes opens a text editor for writing commit messages.

You can choose your preferred editor.

### VS Code


git config --global core.editor "code --wait"


### Nano (simple terminal editor)


git config --global core.editor "nano"


### Vim


git config --global core.editor "vim"


VS Code is recommended for beginners.

---

# Setting Default Branch Name

Many modern repositories use `main` instead of `master`.

You can set the default branch name with:


git config --global init.defaultBranch main


Now whenever you create a new repository, Git will use `main`.

---

# Viewing All Global Settings

To view all global Git configuration values:


git config --global --list


Example output:


user.name=Jane Developer
user.email=jane.dev@gmail.com

core.editor=code --wait
init.defaultBranch=main


---

# Where Git Stores Configuration

Git stores configuration files in different locations depending on your system.

### Global config location

Linux / macOS:


~/.gitconfig


Windows:


C:\Users\YourName\.gitconfig


You normally do not need to edit this file manually.

---

# Common Beginner Mistakes

### Forgetting to set name and email

This causes commits to appear without proper authorship.

### Using the wrong email

If your email does not match your GitHub account, commits may not appear on your profile.

### Setting configuration locally instead of globally

This means the settings only apply to one repository.

---

# Next Lesson

Continue learning Git with the next step:

➡ **[Basic Git Workflow](basic-workflow.md)**

This lesson will teach you how to:

- create a repository
- track files
- commit changes
- view project history
