# Resolving Conflicts

A **Merge Conflict** happens when Git cannot automatically determine which changes to keep. This usually occurs when two people (or two branches) modify the **exact same line** of the same file.

While they can be intimidating at first, conflicts are a normal part of the development process.

---

# How to Identify a Conflict

When you run `git merge` and a conflict occurs, Git will stop and tell you:


CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.


If you run `git status`, you will see the files listed as **"both modified"**.

---

# Understanding Conflict Markers

Git modifies the conflicted files and adds special "markers" to show you exactly where the problem is.

Example of a conflict in a file:


<<<<<<< HEAD
<h1>Welcome to my App</h1>
=======
<h1>Welcome to jrDev</h1>
>>>>>>> feature-branch-name


### Breakdown:
- `<<<<<<< HEAD`: Everything between this and the `=======` is the version currently on your **target branch** (e.g., `main`).
- `=======`: The divider between the two conflicting versions.
- `>>>>>>> feature-branch-name`: Everything between the `=======` and this marker is the version from the **branch you are merging in**.

---

# How to Fix a Conflict

To resolve the conflict, you must manually edit the file:

1.  **Open the file** in your code editor (VS Code makes this very easy with visual buttons).
2.  **Decide which version to keep.** You can keep the "Current Change," the "Incoming Change," or even a mix of both.
3.  **Delete the markers.** Remove the `<<<<<<<`, `=======`, and `>>>>>>>` lines entirely.
4.  **Save the file.**

---

# Completing the Merge

Once you have fixed all the conflicts in all the files:

1.  **Stage the files:**
    

    git add <file-name>
    

2.  **Commit the resolution:**
    

    git commit -m "Resolve merge conflict in index.html"
    

*Note: If you are using a modern terminal, Git will often have a default merge message ready for you if you just type `git commit`.*

---

# Pro Tips for Conflicts

- **Use a Good Editor:** VS Code has built-in tools that highlight conflicts in color and give you one-click buttons like "Accept Current Change" or "Accept Both Changes."
- **Communicate:** If you aren't sure which code is correct, talk to the person who wrote the other version!
- **Stay Calm:** If you get overwhelmed, you can always run `git merge --abort` to reset everything to how it was before the merge started.

---

# Common Beginner Mistakes

### Leaving the Markers in the Code
If you forget to delete the `<<<<<<<` or `=======` lines, your code will likely break or fail to compile. Always double-check your files before staging.

### Staging Without Reviewing
Don't just run `git add .` and commit. Make sure you actually looked at every conflict to ensure the final code makes sense.

---

# Next Lesson

We all make mistakes. Whether it's a typo in a commit message or accidentally deleting a file, Git has your back.

Continue to:

➡ **[Fixing Common Mistakes](fixing-mistakes.md)**
