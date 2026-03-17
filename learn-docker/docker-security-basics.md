---
layout: default
title: Docker Security Basics
---

# Docker Security Basics

Docker provides built-in security features, but it's still your responsibility to follow best practices to keep your application and server safe.

---

# Key Security Principles in Docker

### 1. The Principle of Least Privilege
Don't run your application as the "root" user inside a container. If a hacker breaks into a root-access container, they can potentially control your entire server.
- **Tip:** Create a non-root user in your Dockerfile and switch to it using the `USER` instruction.

### 2. Scanning Images for Vulnerabilities
Docker Hub and other registries can automatically scan your images for known security bugs in your dependencies.
- **Example:** Run `docker scan <image_name>` to see if your image has any vulnerabilities.

### 3. Keeping Images Up to Date
Always use specific, updated versions of your base images.
- **Bad:** `FROM node:latest` (You don't know what's in 'latest'!)
- **Good:** `FROM node:18-alpine` (A specific, small, and more secure version).

### 4. Don't Store Secrets in Images
Never put API keys or passwords directly in your Dockerfile! Anyone with access to the image can read them.
- **Tip:** Use an `.env` file and pass secrets through environment variables at runtime.

---

# Architecture Diagram (The Security Layers)

```text
       [ THE INTERNET ]
               ↓ (Firewall)
       [ YOUR SERVER ]
               ↓ (Docker)
       [ CONTAINER (Non-root) ]
               ↓ (Isolated Process)
       [ YOUR APPLICATION ]
```

---

# Why Docker Security Matters

### 1. Protection from Attacks
A secure container is a "sandbox" that keeps a small bug from becoming a massive security breach.

### 2. Data Privacy
Protecting your database credentials and API keys is critical for your users' privacy.

### 3. Stability
A secure and isolated container is less likely to be affected by other things running on the same server.

---

# How Junior Developers Encounter This

- **"Is it safe to use this image from Docker Hub?":** (Checking if an image is "Official" or "Verified").
- **"I need to add a non-root user":** (Learning how to use the `USER` instruction).
- **"We need to scan the image":** (Using `docker scan` before deploying to production).

---

# Common Beginner Mistakes

- **Running as Root:** Almost every official Docker image starts as the "root" user. You must explicitly change this!
- **Hardcoding Secrets:** Putting your Stripe API key or database password directly in your code or Dockerfile.
- **Ignoring Security Alerts:** Docker and GitHub will often tell you if your image has a known vulnerability. Don't ignore these!

---

# Next Lesson

Finally, let's look at the most common Docker mistakes and how to avoid them:

➡ **[Common Docker Mistakes](common-docker-mistakes.md)**
