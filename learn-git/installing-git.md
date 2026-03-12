# Installing Git

Git must be installed on your computer before you can use it.

---

# Windows Installation

1. Go to the official Git website.

https://git-scm.com

2. Click **Download for Windows**

3. Run the installer.

Most of the default options are fine.

Important settings to keep:

- Use Git from the command line
- Use the default editor
- Enable symbolic links

4. Finish installation.

To verify Git is installed open **Command Prompt** or **PowerShell** and run:


git --version


You should see something like:


git version 2.44.0


---

# macOS Installation

The easiest method is using Homebrew.

Install Homebrew if needed:


/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
)"


Then install Git:


brew install git


Verify installation:


git --version


---

# Linux Installation

Ubuntu / Debian:


sudo apt update
sudo apt install git


Fedora:


sudo dnf install git


Verify installation:


git --version
