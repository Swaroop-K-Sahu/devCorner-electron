# React Desktop Application Shell

A native cross-platform desktop wrapper application built with **Electron** that packages a deployed live React web application into a sleek, standalone desktop app interface for Windows, macOS, and Linux.

## 🚀 Features

- **Native App Wrapper:** Wraps the live production web URL cleanly inside an isolated native Chromium shell.
- **Cross-Platform Readiness:** Custom configuration pipelines optimized to output standalone installation packages for all major desktop environments.
- **Instant Updates:** Updates pushed to the primary web hosting provider reflect instantly within the users' desktop windows without requiring an app update download.
- **Production Asset Isolation:** Pre-configured rules ensuring bulky build artifacts stay safely outside of active Git source control pipelines.

---

## 🛠️ System Prerequisites

Ensure you have the following frameworks installed on your host local environment:
- **Node.js** (LTS Version recommended)
- **npm** (Comes bundled along with Node.js)

---

## 💻 Local Setup & Development

1. **Clone or Download the Project Repository:**
   ```bash
   git clone <your-repository-url>
   cd <your-project-directory-name>
   ```

2. **Install Project Dependencies:**
   ```bash
   npm install
   ```

3. **Launch the Application in Live Development Mode:**
   ```bash
   npm start
   ```
   This spins up the active configuration workspace and opens the native window frame pointing directly to the designated web infrastructure target coordinates.

---

## 📦 Distribution Packaging (Building the Installers)

To compile the source properties and compress the environment shell wrapper layer down into cross-platform installation wizard executables, execute the packaging runtime script:

```bash
npm run build
```

Once the terminal processing routine finishes successfully, check your project root directory. You will find a brand new **`/release`** output folder housing your ready-to-distribute deployment payloads:

- **Windows:** `.exe` installer setup wizard
- **macOS:** `.dmg` Apple disk image installer (Requires native compilation on a Mac host)
- **Linux:** Standalone `.AppImage` package / `.deb` installation framework

### Cross-Compiling Target Shortcuts
If you are developing on a Mac or Linux host machine and need to cross-compile specific runtime target files dynamically, use these shortcut directives:
```bash
# Package a dedicated Windows distribution binary (.exe)
npx electron-builder --win --x64

# Package dedicated Linux distribution formats (.deb / .AppImage)
npx electron-builder --linux
```

---

## ⚠️ Important Production Considerations

### Network Dependency
Because this application loads assets dynamically directly from a remote live web server pipeline, an active internet infrastructure link is required by host machines to boot and run the workspace successfully.

### Git Tracking Security
Bulky machine-compiled application installers output inside the `/release` folder are automatically blocked from tracking by configurations active in the project's `.gitignore` file. Always manage distribution copies using an external deployment storage hub or using official **GitHub Releases** platforms rather than pushing binary elements directly onto active branch history lines.
