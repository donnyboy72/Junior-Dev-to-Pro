# Basic Git Workflow

Now that Git is installed and configured, you are ready to start using it to track changes in a project.

In this lesson you will learn the **basic Git workflow**, which is the sequence of steps developers use every day when working with Git.

The basic workflow looks like this:


edit files
↓
git add
↓
git commit
↓
git push


Each step has a specific purpose that we will explore below.

---

# Step 1: Create a Repository

A **repository** (often called a *repo*) is a folder that Git tracks.

First create a new folder for a project.

Example:


mkdir my-first-project
cd my-first-project


Now initialize Git inside that folder.


git init


Output will look something like:


Initialized empty Git repository in /my-first-project/.git/


This creates a hidden folder called:


.git


This folder stores **all version history for the project**.

Your folder now looks like this:


my-first-project/
└── .git/


Git is now tracking this project.

---

# Step 2: Check Repository Status

Before adding files, it's helpful to see the current status.

Run:


git status


Example output:


On branch main

No commits yet

nothing to commit


This command shows:

- what files are tracked
- what files changed
- what files are ready to commit

You will use `git status` **constantly** while working with Git.

---

# Step 3: Add a File

Create a file in your project.

Example:


touch hello.txt


Add some text to the file.

Example:


Hello Git


Now check the repository status again:


git status


Output might show:


Untracked files:
hello.txt


This means Git sees the file but is **not yet tracking it**.

---

# Step 4: Stage the File

To tell Git you want to include a file in the next commit, you must **stage it**.

Run:


git add hello.txt


Now check status again:


git status


You should see:


Changes to be committed:
new file: hello.txt


The file is now **staged**.

---

# Step 5: Create a Commit

A **commit** saves a snapshot of your project.

Run:


git commit -m "Add hello.txt"


Example output:


[main (root-commit) 1a2b3c4] Add hello.txt
1 file changed, 1 insertion(+)


You just created your **first commit**.

---

# Step 6: View Commit History

To see previous commits run:


git log


Example output:


commit 1a2b3c4
Author: Your Name
Date: Today

Add hello.txt


This shows:

- commit ID
- author
- date
- commit message

---

# Making Another Change

Edit the file again.

Example:


Hello Git
This is my second change


Check status:


git status


Git will show the file was modified.

Stage the change:


git add hello.txt


Commit the change:


git commit -m "Update hello.txt with additional text"


Now view the history again:


git log


You will now see **two commits**.

---

# Understanding the Staging Area

Git has three main areas:


Working Directory
↓
Staging Area
↓
Repository


### Working Directory

Where you edit files.

### Staging Area

Files prepared for the next commit.

### Repository

Where commits are permanently stored.

---

# Adding Multiple Files

To stage all changed files:


git add .


The `.` means **add everything in the current directory**.

Be careful when using this command.

Always check with:


git status


before committing.

---

# Common Beginner Mistakes

### Forgetting to commit

Running `git add` does not save changes. You must also run `git commit`.

### Writing bad commit messages

Bad example:


update


Good example:


Add login validation


### Not checking status

Always run:


git status


to understand what Git is doing.

---

# Summary

In this lesson you learned the basic Git workflow:


git init
git status
git add
git commit
git log


These commands form the foundation of Git.

---

# Next Lesson

Now that you know how to commit changes locally, the next step is learning how to work with **remote repositories** such as GitHub.

Continue to:

➡ **[Working With Remotes](working-with-remotes.md)**
