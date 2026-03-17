---
layout: default
title: Fixing Common Mistakes
---

# Fixing Common Mistakes

Everyone makes mistakes in Git. The good news is that Git is specifically designed to help you undo them.

In this lesson, we'll cover the most common scenarios and how to fix them safely.

---

# Scenario 1: Typo in your last commit message

If you just committed something but realized you made a typo in the message:

Run:


git commit --amend -m "The correct commit message"


This replaces your last commit with a new one that has the updated message.

---

# Scenario 2: You forgot to add a file to your last commit

If you committed your work but realized you forgot to include a specific file:

1.  **Stage the missing file:**
    

    git add forgotten-file.txt
    

2.  **Amend the last commit:**
    

    git commit --amend --no-edit
    

The `--no-edit` flag tells Git to keep the existing commit message.

---

# Scenario 3: You staged a file by mistake

If you ran `git add secret-key.txt` and want to "unstage" it before committing:

Run:


git reset HEAD secret-key.txt


The file will still be on your computer, but it is no longer prepared for the next commit.

---

# Scenario 4: You made a mess in a file and want to start over

If you modified a file but want to discard all your recent changes and go back to how it looked at the last commit:

Run:


git checkout -- filename.txt


*Note: In modern Git, you can also use `git restore filename.txt`.*

**Warning:** This permanently deletes your unsaved changes in that file!

---

# Scenario 5: You want to undo a commit that was already pushed

If you pushed a commit to GitHub but realize it was a mistake (e.g., it broke the build), you should **not** delete it. Instead, you should "revert" it.

1.  **Find the commit ID:**
    

    git log --oneline
    

2.  **Revert the commit:**
    

    git revert 1a2b3c4
    

This creates a **new commit** that does the exact opposite of the target commit, effectively undoing the changes while preserving the history.

---

# Scenario 6: The "Emergency" Button (Hard Reset)

If your local branch is a total mess and you want to throw away everything and reset it to match exactly what is on GitHub:

Run:


git fetch origin
git reset --hard origin/main


**Danger:** This will delete **all** local changes and commits that haven't been pushed. Use this only as a last resort.

---

# Summary of Fix-It Commands

| Command | What it does |
| :--- | :--- |
| `git commit --amend` | Modifies the very last commit. |
| `git reset HEAD <file>` | Unstages a file. |
| `git checkout -- <file>` | Discards local changes in a file. |
| `git revert <commit>` | Creates a new commit that undoes a previous one. |
| `git reset --hard <commit>` | Resets everything to a specific point (DANGEROUS). |

---

# Common Beginner Mistakes

### Panicking
Git is very hard to truly "break." Most actions can be undone if you stay calm and search for the right command.

### Force Pushing (`git push --force`)
Avoid using `--force` unless you are 100% sure what you are doing. It can overwrite other people's work on GitHub.

---

# Congratulations!

You have completed the core Git curriculum. You now know how to install, configure, track, share, branch, merge, and fix your work.

Go back to the:

➡ **[Git Module Overview](index.md)**

Or explore:

➡ **[Useful Git Commands](useful-commands.md)**
