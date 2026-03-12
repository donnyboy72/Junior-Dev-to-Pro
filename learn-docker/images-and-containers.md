# Images and Containers

Understanding the difference between an **Image** and a **Container** is fundamental to using Docker.

---

# Docker Image

A Docker Image is a read-only template that contains the instructions for creating a Docker container. 

Think of it as the **"Blueprint"** for your application.

### Key Characteristics:
- **Immutable:** Once built, it doesn't change.
- **Layered:** Images are made of layers (OS, Runtime, App Code).
- **Reusable:** One image can start many containers.

---

# Docker Container

A Docker Container is a running instance of an image. You can start, stop, move, or delete a container.

Think of it as the **"Running Application."**

### Key Characteristics:
- **Ephemeral:** They can be destroyed and recreated easily.
- **Isolated:** They run in their own secure environment.

---

# Docker System Visualization

```text
Docker Image (Blueprint)
   ↓
docker run
   ↓
Docker Container (Running Application)
```

**Example:**
- **Image:** `nginx`
- **Command:** `docker run nginx`
- **Container:** A running Nginx Web Server accessible on your network.

---

# Next Lesson

➡ **[Running Your First Container](running-your-first-container.md)**
