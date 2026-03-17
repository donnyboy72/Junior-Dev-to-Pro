# Managing Containers

Once you've started your first container, you need to know how to interact with it, check its status, and properly shut it down.

---

# Key Docker Commands for Managing Containers

### 1. `docker ps` (List Running Containers)
This command shows you all the containers that are currently active.
- **Tip:** Use `docker ps -a` to see *all* containers, including those that have stopped.

### 2. `docker stop <container_id>`
Gracefully shuts down a running container. It's like turning off a computer correctly.

### 3. `docker start <container_id>`
Restarts a container that was previously stopped. All its settings and files stay the same.

### 4. `docker rm <container_id>`
Deletes a container permanently. This is useful for cleaning up your system after you're done with a task.
- **Note:** You must stop a container before you can remove it.

### 5. `docker logs <container_id>`
Shows everything that has been printed to the console inside the container. This is your most important tool for debugging!

---

# The Lifecycle of a Container

```text
       [ CREATE ] (docker run)
           ↓
       [ RUNNING ] (active instance)
           ↓
       [ STOPPED ] (docker stop)
           ↓
       [ REMOVED ] (docker rm)
```

---

# Interacting with a Running Container

Sometimes you need to "log in" to a container to see what's happening inside.

```bash
docker exec -it <container_id> sh
```
This command opens a terminal inside the running container. You can now explore the file system, check environment variables, and run commands.

---

# How Junior Developers Encounter This

- **"Is the server running?":** (Using `docker ps` to verify).
- **"I need to check the error message":** (Using `docker logs`).
- **"I want to clean up my machine":** (Using `docker rm` on old containers).

---

# Common Beginner Mistakes

- **Leaving Thousands of Stopped Containers:** Every time you run `docker run`, a new container is created. If you don't use `docker rm`, your hard drive will fill up!
- **Not Using Names:** Instead of remembering a long ID like `afdd53b`, you can name your container with `--name my-cool-app` when you run it.
- **Stopping Docker Desktop Instead of Containers:** While this works, it's like unplugging the whole server rack instead of just turning off one server.

---

# Next Lesson

Learn how to create your own custom images from scratch:

➡ **[Dockerfile Basics](dockerfile-basics.md)**
