# Building Images

Once you've written your Dockerfile, you need to "build" it to create the final image. This is the process that actually executes the instructions in the Dockerfile and creates the image.

---

# How to Build an Image

The most common command you'll use is:

```bash
docker build -t my-app .
```

### Breakdown of the Command

- **`docker build`**: The command to start the build process.
- **`-t my-app`**: The "tag" (or name) for your image. This is how you'll refer to it later when you want to run it.
- **`.`**: This is the "build context." It tells Docker where your Dockerfile and code are located. The `.` means "the current folder."

---

# What Happens During a Build?

When you run `docker build`, Docker processes each instruction in your Dockerfile in order. Each step creates a new "layer" in the final image.

```text
       [ Step 1: FROM node:18 ] --- (Layer 1)
               ↓
       [ Step 2: WORKDIR /app ] --- (Layer 2)
               ↓
       [ Step 3: COPY . . ] ------- (Layer 3)
```

### Why Layers Matter (Caching!)

If you don't change anything in your first two steps and you run `docker build` again, Docker will reuse the cached layers for Step 1 and Step 2. This makes builds very fast.

---

# Checking Your Built Images

Once the build is complete, you can see your new image by running:

```bash
docker images
```

You should see your image name and its size in the list.

---

# How Junior Developers Encounter This

- **"Did you re-build the image?":** (Asking if you updated the container after changing your code).
- **"The image size is too big":** (Investigating why a container is taking up so much space).
- **"I'm getting a build error on Step 4":** (Debugging a specific instruction in the Dockerfile).

---

# Common Beginner Mistakes

- **Forgetting the `.` at the end:** The most common error! `docker build -t my-app` will fail because Docker doesn't know where the Dockerfile is.
- **Changing Instructions at the Top of the Dockerfile:** This "busts" the cache and makes the entire build slow. Always put things that change often (like your code) at the bottom.
- **Not Using a `.dockerignore` file:** By default, Docker copies *everything* in your folder, including large folders like `node_modules` or `.git`. A `.dockerignore` file tells Docker which files to skip, making your images much smaller and faster to build.

---

# Next Lesson

Now that you've built your own application, let's learn how to run multiple containers together:

➡ **[Docker Compose](docker-compose.md)**
