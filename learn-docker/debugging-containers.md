---
layout: default
title: Debugging Containers
---

# Debugging Containers

Debugging in Docker can feel like you're looking into a "black box." But with the right tools, you can find and fix problems just like you would on your local machine.

---

# The Most Important Debugging Tools

### 1. `docker logs <container_id>`
Always start here! The logs will show you any errors the application has printed to the console.

### 2. `docker exec -it <container_id> sh` (or `bash`)
This is the most powerful tool. It allows you to "log in" to the running container so you can explore the file system, check environment variables, and run tests.

### 3. `docker-compose logs`
If you're using Docker Compose, this command will show you the combined logs from *all* your containers at once.

### 4. `docker inspect <container_id>`
This gives you a massive JSON object with every detail about the container: its IP address, volume mappings, and environment variables.

---

# Architecture Diagram (Inside the Black Box)

```text
       [ YOUR COMPUTER ]
               ↓
    [ docker logs ] --- (1) "What happened?"
               ↓
    [ docker exec ] --- (2) "Go inside and look."
               ↓
    [ docker inspect ] --- (3) "Check the configuration."
```

---

# Why Debugging Containers is Different

### 1. Isolation
You can't just open a file in your editor if it's inside a container. You have to use `docker exec` or a volume.

### 2. Ephemeral Data
If you make a change inside a running container, it will be deleted as soon as the container stops! Always make your changes in the Dockerfile, not inside the running container.

### 3. Environment Variables
Containers often fail because of a missing or incorrect environment variable. Use `docker exec <id> env` to see exactly what's set inside.

---

# How Junior Developers Encounter This

- **"The container keeps crashing":** (Checking logs for an error message).
- **"The database connection is failing":** (Logging into the container to test the connection manually).
- **"Why is the file not updating?":** (Investigating why a volume or bind mount isn't working).

---

# Common Beginner Mistakes

- **Not Checking the Logs:** Many developers just keep restarting the container, hoping it will fix itself. It won't!
- **Changing Code Inside a Container:** Remember that containers are disposable. If you fix a bug inside a running container, your fix will be lost. Fix the code on your computer and rebuild the image.
- **Forgetting that `localhost` is Different:** If your API is trying to connect to a database on your computer, use `host.docker.internal` (on Windows/Mac) instead of `localhost`.

---

# Next Lesson

Learn how to keep your containers safe:

➡ **[Docker Security Basics](docker-security-basics.md)**
