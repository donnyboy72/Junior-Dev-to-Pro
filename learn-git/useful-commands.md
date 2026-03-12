# Useful Git Commands Reference

This page serves as a quick-reference "cheat sheet" for Git commands you'll use frequently as a developer.

---

## 🔍 Inspection & Comparison

| Command | Description |
| :--- | :--- |
| `git status` | See which files are changed, staged, or untracked. |
| `git log --oneline --graph --all` | See a visual tree of all branches and commits. |
| `git diff` | See changes in your working directory (not yet staged). |
| `git diff --staged` | See changes that are staged and ready to commit. |
| `git show <commit-id>` | See the specific changes made in a single commit. |
| `git blame <file>` | See who changed every line of a file and when. |

---

## 📥 Stashing (Saving Work for Later)

Sometimes you're in the middle of something and need to switch branches, but you aren't ready to commit. **Stashing** lets you "hide" your changes temporarily.

| Command | Description |
| :--- | :--- |
| `git stash` | Save your local changes and reset your branch to clean. |
| `git stash list` | See all your saved stashes. |
| `git stash pop` | Re-apply your last stash and delete it from the list. |
| `git stash apply` | Re-apply your last stash but keep it in the list. |
| `git stash drop` | Delete a specific stash. |

---

## 🛠️ Cleaning Up

| Command | Description |
| :--- | :--- |
| `git clean -fd` | Delete all untracked files and directories (use with caution!). |
| `git branch -d <name>` | Delete a local branch that has been merged. |
| `git branch -D <name>` | Force delete a local branch (even if not merged). |
| `git remote prune origin` | Remove local references to branches that were deleted on GitHub. |

---

## ⌨️ Productivity Aliases

You can create shortcuts for long commands to save time. Add these to your Git config:


# Example: Create an alias 'st' for 'status'
git config --global alias.st status

# Example: Create an alias 'co' for 'checkout'
git config --global alias.co checkout

# A very popular alias for a pretty log
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"


Now you can just type `git lg` to see a beautiful commit history!

---

## 🚀 Advanced (Use with Caution)

| Command | Description |
| :--- | :--- |
| `git cherry-pick <commit>` | Copy a specific commit from one branch into another. |
| `git rebase main` | Move your branch's starting point to the latest commit on `main`. |
| `git commit --amend` | Edit the last commit message or add more files to it. |

---

# What's Next?

You have now completed the entire Git reference section. 

➡ **[Back to the Landing Page](../index.html)**
