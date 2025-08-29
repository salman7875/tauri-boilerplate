// preload.js
const { contextBridge } = require("electron");

const fs = require("fs");
const path = require("path");

console.log("🔍 Preload script is running!");
console.log("🔍 Process type:", process.type);
console.log("🔍 Context isolation:", process.contextIsolated);

contextBridge.exposeInMainWorld("electronAPI", {
  saveFileToExe: async (blob) => {
    if (!blob || !blob.arrayBuffer) throw new Error("Invalid Blob");

    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const exeFolder = path.dirname(process.execPath);
    const configPath = path.join(exeFolder, "config.txt");

    if (!fs.existsSync(configPath)) {
      throw new Error("Config file not found in executable directory");
    }
    const configContent = fs.readFileSync(configPath, "utf-8");
    const configLines = configContent.split("\n");
    let PXRX_FILENAME = null;
    configLines.forEach((line) => {
      const [key, value] = line.split("=");
      if (!key && !value) throw new Error("Invalid config line");
      if (key === "PCRX_FILENAME") {
        PXRX_FILENAME = value.trim();
      }
    });
    const filePath = path.join(exeFolder, PXRX_FILENAME);
    fs.writeFileSync(filePath, buffer);

    return filePath;
  },

  readFileFromExe: () => {
    const exeFolder = path.dirname(process.execPath);
    const configPath = path.join(exeFolder, "config.txt");
    if (!fs.existsSync(configPath)) {
      throw new Error("Config file not found in executable directory");
    }
    const configContent = fs.readFileSync(configPath, "utf-8");
    const configLines = configContent.split("\n");
    let PCTX_FILENAME = null;
    configLines.forEach((line) => {
      const [key, value] = line.split("=");
      if (!key && !value) throw new Error("Invalid config line");
      if (key === "PCTX_FILENAME") {
        PCTX_FILENAME = value.trim();
      }
    });

    const filePath = path.join(exeFolder, PCTX_FILENAME);
    if (!fs.existsSync(filePath)) {
      throw new Error(
        `File ${PCTX_FILENAME} not found in executable directory`
      );
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const buffer = fs.readFileSync(filePath);

    return { buffer, fileContent, filename: PCTX_FILENAME };
  },
});
