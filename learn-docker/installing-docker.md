# Installing Docker

Docker is a powerful tool, but before you can start containerizing your applications, you need to get it running on your local machine.

The most common way for developers to use Docker on their personal computers is through **Docker Desktop**.

---

# What is Docker Desktop?

Docker Desktop is an easy-to-install application for your Mac or Windows environment that enables you to build and share containerized applications and microservices. It includes:
- Docker Engine
- Docker CLI client
- Docker Compose
- Docker Content Trust
- Kubernetes
- Docker Dashboard (a GUI to manage your containers)

---

# Installation Steps

### 1. For Windows Users
1.  **Check Requirements:** Ensure you have Windows 10 or 11 (64-bit). You'll also need to enable the **WSL 2 (Windows Subsystem for Linux)** feature.
2.  **Download:** Go to the [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/) page.
3.  **Install:** Run the installer and follow the prompts. Make sure "Use WSL 2 instead of Hyper-V" is checked.
4.  **Restart:** You will likely need to restart your computer.

### 2. For macOS Users
1.  **Check Requirements:** Determine if you have an Intel chip or an Apple Silicon (M1/M2/M3) chip.
2.  **Download:** Go to the [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/) page and choose the correct version for your chip.
3.  **Install:** Drag the Docker icon into your Applications folder.
4.  **Run:** Open Docker from your Applications.

### 3. For Linux Users
Installation on Linux is different because Docker runs natively. You don't use "Docker Desktop" (though it is available); instead, you install the **Docker Engine**.
1.  Follow the specific guide for your distribution: [Ubuntu](https://docs.docker.com/engine/install/ubuntu/), [Debian](https://docs.docker.com/engine/install/debian/), [CentOS](https://docs.docker.com/engine/install/centos/), or [Fedora](https://docs.docker.com/engine/install/fedora/).
2.  **Post-install:** Make sure to follow the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) so you don't have to type `sudo` before every docker command.

---

# Verifying the Installation

Once installed, open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
docker --version
```

If you see something like `Docker version 24.0.7, build afdd53b`, you're good to go!

To test that everything is working perfectly, try running the "hello-world" container:

```bash
docker run hello-world
```

---

# Architecture Diagram (Where Docker Lives)

```text
       [ YOUR APPLICATIONS ]
               ↓
       [ DOCKER DESKTOP ]
               ↓
       [ VIRTUAL MACHINE (Linux Kernel) ]
               ↓
       [ YOUR OPERATING SYSTEM (Windows/Mac) ]
```

---

# Common Beginner Mistakes

- **Not enabling WSL 2 on Windows:** Docker will be extremely slow or won't start at all without it.
- **Forgetting to start Docker Desktop:** Docker isn't always running in the background. If you get a "cannot connect to the Docker daemon" error, make sure the Docker Desktop app is open.
- **Running out of Disk Space:** Docker images can take up a lot of space. If your installation fails, check your hard drive!

---

# Next Lesson

Now that you have Docker installed, let's learn the "language" of containers:

➡ **[Docker Terminology](docker-terminology.md)**
