---
layout: default
title: "Navigating Files and Directories"
---

## Know Where You Are

A relative path starts from your current directory. An absolute path starts from the filesystem root. Before running a command that changes files, inspect the location:

```bash
pwd
ls -la
mkdir -p terminal-practice
cd terminal-practice
printf '%s\n' 'hello developer' > notes.txt
cat notes.txt
cp notes.txt backup.txt
mv backup.txt archived-notes.txt
```

Run this in a disposable practice directory. `>` creates or overwrites a file. Quote paths containing spaces, such as `cd "practice project"`. `.` means the current directory and `..` means its parent.

Use `less filename` to read a long file; press `q` to quit. Use `head` and `tail` for its beginning or end. To understand a command, consult `man command` or its supported help option before guessing flags.

Deletion through `rm` usually does not move files to a desktop trash folder. Prefer moving an uncertain file aside until you know it is no longer needed. Avoid copied recursive deletion commands when you do not understand their target.

## Practice

Create a directory whose name contains a space, copy `notes.txt` into it, and display the copy. **Check:** explain the difference between `notes.txt` and `../notes.txt` after entering that directory.

---

[Module overview](index.html) · [Next: Pipes, Redirection, and Search](pipes-and-search.html)
