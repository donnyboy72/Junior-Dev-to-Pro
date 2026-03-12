# Running Your First Container

Now that you understand images and containers, it's time to run one!

---

# Example: The "Hello World" of Docker

The simplest way to verify your Docker installation and learn the workflow is by running the `hello-world` image.

Run this command in your terminal:

```bash
docker run hello-world
```

---

# What Happens Behind the Scenes?

When you run `docker run hello-world`, Docker follows these steps:

1. **Check Locally:** Docker looks for the `hello-world` image on your computer.
2. **Download (Pull):** If it's missing, it automatically downloads it from Docker Hub.
3. **Create:** Docker creates a new container based on that image.
4. **Run:** The container starts and runs a simple program that prints "Hello from Docker!"
5. **Exit:** The program finishes, and the container stops.

### Visualization

```text
docker run hello-world
      ↓
Pull image from Docker Hub
      ↓
Create container
      ↓
Run program
```

---

# Next Lesson

➡ **[Managing Containers](managing-containers.md)**
