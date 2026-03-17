# Volumes and Persistent Data

Docker containers are designed to be "disposable." When you stop and remove a container, everything inside its file system is deleted forever.

This is a problem for databases! You don't want your user data to disappear every time you restart your container. **Volumes** are the solution.

---

# What is a Volume?

A volume is a special folder that lives outside of the container's disposable file system. It's stored on your computer's hard drive and "mapped" into the container.

- **Analogy:** It's like an external hard drive. You can unplug it from one computer (container) and plug it into another, and your files are still there.

---

# Two Main Types of Data Persistence

### 1. Named Volumes (Best for Databases)
Managed by Docker. You give the volume a name, and Docker handles where it's stored on your disk.
```yaml
services:
  db:
    image: postgres
    volumes:
      - my-database-data:/var/lib/postgresql/data

volumes:
  my-database-data:
```

### 2. Bind Mounts (Best for Development)
You map a specific folder on your computer directly into the container.
```yaml
services:
  api:
    build: .
    volumes:
      - .:/app  # Maps current folder into /app in the container
```

---

# Why Use Volumes?

### 1. Persistence
Your data survives even if the container is removed.

### 2. Live-Reloading (Bind Mounts)
If you use a bind mount for your source code, your container will automatically see any changes you make in your editor, without needing a re-build.

### 3. Performance
Volumes are much faster for reading and writing large amounts of data than the container's disposable file system.

---

# Architecture Diagram (The Mapping)

```text
       [ YOUR COMPUTER ] (Permanent)
               ↓
       [ VOLUME (Data) ] --- (Mapped Into)
               ↓
       [ CONTAINER FILE SYSTEM ] (Disposable)
```

---

# How Junior Developers Encounter This

- **"Where did my database data go?":** (Forgetting to use a volume).
- **"The container isn't seeing my new code":** (Learning how to set up a bind mount).
- **"We need to back up the volume":** (Copying data out of a named volume).

---

# Common Beginner Mistakes

- **Forgetting the Path Inside the Container:** If you map your data to the wrong folder inside the container (e.g., `/var/lib/mysql` instead of `/var/lib/postgresql/data`), it won't work.
- **Permission Errors:** Sometimes your computer won't let Docker write to a specific folder. You may need to adjust the permissions of your local folder.
- **Storing Large Files in the Container:** Never store logs or large uploads inside the container's file system! Use a volume instead to avoid slowing down your app.

---

# Next Lesson

Now that we have persistent data, let's learn how our containers talk to each other:

➡ **[Container Networking](container-networking.md)**
