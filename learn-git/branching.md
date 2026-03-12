# Branching

Branching is one of Git's most powerful features. It allows you to step away from the "main" line of work and try something new without breaking anything.

In a professional setting, the `main` branch is usually protected and contains "production-ready" code. Developers work on separate branches for every feature or bug fix.

---

# What is a Branch?

Think of your project as a tree. The `main` branch is the trunk. A **branch** is exactly what it sounds like: a separate path that grows out from the trunk.

Eventually, when your work on a branch is finished, you "merge" it back into the trunk (the `main` branch).

---

# Why Use Branches?

1.  **Safety:** You can experiment without accidentally deleting or breaking working code.
2.  **Collaboration:** Multiple developers can work on different features at the same time without interfering with each other.
3.  **Organization:** You can keep your work separated. One branch for a login fix, another for a new landing page.

---

# Core Branching Commands

### Creating a New Branch
To create a branch called `feature-login`:


git branch feature-login


### Switching to a Branch
Creating the branch doesn't move you onto it. To start working on it:


git checkout feature-login


*Note: Modern Git also uses `git switch feature-login`.*

### Shortcut: Create and Switch
Most developers do both in one step:


git checkout -b feature-login


### Listing All Branches
To see what branches exist and which one you are currently on:


git branch


The branch with the `*` next to it is your current branch.

---

# Pushing a Branch to GitHub

Just like commits, branches only exist on your computer until you push them.

Run:


git push origin feature-login


Once pushed, other developers can see your branch on GitHub and even "check it out" themselves.

---

# Deleting a Branch

Once a feature is merged and you no longer need the branch, you should delete it to keep your project clean.

Run:


git branch -d feature-login


---

# Best Practices

- **Use Descriptive Names:** Instead of `test` or `stuff`, use `fix-header-bug` or `add-user-profile`.
- **One Task Per Branch:** Don't fix five different bugs on one branch. Keep them focused.
- **Commit Often:** Even on a branch, small commits are better than one giant "finished everything" commit.

---

# Common Beginner Mistakes

### Working on the Wrong Branch
It’s very common to start coding only to realize you are still on `main`. Always run `git status` or `git branch` before you start working!

### Forgetting to Switch After Creating
If you run `git branch new-feature`, you are still on your old branch. Don't forget to `checkout` or use the `-b` shortcut.

---

# Next Lesson

Creating branches is only half the battle. Once your work is done, you need to bring those changes back into the main project.

Continue to:

➡ **[Merging](merging.md)**
