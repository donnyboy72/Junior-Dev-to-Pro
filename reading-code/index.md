---
layout: default
title: Reading Code
---

# Reading Code: The Most Important Skill You Aren't Taught

Welcome to the **Reading Code** module. As a junior developer, you might feel like your job is mostly *writing* code. In reality, professional developers spend about 90% of their time reading code—either their own, their teammates', or open-source libraries.

Being able to quickly parse, understand, and navigate a codebase is what separates "coders" from "engineers." This module will teach you the mental models and practical strategies to stop being intimidated by large files and start reading code like a pro.

---

### Why Learn This?

- **Faster Onboarding:** Get up to speed on a new project in days, not weeks.
- **Better Debugging:** You can't fix what you don't understand.
- **Learn from Masters:** Reading high-quality open-source code is the fastest way to improve your own style.
- **Confidence:** No more "code overwhelm" when opening a 1,000-line file.

---

### Table of Contents & Recommended Learning Order

1.  [**Why Reading Code Matters**](why-reading-code-matters.md)
    *Understand the "Reading vs. Writing" ratio and why this skill is your superpower.*
2.  [**How to Approach a New Codebase**](how-to-approach-a-new-codebase.md)
    *Your first 24 hours: What to look for and where to start.*
3.  [**Understanding Project Structure**](understanding-project-structure.md)
    *Common patterns (MVC, Hexagonal) and what those folder names actually mean.*
4.  [**Tracing Code Flow**](tracing-code-flow.md)
    *Following a request from the UI to the Database using "mental tracers."*
5.  [**Reading Functions and Classes**](reading-functions-and-classes.md)
    *Mental models for breaking down complex logic without getting lost.*
6.  [**Understanding Dependencies**](understanding-dependencies.md)
    *How to read `package.json` or `requirements.txt` to understand the ecosystem.*
7.  [**Debugging While Reading Code**](debugging-while-reading-code.md)
    *Using print statements and debuggers as "glasses" to see how code runs.*
8.  [**Working with Large Codebases**](working-with-large-codebases.md)
    *Strategies for dealing with "code overwhelm" and ignoring what doesn't matter.*
9.  [**Reading Other People's Code**](reading-other-peoples-code.md)
    *Empathy, different coding styles, and learning from others' mistakes (and wins).*
10. [**Common Reading Mistakes**](common-reading-mistakes.md)
    *Pitfalls like diving too deep too fast or ignoring the documentation.*

---

### Mental Model: The "Onion" Approach
When reading code, think of it like an onion. Start with the outer layers (folder structure, entry points) and only peel back deeper layers (individual function logic) when you have a specific reason to.

```text
    +---------------------------+
    |   Surface: Folder/Names   |  <-- Start Here
    |  +---------------------+  |
    |  |  Flow: Entry Points |  |  <-- Follow the path
    |  |  +---------------+  |  |
    |  |  | Logic: Details|  |  |  <-- Only if needed
    |  |  +---------------+  |  |
    |  +---------------------+  |
    +---------------------------+
```

Ready to start? Let's dive into [Why Reading Code Matters](why-reading-code-matters.md).
