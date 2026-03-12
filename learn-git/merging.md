# Merging

Once you have finished working on a feature in its own branch, you need to bring those changes back into the main project. In Git, this process is called **merging**.

Merging combines the history and the files from two different branches into one.

---

# How to Merge

Merging always happens **into** your current branch. To merge your work from `feature-login` into `main`, you must follow these steps:

### 1. Switch to the target branch
First, move to the branch that you want to receive the changes (usually `main`):


git checkout main


### 2. Pull the latest changes
Before merging, ensure your local `main` is up to date with the remote:


git pull origin main


### 3. Run the merge command
Now, pull the changes from your feature branch into `main`:


git merge feature-login


---

# Types of Merges

Git handles merges in two primary ways depending on the history of the branches:

### Fast-Forward Merge
This happens if `main` hasn't changed since you created your feature branch. Git simply moves the pointer of the `main` branch forward to your latest commit. It is clean and automatic.

### Three-Way Merge
This happens if `main` has received new commits from other developers while you were working. Git creates a new "Merge Commit" that ties the two histories together.

---

# The Professional Workflow

In most companies, you don't merge your own code directly into `main` via the command line. Instead, you use a **Pull Request (PR)** on GitHub.

1.  **Push** your branch to GitHub.
2.  **Open a PR** to request that your branch be merged into `main`.
3.  **Review:** Other developers look at your code, leave comments, and suggest changes.
4.  **Merge:** Once approved, the PR is merged on the GitHub website.

*We will cover Pull Requests in detail in a later section.*

---

# What if something goes wrong?

Sometimes, Git cannot automatically merge files because the same line of code was changed in both branches. This is called a **Merge Conflict**.

Don't panic! This is a normal part of development.

---

# Summary of Merge Commands

| Command | Description |
| :--- | :--- |
| `git checkout main` | Switch to the branch you want to merge *into*. |
| `git merge <branch>` | Merges the specified branch into your current branch. |
| `git merge --abort` | Cancels a merge if you run into conflicts and want to start over. |

---

# Common Beginner Mistakes

### Merging the wrong way
Remember: `git merge feature-login` while you are on `main` brings feature code into main. If you are on `feature-login` and run `git merge main`, you are bringing main code into your feature.

### Not Pulling Before Merging
Always `git pull origin main` before you merge your work. This prevents you from merging into an outdated version of the project.

---

# Next Lesson

Sometimes Git gets confused when two people change the same line. When that happens, you have to step in and help.

Continue to:

➡ **[Resolving Conflicts](resolving-conflicts.md)**
