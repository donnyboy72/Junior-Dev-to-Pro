---
layout: default
title: Docker Compose
---

# Docker Compose

In a real project, your application usually needs more than just one container. You might need an API server, a database, and a cache.

**Docker Compose** is a tool for defining and running multi-container applications. You describe all your containers in a single file called `docker-compose.yml`.

---

# Why Use Docker Compose?

Instead of typing 10 different `docker run` commands every time you want to start your project, you can just type:

```bash
docker-compose up
```

This starts all your containers at once and handles the networking between them automatically.

---

# Example `docker-compose.yml` File

```yaml
version: '3.8'

services:
  # The API Server
  api:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db

  # The Database
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: mysecretpassword
```

---

# Key Docker Compose Commands

### 1. `docker-compose up`
Starts all the containers defined in your `docker-compose.yml` file.
- **Tip:** Use `docker-compose up -d` to run them in the background.

### 2. `docker-compose down`
Stops and removes all the containers (and the networks they were using).

### 3. `docker-compose ps`
Shows you the status of all the containers in your project.

### 4. `docker-compose logs`
Shows you the combined output from all your containers.

---

# Architecture Diagram (The Multi-Container System)

```text
       [ DOCKER COMPOSE ]
               ↓ (Manages)
       ---------------------------
       ↓                         ↓
   [ API Container ]         [ DB Container ]
       ↓ (Talks to)              ↓
       [----------------- Docker Network -----------------]
```

---

# How Junior Developers Encounter This

- **"I can't get the database to start":** (Checking the `db` service in the `docker-compose.yml` file).
- **"I need to add a new service":** (Updating the `services` section in the file).
- **"The API is starting before the database is ready":** (Learning about `depends_on`).

---

# Common Beginner Mistakes

- **Indentation Errors in YAML:** YAML files are very strict about indentation. If your spaces aren't perfectly aligned, Docker Compose will fail.
- **Forgetting to Rebuild:** If you change your code and run `docker-compose up`, Docker will reuse your old image! Use `docker-compose up --build` to force it to re-build your images.
- **Hardcoding Passwords:** Don't put your database passwords directly in your `docker-compose.yml` file. Use an `.env` file instead.

---

# Next Lesson

Once your database is running, you need to make sure its data doesn't disappear when the container stops:

➡ **[Volumes and Persistent Data](volumes-and-persistent-data.md)**
