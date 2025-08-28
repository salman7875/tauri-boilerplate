const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, shell } = require("electron");

const isDev = process.env.IS_DEV === "true";

console.log(__dirname, "✅");

function createWindow() {
  const preloadPath = path.join(__dirname, "preload.js");
  console.log("🔍 Preload path:", preloadPath);
  console.log("🔍 Preload file exists:", fs.existsSync(preloadPath));

  if (!fs.existsSync(preloadPath)) {
    console.error("❌ Preload file not found at:", preloadPath);
    console.log("🔍 Files in __dirname:", fs.readdirSync(__dirname));
  }
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    autoHideMenuBar: true,
    resizable: false,
    frame: true,
    webPreferences: {
      preload: preloadPath,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
    },
  });

  mainWindow.webContents.on("preload-error", (event, preloadPath, error) => {
    console.error("❌ Preload error:", error);
  });

  mainWindow.webContents.once("dom-ready", () => {
    console.log("✅ DOM ready");
  });

  mainWindow.webContents.once("did-finish-load", () => {
    console.log("✅ Page loaded");

    // Fixed debugging - only check for existence, don't try to serialize functions
    setTimeout(() => {
      mainWindow.webContents
        .executeJavaScript(
          `
        console.log("🔍 From renderer - electronAPI exists:", typeof window.electronAPI !== 'undefined');
        console.log("🔍 From renderer - electronAPI type:", typeof window.electronAPI);
        if (window.electronAPI) {
          console.log("🔍 From renderer - available methods:", Object.keys(window.electronAPI));
          // Test the API
          if (window.electronAPI.test) {
            try {
              const result = window.electronAPI.test();
              console.log("🧪 From renderer - test result:", result);
            } catch (e) {
              console.error("❌ From renderer - test failed:", e);
            }
          }
        }
        // Return a simple value that can be cloned
        typeof window.electronAPI !== 'undefined';
      `
        )
        .then((result) => {
          console.log("🔍 electronAPI available:", result);
        })
        .catch((err) => {
          console.error("❌ ExecuteJS error:", err);
        });
    }, 500);
  });

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: "deny" };
  });

  const loadURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../dist/index.html")}`;

  console.log("🔍 Loading URL:", loadURL);
  mainWindow.loadURL(loadURL);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
